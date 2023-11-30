import ContactBtn from "../Components/ContactBtn/ContactBtn";
import Heading from "../Components/Heading/Heading";
import Nav from "../Components/Nav";
import Footer from "../Components/Sections/Footer";
import Hero from "../Components/Sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Nav />
      <ContactBtn />
      <Heading class="pt-28">About Us</Heading>
      <img src="/about-us/1.png" alt="" className="p-4 w-full lg:max-w-7xl lg:rounded-3xl lg:drop-shadow-2xl overflow-hidden" />
      <p className="p-4 max-w-5xl">
        Premium service apartment Indulge in the epitome of luxury with our
        Premium Service Apartments at Emerald Vista Luxury Suites. Nestled on
        the top floors, these exclusive 1-room kitchen apartments boast a lavish
        carpet area of 450 sq ft and feature all-new, posh premium interiors for
        a truly opulent experience. As you enter, you are greeted by a
        meticulously designed living room seamlessly connected to a sleek
        kitchenette, leading to a private balcony with breath taking views. The
        bedroom, with an attached washroom, exudes comfort and sophistication.
        <br />
        <br />
        Each Premium Service Apartment is fully air-conditioned, ensuring a
        delightful ambiance throughout your stay. To elevate your experience, we
        provide essential amenities including crockery, cutlery, a refrigerator,
        microwave, television, Wi-Fi, and a tea and coffee maker. These
        facilities are thoughtfully curated to cater to your every need,
        ensuring a seamless and luxurious stay. <br />
        Ideal for accommodating two persons, the Premium Service Apartment can
        graciously host up to a maximum of four persons, making it an ideal
        choice for couples, families, or small groups. Whether you seek a
        tranquil retreat or a lavish staycation, Emerald Vista Luxury Suites
        promises an unparalleled experience in our Premium Service Apartments.
      </p>
      <Footer />
    </main>
  );
}
