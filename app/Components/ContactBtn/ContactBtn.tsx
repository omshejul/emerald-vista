import React from 'react'
import { HiPhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const ContactBtn = () => {
  return (
    <div className='z-10 fixed bottom-0 left-0 m-2 p-2 flex lg:m-8'>
    <div className=' p-2 m-2 bg-yellow-300 rounded-full flex drop-shadow-lg'>
        <Link href='tel:+917768855757'><HiPhone className='w-9 h-9 lg:w-6 lg:h-6' color='black' /></Link>
    </div>
    <div className=' p-2 m-2 bg-[#25D366] rounded-full flex drop-shadow-lg'>
        <Link href='https://wa.me/917768855757?text=Hey'><IoLogoWhatsapp className='w-9 h-9 lg:w-6 lg:h-6' color='black' /></Link>
    </div>
    </div>
  )
}

export default ContactBtn

