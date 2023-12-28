import ContactBtn from "../Components/ContactBtn/ContactBtn"
import Nav from "../Components/Nav"
import Footer from "../Components/Sections/Footer"
import Heading from "../Components/Text/Heading"
import Para from "../Components/Text/Para"

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
              <Nav />
      <ContactBtn />
        <Heading class="pt-28">Offers for Our Corporate Clients</Heading>
        <div className="flex justify-center flex-wrap">
            <div className="card">
                <img src="" alt="" />
                <p className="" ></p>
                <p className=""></p>
            </div>
            <div className="card">
                <img src="" alt="" />
                <p className="" ></p>
                <p className=""></p>
            </div>
        </div>
      <Footer />
    </main>
  )
}

export default page
