"use client"
import Heading from '@/app/Components/Text/Heading';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        comments: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log(formData);
    };

    return (
        <Box component="form" className=' flex  flex-wrap bg-white p-4 text-black m-4' noValidate autoComplete="off" onSubmit={handleSubmit} >
            <Heading class='w-full'>Corporate Contact Us Form</Heading>
            <TextField
                className='w-[40%] m-2'
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                className='w-[40%] m-2'
                label="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                className='w-[40%] m-2'
                label="Phone No."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                className='w-[40%] m-2'
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                className='w-fu/w-[40%] m-2'
                label="Additional comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
};

export default ContactForm;
