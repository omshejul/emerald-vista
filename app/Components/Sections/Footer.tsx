import React from "react";
import Logo from "../Logo";
import Map from '../Map'
import Link from "next/link";


const Footer = () => {

  const yr =new Date().getFullYear()
  return (
    <>
    <footer className="flex justify-center text-black bg-white w-full mt-12">
      <div className="grid md:grid-cols-2 container place-self-center">
        <div className="flex items-center p-4">
          <Logo size={16} />
          <div className="data p-4">
            <div className="px-2 py-4">
              <div className="heading font-semibold text-xl">Address</div>
              <div className="content">
                52/5/3, Pune Banglore Highway Pashan Exit, behinf Audi showroom
                Mumbai, Pune, Maharashtra 411045
              </div>
            </div>
            <div className="px-2 py-4">
              <div className="heading font-semibold text-xl">Emerald Vista Front Office:</div>
              <div className="content">7768855757</div>
            </div>
            <div className="px-2 py-4">
              <div className="heading font-semibold text-xl">Email</div>
              <div className="content">emeraldvistaluxurtsuites@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="map">
          <Map/>
        </div>
      </div>
    </footer>
    <div className="copyrightcontainer flex flex-col lg:flex-row items-center justify-center m-4">
      <div className="copyright m-1">© {yr} Emerald Vista  |  All rights reserved</div>
      <div className="creators m-1 flex flex-col items-center lg:flex-row">
        <div className="btn flex pb-1">Designed by&nbsp; <Link className="underline" href="tel:+919623069768">Tanvi Vaze </Link></div><span className="hidden p-1 lg:inline">&nbsp;|&nbsp;</span>
        <div className="btn flex pb-1">Created by&nbsp; <Link className="underline" href="https://omshejul.com/qr/">Om Shejul</Link></div>
        </div>
     </div>
    </>
  );
};

export default Footer;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

