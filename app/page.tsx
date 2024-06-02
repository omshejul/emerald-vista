import Nav from "./Components/Nav";
import Services from "./Components/Sections/Services";
import Amenities from "./Components/Sections/Amenities";
import Banner from "./Components/Sections/Banner";
import Accommodation from "./Components/Sections/Accommodation";
import Testimonials from "./Components/Sections/Testimonials/Testimonials";
import Footer from "./Components/Sections/Footer";
import Hero from "./Components/Sections/Hero";
import ContactBtn from "./Components/ContactBtn/ContactBtn";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center ">
        <ContactBtn />
        <Nav />
        <Hero />
        <Services />
        <Amenities />
        <Banner />
        {/* <Accommodation /> */}
        <Testimonials />
        <Footer />
    </main>
  );
}
