import React from 'react'
import { HiPhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const ContactBtn = () => {
  return (
    <>
    <div className='fixed bottom-0 left-0 m-2 p-2 lg:m-8 bg-yellow-300 rounded-full'>
        <Link href='tel:+917768855757'><HiPhone size={'48'} color='black' /></Link>
    </div>
    </>
  )
}

export default ContactBtn
