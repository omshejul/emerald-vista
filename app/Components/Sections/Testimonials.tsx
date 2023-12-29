"use client"
import React, { useState } from "react";
import Heading from "../Text/Heading";

const Testimonials = () => {
  return (
    <div className="m-8 mb-8">
      <Heading>Testimonials</Heading>
      <div className="flex flex-wrap justify-center max-w-7xl">
        <Card >
          <div className="text-xl">Asosi Pat</div>
          <div className="star">⭐⭐⭐⭐</div><br />
          <ReadMore text="
          I stayed here for 2 weeks I must
          say i like that location near the high way...The staff are very kind
          and the place is safe ...The problem we had was that the ac had water
          leaked on it so in the morning the floor was always wet.. ... But
          overall, that place is ok for me, I will stay there again if ever I
          have a chance to visit India again ....🤗❤ from Philippines 🇵🇭"/>
          <br />
          Rooms4.0 Service4.0 Location5.0
        </Card>
        <Card>
          <div className="text-xl">Rohan Biswakarma</div>
          <div className="star">⭐⭐⭐⭐⭐</div><br />
          <ReadMore text="Emerald Vista Luxury Suites truly lives up to its name, providing a remarkable experience. The corporate service apartment boasts sophisticated decor, spacious rooms, and impeccable amenities, making it a haven for business travelers. Adding to the charm is the onsite restaurant, where culinary excellence meets a cozy ambiance. The diverse menu offered delightful gastronomic experiences, and the friendly staff ensured every visit was a pleasure. From check-in to dining, the level of hospitality was exceptional. For a seamless blend of luxurious accommodation, exquisite dining, and welcoming staff, Emerald Vista Luxury Suites stands as an exemplary choice. Highly recommended for a memorable stay.
          "/>Rooms5.0 Service5.0 Location5.0
        </Card>
        <Card>
          <div className="text-xl">Akshay Agrawal</div>
          <div className="star">⭐⭐⭐⭐⭐</div><br /><ReadMore text="Nice stay smooth check-in very friendly staff and we'll mannered. I checked in at 2 am they were still extremely friendly at that time also. Should have better food options in breakfast but still they offer you many so a very nice complete stay with spacious rooms balcony and living area
          "/>Rooms 5.0    Service 5.0    Location 5.0
        </Card>
        <Card>
          <div className="text-xl">B S Arun</div>
          <div className="star">⭐⭐⭐⭐⭐</div><br /><ReadMore text="It is a nice hotel. The room they provided is very spacious. It doesn't feel like a typical room; it resembles a one BHK house. Within the room, there's a small hall with a mounted TV, a kitchen setup for making tea or coffee, and a bedroom with lockers and a study table. They offer many features within the room. The staff is also very friendly and accommodating. Despite not knowing Hindi, I didn't face any difficulties in requesting services as the staff understands our thoughts well. I highly recommend staying here if you're in the Baner area of Pune
          "/>Rooms 5.0    Service 5.0    Location 5.0
        </Card>
        <Card>
          <div className="text-xl">Vaishnavi Kakade</div>
          <div className="star">⭐⭐⭐⭐⭐</div><br /><ReadMore text="Emerald Vista is a hotel situated in baner, Pune. It has spacious 1 rk service apartments which are loaded with facilities like fridge, microwave, electrical kettle, AC etc. The staff is friendly, the restaurant serves delicious food in reasonable prices, must visit place.
          "/>Rooms 5.0    Service 5.0    Location 5.0
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;


interface CardProps{
  children : any;
}
const Card:React.FC<CardProps> = (props) => {
  return (
    <div className="card max-w-[350px] w-full  h-min w-2xl p-4 md:p-6 lg:p-10 rounded-2xl m-2 bg-[#2B0738]">
      {props.children}
    </div>
  )
}

const ReadMore: React.FC<{ text: string }> = ({ text }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreShown(!isReadMoreShown);
  };

  const wordLimit = 20;
  const words = text.split(" ");
  const previewText = words.slice(0, wordLimit).join(" ");
  const remainingText = words.slice(wordLimit).join(" ");

  return (
    <p>
      {isReadMoreShown ? `${previewText} ${remainingText}` : `${previewText}`}
      <button onClick={toggleReadMore} className="read-more-button text-blue-500">
        {isReadMoreShown ? " Read Less" : ". . . Read More"}
      </button>
    </p>
  );
};