import Link from "next/link";
import Heading from "../Text/Heading";

// Images

function Services() {
  return (
    <>
      <div className="services flex flex-col content-center justify-center ">
        <Heading class='text-center'>Our Services</Heading>
        <div className=" flex flex-wrap justify-center ">
        <Link className="grid place-items-center" href="/our-services#premium">
          <img src="/services/1.png" className=" cursor-pointer hover:scale-105 transition-all -mx-10" width='350px' alt="" />
          </Link>
        <Link className="grid place-items-center" href="/our-services#deluxe">
          <img src="/services/2.png" className=" cursor-pointer hover:scale-105 transition-all -mx-10" width='350px' alt="" />
          </Link>
        <Link className="grid place-items-center" href="/our-services#terrace">
          <img src="/services/3.png" className=" cursor-pointer hover:scale-105 transition-all -mx-10" width='350px' alt="" />
          </Link>
        <Link className="grid place-items-center" href="/our-services#restraunt">
          <img src="/services/4.png" className=" cursor-pointer hover:scale-105 transition-all -mx-10" width='350px' alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Services;
