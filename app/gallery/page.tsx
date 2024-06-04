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
                    columnsCountBreakPoints={{ 350: 1, 900: 2, 1000: 3 }}
                >
                    <Masonry className="p-2">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div className="p-2" key={`${i}`}>
                                <img src={`/photo-gallery/${i + 1}.jpg`}  alt="" />
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
