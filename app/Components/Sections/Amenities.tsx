import React from 'react'
import Pill from '../Pill/Pill'
import Heading from '../Text/Heading'
const Amenities = () => {
  const classCustom = 'flex p-4 lg:mx-10';
  const imgSize = 4
  return (
    <div className='max-w-1xl'>
      <Heading>Room Amenities</Heading>
      <div className="container flex w-full items-center justify-center">
        <div className="  items-center grid md:grid-cols-2 lg:grid-cols-3 p-3 w-full max-w-7xl">
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Intercom.png'>Intercom</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/24x7 Running Hot Water.png'>24*7 Running Hot Water</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Balcony.png'>Balcony</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Tea-Coffee Maker.png'>Tea-Coffee Maker</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Air Conditioner.png'>Air Conditioner</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Crockery Cutlery.png'>Crockery Cutlery</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Television.png'>Television</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Microwave.png'>Microwave</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Cupboards.png'>Cupboards</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Housekeeping.png'>Housekeeping</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Refrigerator.png'>Refrigerator</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/room/Wi-Fi.png'>Wi-Fi</Pill>
          <div className="flex flex-wrap justify-center col-span-full">
          <Pill class={`w-full lg:w-max ${classCustom}`} imgSize={imgSize} img='/amenities/room/Kitchenette.png'>Kitchenette</Pill>
          <Pill class={`w-full lg:w-max ${classCustom}`} imgSize={imgSize} img='/amenities/room/Desk.png'>Desk</Pill>
          </div>
        </div>
      </div>
      <Heading>Property Amenities</Heading>
      <div className="container flex w-full items-center justify-center">
        <div className="items-center grid md:grid-cols-2 lg:grid-cols-3 p-3 w-full max-w-7xl">
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/property/CCTV Cameras.png'>CCTV Cameras</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/property/In-house Restaurant.png'>In-house Restaurant</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/property/Daily Housekeeping.png'>Daily Housekeeping</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/property/Terrace Garden.png'>Terrace Garden</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/property/Lift.png'>Lift</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/property/Parking.png'>Parking</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/property/Laundry.png'>Laundry</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/property/Reception.png'>Reception</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/property/Doctor on call.png'>Doctor on call</Pill>
          <div className="flex justify-center col-span-full">
          <Pill class={`w-full lg:w-1/4 ${classCustom}`} imgSize={imgSize} img='/amenities/property/In Room Dining.png'>In Room Dining</Pill>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Amenities
