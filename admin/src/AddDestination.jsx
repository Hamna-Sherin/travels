import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AddDestination = () => {

    const [Destination, setDestination] = useState("")
    const [Location, setLocation] = useState("")
    const [Category, setCategory] = useState("")
    const [Description, setDescription] = useState("")
    const [loading, setloading] = useState(false)
    const [Image, setImage] = useState("")

    const navigate = useNavigate()

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file);


        if (!file) return
        setloading(true)

        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "sample_upload")
        data.append("cloud_name", "dg6st72lq")

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dg6st72lq/image/upload", {
                method: "POST",
                body: data
            })

            const uploadedImage = await res.json()
            setImage(uploadedImage.secure_url);
            console.log(uploadedImage.secure_url);
        }

        catch (error) {
            console.error("Image upload failed", error)
        }
        finally {
            setloading(false)
        }
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post("https://travels-bp73.onrender.com/addDestination", { Destination, Location, Category, Description, Image })
            .then(result => {
                console.log(result)
                navigate('/destinations')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form className="w-50 p-4 border rounded" onSubmit={submit}>
                <h2 className="text-center mb-4">Add Destination</h2>
                <Form.Group className="mb-3" controlId="formBasicDestination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" placeholder="Enter Destination" onChange={(e) => setDestination(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" onChange={(e) => setLocation(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Select onChange={(e) => setCategory(e.target.value)} value={Category} >
                        <option value="">Select Category</option>
                        <option value="Beach">Beach</option>
                        <option value="Waterfall">Waterfall</option>
                        <option value="Hill Station">Hill Station</option>
                        <option value="Heritage">Heritage</option>
                        <option value="Spiritual">Spiritual</option>
                        <option value="Wildlife">Wildlife</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Backwaters">Backwaters</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" placeholder="Upload image" onChange={handleFileUpload} disabled={loading} name='image' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {loading === true ? "Uploading..." : "Submit"}
                </Button>

            </Form>
        </div>
    )
}

export default AddDestination