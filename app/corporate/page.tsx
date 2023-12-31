import ContactBtn from "../Components/ContactBtn/ContactBtn"
import Nav from "../Components/Nav"
import Footer from "../Components/Sections/Footer"
import Heading from "../Components/Text/Heading"
import Para from "../Components/Text/Para"
import CompanyLogos from "./company-logos/CompanyLogos"
import Form from "./form/CorporateForm"
import { HiOutlineBriefcase,HiOutlineUserGroup   } from "react-icons/hi";

const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Nav />
            <ContactBtn />
            <Heading class="pt-28">Our Corporate Customers</Heading>
            <CompanyLogos/><div className="my-10"></div>
            <Heading >Offers for Our Corporate Clients</Heading>
            <div className="flex justify-center flex-wrap">
                <div className="card p-8 m-5 max-w-md flex flex-col items-center text-center text-gray-700 bg-[#F0F1F8]">
                    <HiOutlineBriefcase className="text-gray-500" size="48px"/>
                    <p className=" p-2 text-2xl capitalize" >Corporate tie ups</p>
                    <p className=" text-gray-500 font-light p-2">We offer special prices for corporates offering a seamless blend of comfort and functionality for your professional home-away-from-home experience.</p>
                </div>
                <div className="card p-8 m-5 max-w-md flex flex-col items-center text-center text-gray-700 bg-[#F0F1F8]">
                    <HiOutlineUserGroup className="text-gray-500" size="48px"/>
                    <p className=" p-2 text-2xl capitalize" >Bulk bookings</p>
                    <p className=" text-gray-500 font-light p-2">Make your special occasions unforgettable with our service apartments exclusive deals for bulk reservations. Elevate weddings, family functions, and events with spacious, fully furnished accommodations.</p>
                </div>
            </div>
            <Para>
                At Emerald Vista Luxury Suites, we extend a warm invitation to our esteemed corporate guests, recognizing the unique needs of long-term stays. Our facility is specially designed to provide a comfortable and productive environment for business travelers. As part of our commitment to fostering lasting relationships with corporate partners, we have established agreements with prominent companies such as Lupin India, Tata Consultancy Ltd., Calsoft, and more. To enhance the corporate experience, we offer exclusive special offers and discounts for our valued corporate guests. For detailed information on corporate discounts or to explore potential collaborations, we encourage interested parties to reach out to us directly. Contact us to discover how Emerald Vista Luxury Suites can elevate the stay for your corporate travelers with tailored packages and unparalleled hospitality.
            </Para>
            <Form />
            <Footer />
        </main>
    )
}

export default page
