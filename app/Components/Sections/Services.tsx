import Heading from "../Text/Heading";
import Card from "../Card/Card";

// Images
import img1 from 'public/services/1.png'
import img2 from 'public/services/2.png'
import img3 from 'public/services/3.png'
import img4 from 'public/services/4.png'

function Services() {
  return (
    <>
      <div className="services flex flex-col content-center justify-center ">
        <Heading class='text-center'>Our Services</Heading>
        <div className=" flex flex-wrap justify-center ">
          <img src="/services/1.png" className=" hover:scale-105 transition-all -mx-10" width='350px' alt="" />
          <img src="/services/2.png" className=" hover:scale-105 transition-all -mx-10" width='350px' alt="" />
          <img src="/services/3.png" className=" hover:scale-105 transition-all -mx-10" width='350px' alt="" />
          <img src="/services/4.png" className=" hover:scale-105 transition-all -mx-10" width='350px' alt="" />
        </div>
      </div>
    </>
  );
}
export default Services;
