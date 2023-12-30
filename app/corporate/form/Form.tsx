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
        console.log(formData);
    };

    return (
        <Box component="form" className='flex flex-col  justify-center bg-fg rounded-lg p-3 lg:p-10 text-black m-4' noValidate autoComplete="off" onSubmit={handleSubmit} >
            <Heading class='w-full'>Corporate Contact Us Form</Heading>
            <div className="flex flex-wrap m-2 justify-center">
                <div className="m-2">
                    <TextField
                        className='bg-fg'
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                </div>
                <div className="m-2">

                    <TextField
                        className='bg-fg'
                        label="Email Id"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    /></div>
            </div>
            <div className="flex flex-wrap  justify-center">
                <div className="m-2">

                    <TextField
                        className='bg-fg'
                        label="Phone No."
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    /> </div><div className="m-2">
                    <TextField
                        className='bg-fg'
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    /></div> </div>
            <div className="flex w-full flex-wrap justify-center lg:justify-start">
                <div className="m-4 w-full">
                    <TextField
                        className=' w-full bg-fg'
                        label="Additional comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        rows={4}
                    /></div> </div>
            <div className="flex justify-center w-full pt-4">
                <Button type="submit" className=' py-3 px-6 bg-bg' variant="contained">
                    Submit
                </Button></div>
        </Box>
    );
};

export default ContactForm;
