"use client";
import Heading from "@/app/Components/Text/Heading";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvoeozdb");

  // This hook should always be called, regardless of the state.
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    comments: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Check for success after all hooks have been called
  if (state.succeeded) {
    return <p className="flex flex-col  justify-center bg-fg rounded-lg p-3 lg:p-10 text-black m-4">Your response has been successfully submited. <br /> Thanks for contacting us!</p>;
  }


  return (
    <Box
      component="form"
      className="flex flex-col  justify-center bg-fg rounded-lg p-3 lg:p-10 text-black m-4"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Heading class="w-full">Contact Us</Heading>
      <div className="flex flex-wrap  justify-center">
        <div className="m-2">
          <TextField
            className="bg-fg"
            label="Full Name"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </div>
        <div className="m-2">
          <TextField
            className="bg-fg"
            label="Email Id"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="flex flex-wrap  justify-center">
        <div className="m-2">
          <TextField
            className="bg-fg"
            label="Phone No."
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            required
          />
                <ValidationError 
        prefix="phone" 
        field="phone"
        errors={state.errors}
      />
        </div>
        <div className="m-2">
          <TextField
            className="bg-fg"
            label="Company"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center lg:justify-start">
        <div className="m-2 mt-3 w-full">
          <TextField
            className="bg-fg w-full"
            label="Additional comments"
            name="comments"
            id="comments"
            value={formData.comments}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={4}
          />
        </div>
      </div>
      <div className="flex justify-center w-full pt-4">
        <Button type="submit" disabled={state.submitting} className=" py-3 px-12 bg-bg" variant="contained">
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default ContactForm;
