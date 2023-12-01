import ContactBtn from "../Components/ContactBtn/ContactBtn";
import Heading from "../Components/Heading/Heading";
import Para from "../Components/Heading/Para";
import Subheading from "../Components/Heading/Subheading";
import Nav from "../Components/Nav";
import Footer from "../Components/Sections/Footer";
import Hero from "../Components/Sections/Hero";
import Image from "next/image";

// Images
import img1 from "public/about-us/1.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Nav />
      <ContactBtn />
      <Heading class="pt-28">About Us</Heading>
      <div className=" max-w-5xl p-4 w-full h-max lg:max-w-7xl lg:rounded-3xl lg:drop-shadow-2xl  flex justify-center overflow-hidden">
        <Image src={img1} alt="Hero" />
      </div>
      <p className="p-4 max-w-5xl text-center">
        Emerald Vista Luxury Suites is the brainchild of Mr. Jayant Sadavarte, a
        visionary entrepreneur and the driving force behind the esteemed
        construction firm, Jayant Sadavarte & Associates. In 2019, Mr. Sadavarte
        conceptualized and brought to life this luxurious establishment as one
        of his distinguished construction projects. Over the past five years,
        the dedicated team led by Mr. Jayant Sadavarte has consistently
        delivered exceptional service to its cherished guests, establishing a
        reputation for excellence in the hospitality industry. Adding a familial
        touch to the operations, Mr. Sadavarte's daughter, Yashashree Sadavarte,
        and son, Mr. Krishna Sadavarte, play pivotal roles in managing the
        day-to-day affairs of the facility. Their commitment to quality and
        hospitality reflects the family's dedication to providing an
        unparalleled experience for the guests of Emerald Vista Luxury Suites
      </p>
      <Heading>Our Services</Heading>
      <Subheading>
        Welcome to Emerald Vista Luxury Suites, where indulgence meets comfort
        in our Service Apartments.
      </Subheading>
      <Para>
        Premium service apartment Indulge in the epitome of luxury with our
        Premium Service Apartments at Emerald Vista Luxury Suites. Nestled on
        the top floors, these exclusive 1-room kitchen apartments boast a lavish
        carpet area of 450 sq ft and feature all-new, posh premium interiors for
        a truly opulent experience. As you enter, you are greeted by a
        meticulously designed living room seamlessly connected to a sleek
        kitchenette, leading to a private balcony with breath taking views. The
        bedroom, with an attached washroom, exudes comfort and sophistication. <br />
        Each Premium Service Apartment is fully air-conditioned, ensuring a
        delightful ambiance throughout your stay. To elevate your experience, we
        provide essential amenities including crockery, cutlery, a refrigerator,
        microwave, television, Wi-Fi, and a tea and coffee maker. These
        facilities are thoughtfully curated to cater to your every need,
        ensuring a seamless and luxurious stay. <br /> Ideal for accommodating two
        persons, the Premium Service Apartment can graciously host up to a
        maximum of four persons, making it an ideal choice for couples,
        families, or small groups. Whether you seek a tranquil retreat or a
        lavish staycation, Emerald Vista Luxury Suites promises an unparalleled
        experience in our Premium Service Apartments.
      </Para>
      <Heading>Photo Gallery</Heading>
      <img src="/about-us/photo-gallery/1.png" alt="" />
      <Footer />
    </main>
  );
}
