import React from 'react'
import Heading from '../Heading/Heading'
import Pill from '../Pill/Pill'

const Accommodation = () => {
    const imgSize = 7
    const pillClass = 'flex max-w-xl text-lg leading-8 font-light p-4 lg:mx-10';
    return (
        <div className='flex flex-col items-center justify-center'>
            <Heading>Perfect Spaces for Every Lifestyle</Heading>
            <p className=' text-lg font-light max-w-2xl text-center leading-8 m-2'>Emerald Vista Luxury Suites proudly caters to a diverse spectrum of guests, ensuring a tailored and exceptional experience for all.</p>
            <div className="flex flex-wrap justify-center p-3 ">
                <Pill class={pillClass} img='/accommodation/1.png' imgSize={imgSize} >For corporate travellers, our conference facilities and central location provide convenience and efficiency. </Pill>
                <Pill class={pillClass} img='/accommodation/2.png' imgSize={imgSize} >Families can enjoy the ample space and the convenience of our in-house restaurant, while solo female travellers find a secure and welcoming environment.</Pill>
                <Pill class={pillClass} img='/accommodation/3.png' imgSize={imgSize} >Long-term stays are made comfortable with fully equipped kitchenettes and spacious accommodations.</Pill>
                <Pill class={pillClass} img='/accommodation/4.png' imgSize={imgSize} >Couples seeking a romantic retreat will appreciate the luxurious ambiance of our Deluxe and Premium Service Apartments.</Pill>
            </div>
            <p className=' text-lg font-light max-w-4xl text-center leading-8 m-2'>
                With a commitment to impeccable service, amenities like the Terrace Garden for events, and the versatility to accommodate various needs, Emerald Vista Luxury Suites is the ideal destination for all types of guests, promising a memorable and personalized stay for everyone.</p>
        </div>
    )
}

export default Accommodation
