const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const DestinationModel = require('./models/Destinations')
const BookingModel = require('./models/Booking')
const bcrypt = require("bcryptjs");
const UserModel = require("./models/User");
const PackageModel = require("./models/Package")
const EnquiryModel = require("./models/Enquiry")
const PackageBookingModel = require("./models/Package-Booking");
const NotificationModel = require("./models/Notification");



const app = express();

// const enquiryRoutes = require("./routes/enquiryRoutes"); 

app.use(cors());
app.use(express.json());

// app.use("/api", enquiryRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


// app.get('/destination', async (req, res) => {
//     try {
//         const page = parseInt(req.query.page) || 1;
//         const limit = parseInt(req.query.limit) || 5;
//         const skip = (page - 1) * limit;

//         const location = req.query.location || "";
//         const category = req.query.category || "";

//         let query = {};

//         if (location) {
//             query.Location = location;
//         }

//         if (category) {
//             query.Category = { $regex: category, $options: "i" };
//         }

//         const total = await DestinationModel.countDocuments(query);

//         const destinations = await DestinationModel.find(query)
//             .skip(skip)
//             .limit(limit);

//         res.json({
//             destinations,
//             totalPages: Math.ceil(total / limit),
//             currentPage: page
//         });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

app.get('/destination', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const location = req.query.location || "";
        const category = req.query.category || "";
        const search = req.query.search || ""; // ✅ NEW

        let query = {};

        // 🔹 LOCATION FILTER (exact match)
        if (location) {
            query.Location = location;
        }

        // 🔹 CATEGORY FILTER (case-insensitive)
        if (category) {
            query.Category = { $regex: category, $options: "i" };
        }

        // 🔹 SEARCH (multi-field)
        if (search) {
            query.$or = [
                { Destination: { $regex: search, $options: "i" } },
                { Location: { $regex: search, $options: "i" } },
                { Category: { $regex: search, $options: "i" } }
            ];
        }

        const total = await DestinationModel.countDocuments(query);

        const destinations = await DestinationModel.find(query)
            .skip(skip)
            .limit(limit);

        res.json({
            destinations,
            totalPages: Math.ceil(total / limit),
            currentPage: page
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/getDestination/:id', (req, res) => {
    const id = req.params.id;
    DestinationModel.findById({ _id: id })
        .then(destinations => res.json(destinations))
        .catch(err => res.json(err))
})

app.post("/addDestination", (req, res) => {
    DestinationModel.create(req.body)
        .then(destinations => res.json(destinations))
        .catch(err => res.json(err))
});

app.delete('/deleteDestination/:id', (req, res) => {
    const id = req.params.id;
    DestinationModel.findByIdAndDelete({ _id: id })
        .then(destinations => res.json(destinations))
        .catch(err => res.json(err))
})

app.put('/editDestination/:id', (req, res) => {
    const id = req.params.id;
    DestinationModel.findByIdAndUpdate({ _id: id }, {
        Image: req.body.Image,
        Destination: req.body.Destination,
        Location: req.body.Location,
        Category: req.body.Category,
        Description: req.body.Description
    })
        .then(destinations => res.json(destinations))
        .catch(err => res.json(err))
})

app.get("/destination/:id", async (req, res) => {
    const destination = await DestinationModel.findById(req.params.id);
    res.json(destination);
});

app.post("/booking", async (req, res) => {
    try {
        const booking = new BookingModel({
            ...req.body,
            status: "pending"
        });
        await booking.save();

        res.json({ message: "Booking saved successfully" });



    } catch (err) {
        res.status(500).json(err);
    }
});

app.get("/bookings", async (req, res) => {
    try {
        const bookings = await BookingModel.find().sort({ _id: -1 });
        res.json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.delete('/booking/:id', (req, res) => {
    const id = req.params.id;
    BookingModel.findByIdAndDelete(id)
        .then(bookings => res.json(bookings))
        .catch(err => res.json(err))
})

app.put("/bookings/:id", async (req, res) => {
    try {
        const { status } = req.body;

        const updatedBooking = await BookingModel.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        res.json(updatedBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!phone || phone.length !== 10) {
            return res.status(400).json({ message: "Invalid phone number" });
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            name,
            email,
            phone,
            password: hashedPassword
        });

        await newUser.save();

        res.json({ message: "User registered successfully" });

    } catch (err) {
        res.status(500).json(err);
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find().sort({ _id: -1 });
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.json({
            message: "Login successful",
            user
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

app.post("/addPackage", (req, res) => {
    PackageModel.create(req.body)
        .then(packages => res.json(packages))
        .catch(err => res.json(err))
});

app.get('/allPackages', (req, res) => {
    PackageModel.find()
        .then(packages => res.json(packages))
        .catch(err => res.json(err))
})

app.get("/packages", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        const packages = await PackageModel.find().skip(skip).limit(limit);
        const total = await PackageModel.countDocuments();

        res.json({
            packages,
            totalPages: Math.ceil(total / limit),
            currentPage: page
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/getPackage/:id', (req, res) => {
    const id = req.params.id;
    PackageModel.findById({ _id: id })
        .then(packages => res.json(packages))
        .catch(err => res.json(err))
})

app.put('/editPackage/:id', (req, res) => {
    const id = req.params.id;
    PackageModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        destination: req.body.destination,
        category: req.body.category,
        guest: req.body.guest,
        price: req.body.price,
        duration: req.body.duration,
        slots: req.body.slots,
        image: req.body.image,
        description: req.body.description
    })
        .then(packages => res.json(packages))
        .catch(err => res.json(err))
})

app.delete('/deletePackage/:id', (req, res) => {
    const id = req.params.id;
    PackageModel.findByIdAndDelete({ _id: id })
        .then(packages => res.json(packages))
        .catch(err => res.json(err))
})

app.put("/users/:id", async (req, res) => {
    try {
        const { name, email, phone, location } = req.body;

        const updated = await UserModel.findByIdAndUpdate(
            req.params.id,
            { name, email, phone, location },
            { new: true }
        );

        if (!updated) return res.status(404).json({ message: "User not found" });

        res.json({ message: "Profile updated", user: updated });

    } catch (err) {
        res.status(500).json(err);
    }
});


/* CREATE ENQUIRY */
// app.post("/", async (req, res) => {
//     try {
//         const enquiry = await EnquiryModel.create(req.body);
//         res.status(201).json({ success: true, data: enquiry });
//     } catch (err) {
//         res.status(500).json({ success: false, message: err.message });
//     }
// });

/* GET ALL ENQUIRIES */
// app.get("/", async (req, res) => {
//     try {
//         const enquiries = await EnquiryModel.find().sort({ createdAt: -1 });
//         res.json({ success: true, data: enquiries });
//     } catch (err) {
//         res.status(500).json({ success: false });
//     }
// });

// /* UPDATE STATUS */
// app.put("/:id", async (req, res) => {
//     try {
//         const updated = await EnquiryModel.findByIdAndUpdate(
//             req.params.id,
//             { status: req.body.status },
//             { new: true }
//         );
//         res.json({ success: true, data: updated });
//     } catch (err) {
//         res.status(500).json({ success: false });
//     }
// });

// /* DELETE */
// app.delete("/:id", async (req, res) => {
//     try {
//         await EnquiryModel.findByIdAndDelete(req.params.id);
//         res.json({ success: true });
//     } catch (err) {
//         res.status(500).json({ success: false });
//     }
// });

app.post("/enquiry", async (req, res) => {
    console.log(req.body);

    try {
        const newEnquiry = new EnquiryModel(req.body);
        await newEnquiry.save();
        res.status(201).json({ message: "Enquiry saved" });
    } catch (err) {
        res.status(500).json({ message: "Error saving enquiry" });
    }
});

app.get("/enquiry", async (req, res) => {
    const data = await EnquiryModel.find().sort({ createdAt: -1 });
    res.json({ data });
});

app.put("/enquiry/:id", async (req, res) => {
    const { status } = req.body;

    const updated = await EnquiryModel.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
    );

    res.json(updated);
});

app.delete("/enquiry/:id", async (req, res) => {
    await EnquiryModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});

//* ================= PACKAGE BOOKINGS ================= */

// CREATE
app.post("/package-booking", async (req, res) => {
    try {
        const newBooking = new PackageBookingModel(req.body);
        await newBooking.save();
        await NotificationModel.create({
            title: "New Booking",
            message: `${req.body.name} booked ${req.body.packageName}`,
            type: "success"
        });
        res.status(201).json({ message: "Package booking saved" });
    } catch (err) {
        res.status(500).json({ message: "Error saving booking" });
    }
});

// GET
app.get("/package-bookings", async (req, res) => {
    try {
        const bookings = await PackageBookingModel.find().sort({ createdAt: -1 });
        res.json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
app.put("/package-bookings/:id", async (req, res) => {
    try {
        const updated = await PackageBookingModel.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE
app.delete("/package-bookings/:id", async (req, res) => {
    try {
        await PackageBookingModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE (use this when booking happens)
app.post("/notifications", async (req, res) => {
    const notif = await NotificationModel.create(req.body);
    res.json(notif);
});

// GET ALL
app.get("/notifications", async (req, res) => {
    const data = await NotificationModel.find().sort({ createdAt: -1 });
    res.json(data);
});

// MARK AS READ
app.put("/notifications/:id", async (req, res) => {
    const updated = await NotificationModel.findByIdAndUpdate(
        req.params.id,
        { read: true },
        { new: true }
    );
    res.json(updated);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});