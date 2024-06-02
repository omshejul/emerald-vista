import ContactBtn from "../Components/ContactBtn/ContactBtn";
import Nav from "../Components/Nav";
import Footer from "../Components/Sections/Footer";
import Heading from "../Components/Text/Heading";
import Para from "../Components/Text/Para";

import Image from "next/image";

// Images
import journey from "public/about-us/journey.svg";
import img1 from "public/about-us/group-photo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Nav />
      <ContactBtn />

      <Heading class="pt-28"> </Heading>
      <div className="p-8">
      <Image src={journey} alt="journey" />
      </div>
      <div className="grid container place-items-center mt-20">
        <Para className="flex items-center">
          <div className="lg:text-center">
            Emerald Vista Luxury Suites is the brainchild of Mr. Jayant
            Sadavarte, a visionary entrepreneur and the driving force behind the
            esteemed construction firm, Jayant Sadavarte & Associates. In 2019,
            Mr. Sadavarte conceptualized and brought to life this luxurious
            establishment as one of his distinguished construction projects.
            Over the past five years, the dedicated team led by Mr. Jayant
            Sadavarte has consistently delivered exceptional service to its
            cherished guests, establishing a reputation for excellence in the
            hospitality industry. Adding a familial touch to the operations, Mr.
            Sadavarte&apos;s daughter, Yashashree Sadavarte, and son, Mr.
            Krishna Sadavarte, play pivotal roles in managing the day-to-day
            affairs of the facility. Their commitment to quality and hospitality
            reflects the family&apos;s dedication to providing an unparalleled
            experience for the guests of Emerald Vista Luxury Suites.
          </div>
        </Para>
      </div>
      <Footer />
    </main>
  );
}
