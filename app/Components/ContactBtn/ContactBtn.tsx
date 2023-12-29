import React from 'react'
import { HiPhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const ContactBtn = () => {
  return (
    <div className='z-10 fixed bottom-0 max-w-7xl w-full m-2 p-2 flex justify-between lg:m-8 pointer-events-none opacity-90'>
      <Link href='tel:+917768855757' className='btn  pointer-events-auto p-3 m-2 hover:border-yellow-700 border-2 bg-yellow-300 rounded-full flex drop-shadow-lg border-transparent'><HiPhone className='w-7 h-7 lg:w-6 lg:h-6' color='black' /></Link>
      <Link href='https://wa.me/917768855757?text=Hey' className='btn pointer-events-auto p-3 m-2 hover:border-green-700 border-2 bg-[#25D366] rounded-full flex drop-shadow-lg border-transparent'><IoLogoWhatsapp className='w-7 h-7 lg:w-6 lg:h-6 aspect-square' color='white' /></Link>
    </div>
  )
}

export default ContactBtn

