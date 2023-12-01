import React from 'react'
import Pill from '../Pill/Pill'
import Heading from '../Text/Heading'
const Amenities = () => {
  const pillClass = 'flex p-4 lg:mx-10';
  const imgSize = 4
  return (
    <div className='max-w-1xl'>
      <Heading>Amenities</Heading>
      <h2 className='text-center text-base md:text-left md:text-2xl my-8 ml-4 text-[#F8E6D0] '>Room Amenities</h2>
      <div className="container flex w-full items-center justify-center">
        <div className="  items-center grid md:grid-cols-2 lg:grid-cols-3 p-3 w-full max-w-7xl">
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Intercom.png'>Intercom</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/24*7 Running Hot Water.png'>24*7 Running Hot Water</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Balcony.png'>Balcony</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Tea-Coffee Maker.png'>Tea-Coffee Maker</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Air Conditioner.png'>Air Conditioner</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Crockery Cutlery.png'>Crockery Cutlery</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Television.png'>Television</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Microwave.png'>Microwave</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Cupboards.png'>Cupboards</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Housekeeping.png'>Housekeeping</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Refrigerator.png'>Refrigerator</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/room/Wi-Fi.png'>Wi-Fi</Pill>
        </div>
      </div>
      <h2 className='text-center text-base md:text-left md:text-2xl my-8 ml-4 text-[#F8E6D0]'>Property Amenities</h2>
      <div className="container flex w-full items-center justify-center">
        <div className="items-center grid md:grid-cols-2 lg:grid-cols-3 p-3 w-full max-w-7xl">
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/CCTV Cameras.png'>CCTV Cameras</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/In-house Restaurant.png'>In-house Restaurant</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/Daily Housekeeping.png'>Daily Housekeeping</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/Terrace Garden.png'>Terrace Garden</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/Lift.png'>Lift</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/Parking.png'>Parking</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/Laundry.png'>Laundry</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/Reception.png'>Reception</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/Doctor on call.png'>Doctor on call</Pill>
          <Pill class={pillClass} imgSize={imgSize} img='/amenities/property/In Room Dining.png'>In Room Dining</Pill>
        </div>
      </div>
    </div>
  )
}

export default Amenities
