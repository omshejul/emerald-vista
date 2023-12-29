import ContactBtn from "../Components/ContactBtn/ContactBtn"
import Nav from "../Components/Nav"
import Footer from "../Components/Sections/Footer"
import Heading from "../Components/Text/Heading"
import Para from "../Components/Text/Para"
import Subheading from "../Components/Text/Subheading"
import ContactDetails from "./contact-details/ContactDetails"
import ContactForm from "./form/ContactForm"

const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Nav />
            <ContactBtn />
            <Heading class="pt-28">Contact Us</Heading>
            <Subheading>Welcome to Emerald Vista, where luxury meets exceptional service. We invite you to reach out to us with any questions or concerns.</Subheading>
            <div className=" justify-center items-center bg-fg text-bg py-5 lg:py-20 m-5 flex w-full max-w-5xl">
                <Para className=" max-w-lg">We don&apos;t just sell you an accommodation at the Emerald Vista. We specialize in crafting experiences for you.</Para>
            </div>
            <div className="flex flex-wrap justify-center items-center">
                <ContactDetails />
                <ContactForm />
            </div>
            <Footer />
        </main>
    )
}

export default page
