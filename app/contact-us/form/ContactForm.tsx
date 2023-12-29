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
        <Box component="form" className='flex flex-col  justify-center bg-fg rounded-lg p-3 lg:p-10 text-black m-4' noValidate autoComplete="off" onSubmit={handleSubmit} >
            <Heading class='w-full'>Contact Us</Heading>
            <div className="flex flex-wrap  justify-center">
            
            <TextField
                className='bg-fg m-2'
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                className='bg-fg m-2'
                label="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
            /></div>
                        <div className="flex flex-wrap  justify-center">
            <TextField
                className='bg-fg m-2'
                label="Phone No."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                className='bg-fg m-2'
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                variant="outlined"
                required
            /></div>
                        <div className="flex flex-wrap justify-center lg:justify-start">
            <TextField
                className='bg-fg m-2'
                label="Additional comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
            /></div>
                        <div className="flex justify-center w-full pt-4">
            <Button type="submit" className=' py-3 px-6 bg-bg' variant="contained">
                Submit
            </Button></div>
        </Box>
    );
};

export default ContactForm;
