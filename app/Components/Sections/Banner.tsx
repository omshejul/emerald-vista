import Number from "../AnimateNumbers/AnimateNumbers";

const Banner = () => {
  return (
    <div className="grid place-items-center bg-[#F8E6D0] text-black w-full max-w-7xl m-8">
      <div className="container flex m-2 flex-col md:flex-row w-fit">
        <div className="md:p-2 lg:p-5 text-center md:mx-5 ">
          <div className="p-1 head text-5xl font-bold"><Number start={80} end={100} duration={1000} />K+</div>
          <div className="p-1 description">Guests Visited</div>
        </div>
        <div className="md:p-2 lg:p-5 text-center md:mx-5 ">
          <div className="p-1 head text-5xl font-bold"><Number start={30} end={40} duration={1000} />K+</div>
          <div className="p-1 description">Stays Completed</div>
        </div>
        <div className="md:p-2 lg:p-5 text-center md:mx-5 ">
          <div className="p-1 head text-5xl font-bold"> <Number start={80} end={100} duration={1000} />+</div>
          <div className="p-1 description">Corporate Companies</div>
        </div>
        <div className="md:p-2 lg:p-5 text-center md:mx-5 ">
          <div className="p-1 head text-5xl font-bold"><Number start={480} end={500} duration={1000} />+</div>
          <div className="p-1 description">Events</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
