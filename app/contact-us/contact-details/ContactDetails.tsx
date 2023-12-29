import React from 'react';
import { Adamina } from "next/font/google";

const adamina = Adamina({
  subsets: ["latin"],
  weight: "400",
});
const ContactDetails = () => {
    return (

        <div className='p-5 m-5'>
            <div>
                <div className='p-4'>
                    <h2>Emerald Vista Front Office:</h2>
                    <p className={adamina.className}>7768855757</p>
                </div>
                <div className='p-4'>
                    <h2>Contact Person: Mr. Jayant Sadavarte</h2>
                    <p className={adamina.className}>9823303957</p>
                </div>
            </div>
            <div>
                <div className='p-4'>
                    <h2>Emerald Vista Front Office:</h2>
                    <p className={adamina.className}>737852079</p>
                </div>
                <div className='p-4'>
                    <h2>Contact Person: Miss. Yashashree Sadavarte</h2>
                    <p className={adamina.className}>9823095600</p>
                </div>
            </div>
            <div>
                <div className='p-4'>
                    <h2>Email Id:</h2>
                    <p className={adamina.className}>emeraldvistaluxurysuites@gmail.com</p>
                </div>
            </div>
        </div>

    );
};

export default ContactDetails;
