import React from "react";

const Banner = () => {
  return (
    <div className="grid place-items-center bg-[#F8E6D0] text-black w-full max-w-7xl m-8">
      <div className="container flex m-2 flex-col md:flex-row w-fit">
        <div className="md:p-2 lg:p-5 text-center md:mx-5 ">
          <div className="p-1 head text-5xl font-bold">1,00K+</div>
          <div className="p-1 description">Guests Visited</div>
        </div>
        <div className="md:p-2 lg:p-5 text-center md:mx-5 ">
          <div className="p-1 head text-5xl font-bold">40K+</div>
          <div className="p-1 description">Stays Completed</div>
        </div>
        <div className="md:p-2 lg:p-5 text-center md:mx-5 ">
          <div className="p-1 head text-5xl font-bold"> 100+</div>
          <div className="p-1 description">corporate companies</div>
        </div>
        <div className="md:p-2 lg:p-5 text-center md:mx-5 ">
          <div className="p-1 head text-5xl font-bold">500+</div>
          <div className="p-1 description">500+ events</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
