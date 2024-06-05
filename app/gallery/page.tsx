"use client"
import ContactBtn from "../Components/ContactBtn/ContactBtn"
import Nav from "../Components/Nav"
import Footer from "../Components/Sections/Footer"
import Heading from "../Components/Text/Heading"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Nav />
            <ContactBtn />
            <Heading class="pt-28"> Photo Gallery</Heading>
            <div className="w-full">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 2, 900: 3, 1000: 3 }}
                >
                    <Masonry className="p-1">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div className="p-1 " key={`${i}`}>
                                <img src={`/photo-gallery/${i + 1}.jpg`} className="rounded"  alt="" />
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <Footer />
        </main>
    )
}

export default page
