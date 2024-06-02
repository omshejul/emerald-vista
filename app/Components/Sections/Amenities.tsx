"use client"
import React from 'react'
import Pill from '../Pill/Pill'
import Heading from '../Text/Heading'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const Amenities = () => {
  const classCustom = 'flex text-xl p-2 mt-8 lg:mx-10 ';
  const imgSize = 4
  const detailsClassCustom = 'flex items-center lg:mx-12 p-1 translate-x-4 -mt-2';
  const detailsImgSize = 1.5

  return (
    <div className='max-w-1xl mb-10'>
      <Heading>Popular facilities</Heading>
      <div className="container flex  w-full items-center justify-center">
        <div className="  items-center grid md:grid-cols-2 lg:grid-cols-3 p-3 w-full max-w-7xl">
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/Studio Apartment.svg'>Studio Apartment</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/Wifi.svg'>Wifi</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/Parking.svg'>Parking</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/Room service.svg'>Room service</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/Family rooms.png'>Family rooms</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/Couple Room.svg'>Couple Room</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/Corporate friendly.svg'>Corporate friendly</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/Inhouse restaurant.svg'>Inhouse restaurant</Pill>
          <Pill class={classCustom} imgSize={imgSize} img='/amenities/24-hours front desk.png'>24-hours front desk</Pill>
          {/* <Pill class={classCustom} imgSize={imgSize} img='/amenities/Inroom balcony.png'>Inroom balcony</Pill> */}
        </div>
      </div>
      <Heading>Property Amenities</Heading>
      <div className="container w-full items-center justify-center">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 900: 2, 1000: 3 }}
        >
          <Masonry>
            {/* <div className="items-center grid md:grid-cols-2 lg:grid-cols-3 p-3 w-full max-w-7xl"> */}
            <div>
              <Pill class={classCustom} imgSize={imgSize} img='/amenities/Studio Apartment.svg'>Studio Apartment</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Deluxe Studio Room</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Premium Studio Room</Pill>
            </div>
            <div>
              <Pill class={classCustom} imgSize={imgSize} img='/amenities/Bedroom.svg'>Bedroom</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Spring mattresses</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Twin bed</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Double bed</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Linen</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Air conditioner</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Wardrobe</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Locker</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Study table</Pill>
            </div>
            <div>
              <Pill class={classCustom} imgSize={imgSize} img='/amenities/24-hours front desk.png'>Reception</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>24 hours front desk</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Common luggage locker</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Multiple payment methods</Pill>
            </div>
            <div>
              <Pill class={classCustom} imgSize={imgSize} img='/amenities/Bedroom.svg'>Room amenities</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Living room</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>In room kitchenette</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Bedroom</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Bathroom</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Balcony</Pill>
            </div>
            <div>
              <Pill class={`${classCustom} lg:mt-16`} imgSize={imgSize} img='/amenities/Bathroom.svg'>Bathroom</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>24 hours hot water</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Towels</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Toilet paper</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Shower</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Free toiletries</Pill>
            </div>
            <div>
              <Pill class={classCustom} imgSize={imgSize} img='/amenities/Cleaning services.svg'>Cleaning services</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Daily Housekeeping</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Laundry</Pill>
            </div>
            <div>
              <Pill class={`${classCustom} lg:mt-16`} imgSize={imgSize} img='/amenities/Living room.svg'>Living room</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Couch </Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Television</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Cable channels</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Intercom</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Teapoy table</Pill>
            </div>
            <div>
              <Pill class={`${classCustom} lg:mt-16`} imgSize={imgSize} img='/amenities/Inroom balcony.png'>Balcony</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Safety railings </Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Chair</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Scenic view</Pill>
            </div>
            <div>
              <Pill class={classCustom} imgSize={imgSize} img='/amenities/Security.svg'>Security</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Fire extinguishers </Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>CCTV camera</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Key card access</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>24-hours security</Pill>
            </div>
            <div>
              <Pill class={`${classCustom} lg:mt-16`} imgSize={imgSize} img='/amenities/In-room kitchenette.png'>In-room kitchenette</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Refrigerator</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Microwave</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Electric kettle</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Crockery </Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Cutlery</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Sink</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Drovers</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Tea-coffee sachets</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Complimentary water bottle</Pill>
            </div>
            <div>
              <Pill class={`${classCustom} lg:mt-20`} imgSize={imgSize} img='/amenities/Inhouse restaurant.svg'>Inhouse restaurant</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Homestyle cooked food</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Breakfast</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Safety & Hygiene</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Healthy food options</Pill>
            </div>

            <div>
              <Pill class={classCustom} imgSize={imgSize} img='/amenities/General.svg'>General</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Terrace garden</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Lift</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Staircase</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Doctor on call</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Travel services</Pill>
            </div>
            <div>{/* blank */}</div>
            <div>{/* blank */}</div>
            <div>
              <Pill class={classCustom} imgSize={imgSize} img='/amenities/Room service.svg'>Room service</Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>In-room dining </Pill>
              <Pill class={detailsClassCustom} imgSize={detailsImgSize} img='/amenities/tick.svg'>Cleaning services</Pill>
            </div>
            <div>{/* blank */}</div>
            <div>{/* blank */}</div>
            <div>
              <Pill class={`${classCustom} lg:mt-1`} imgSize={imgSize} img='/amenities/Parking.svg'>Parking</Pill>
            </div>
            <div>{/* blank */}</div>
            <div>{/* blank */}</div>
            <div>
              <Pill class={`${classCustom} lg:mt-1`} imgSize={imgSize} img='/amenities/Wifi.svg'>Internet</Pill>
            </div>
          </Masonry>
        </ResponsiveMasonry>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Amenities
