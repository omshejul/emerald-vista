"use client"
import { useState, SetStateAction, useEffect } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import gallery1 from "public/about-us/photo-gallery/1.jpg"
import { HiOutlineX } from "react-icons/hi"
import ContactBtn from "../Components/ContactBtn/ContactBtn"
import Nav from "../Components/Nav"
import Footer from "../Components/Sections/Footer"
import Heading from "../Components/Text/Heading"
import { default as Para, default as Subheading } from "../Components/Text/Para"
interface TabItem {
    label: string
    content: string
}

const tabVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

const Page: React.FC = () => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState('')

    const openImageModal = (imageUrl: SetStateAction<string>) => {
        setCurrentImage(imageUrl)
        setIsImageModalOpen(true)
    }

    const closeImageModal = () => setIsImageModalOpen(false)
    const [selectedTab, setSelectedTab] = useState('Premium Service Apartments')

    useEffect(() => {
        // Read the hash from the URL (window.location.hash)
        const hash = window.location.hash.replace('#', '') // Remove '#' from hash
        console.log(window.location.hash)

        // Set selectedTab based on the hash
        if (hash === 'premium') setSelectedTab('Premium Service Apartments')
        else if (hash === 'deluxe') setSelectedTab('Deluxe Service Apartments')
        else if (hash === 'terrace') setSelectedTab('Terrace Garden')
        else if (hash === 'restaurant') setSelectedTab('Restaurant')

        if (window.location.hash != '') {
            // Find the element
            const el = document.getElementById('servicesDiv')
            if (el) {
                // Scroll to the element smoothly
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }, [])
    const tabs: TabItem[] = [
        { label: 'Premium Service Apartments', content: `Premium service apartment Indulge in the epitome of luxury with our Premium Service Apartments at Emerald Vista Luxury Suites. Nestled on the top floors, these exclusive 1-room kitchen apartments boast a lavish carpet area of 450 sq ft and feature all-new, posh premium interiors for a truly opulent experience.        As you enter, you are greeted by a meticulously designed living room seamlessly connected to a sleek kitchenette, leading to a private balcony with breath taking views. The bedroom, with an attached washroom, exudes comfort and sophistication.        Each Premium Service Apartment is fully air-conditioned, ensuring a delightful ambiance throughout your stay. To elevate your experience, we provide essential amenities including crockery, cutlery, a refrigerator, microwave, television, Wi-Fi, and a tea and coffee maker. These facilities are thoughtfully curated to cater to your every need, ensuring a seamless and luxurious stay.        Ideal for accommodating two persons, the Premium Service Apartment can graciously host up to a maximum of four persons, making it an ideal choice for couples, families, or small groups. Whether you seek a tranquil retreat or a lavish staycation, Emerald Vista Luxury Suites promises an unparalleled experience in our Premium Service Apartments.` },
        { label: 'Deluxe Service Apartments', content: 'Welcome  to Emerald Vista Luxury Suites, where indulgence meets comfort in our Deluxe Service Apartments. These meticulously designed 1-room kitchen apartments boast a generous carpet area of 450 sq ft, providing a spacious and inviting environment for our guests.        Each Deluxe Service Apartment features a well-appointed living room seamlessly connected to a compact kitchenette, allowing for a convenient and cozy living experience. A private balcony offers a breath of fresh air and a tranquil space to unwind. The bedroom is a sanctuary of relaxation, complete with an attached washroom for added convenience.        Our Deluxe Service Apartments are fully air-conditioned, ensuring a pleasant atmosphere throughout your stay. To enhance your living experience, we provide essential amenities such as crockery, cutlery, a refrigerator, microwave, television, Wi-Fi, and a tea and coffee maker. These thoughtful touches are aimed at making your stay as comfortable and enjoyable as possible.    Ideal for accommodating two persons, the Deluxe Service Apartment can graciously host up to a maximum of four persons, making it a versatile choice for couples, families, or small groups. Whether you are traveling for business or leisure, Emerald Vista Luxury Suites promises a luxurious and convenient stay in our Deluxe Service Apartments.' },
        { label: 'Terrace Garden', content: 'Experience the epitome of elegance at Emerald Vista Luxury Suites with our enchanting Terrace Garden. Nestled atop the building, this unique space boasts a lush expanse of beautiful green grass, creating a serene and inviting atmosphere. The Terrace Garden at Emerald Vista is not just a green oasis; it is a versatile venue suitable for intimate gatherings, small functions, or corporate events of up to 50-60 persons. Whether you\'re hosting a social celebration or a corporate affair, the scenic backdrop and open-air ambiance provide the perfect setting for memorable moments. Immerse yourself in the tranquility of our Terrace Garden while enjoying the stunning views that surround you. Let the vibrant greenery and open skies set the stage for your special occasions, creating an ambiance that seamlessly blends sophistication with nature. At Emerald Vista Luxury Suites, we invite you to elevate your events to new heights with the charm and versatility of our Terrace Garden, where every celebration becomes a memorable affair.' },
        { label: 'Restaurant', content: 'Welcome to the culinary haven at Emerald Vista Luxury Suites, where our in-house restaurant is more than just a dining experience—it\'s a celebration of flavor, freshness, and unparalleled hospitality. Step into a world where home-style cooking takes center stage, and each dish is crafted with care to cater to the unique tastes of our esteemed guests. Our in-house restaurant is a testament to our commitment to providing not just a meal but a gastronomic journey tailored to your preferences. Whether you\'re craving comfort food or exploring new culinary delights, our chefs are dedicated to preparing each dish fresh and to order, ensuring a delightful dining experience that marries taste with proper hygiene standards. At Emerald Vista, we take pride in our ability to seamlessly blend delectable flavors with a commitment to cleanliness. Our kitchen is a realm where culinary expertise meets the highest standards of hygiene, ensuring that every bite is not only delicious but also prepared with utmost care. In addition to offering an exquisite dining experience within the comfort of our luxury suites, our in-house restaurant extends its culinary prowess to cater events, both in-house and outside, for up to 100 people. Let us elevate your celebrations with our catering services, where the same dedication to taste, freshness, and hygiene extends beyond our restaurant walls. Indulge in a culinary experience like no other at Emerald Vista Luxury Suites, where our in-house restaurant invites you to savor the essence of home-style cooking in an ambiance of refined luxury.' },
    ]
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Nav />
            <ContactBtn />
            <div className="">

            </div>
            <div className="mt-40 w-full max-w-5xl h-max">
                <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/kUgafETXzYc?si=-qQmbxwD0FJh2czk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <Heading class="">Our Services</Heading>
            <Subheading>
                Welcome to Emerald Vista Luxury Suites, where indulgence meets comfort
                in our Service Apartments.
            </Subheading>

            <div>
                {/* Tab buttons */}
                <div className="tabContainer w-full flex justify-center text-center" id='servicesDiv'>

                    {tabs.map((tab) => (
                        <Tab
                            key={tab.label}
                            label={tab.label}
                            isActive={selectedTab === tab.label}
                            onClick={() => setSelectedTab(tab.label)}
                        />
                    ))}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                    {tabs.map((tab) => (
                        selectedTab === tab.label && (
                            <motion.div
                                key={tab.label}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={tabVariants}
                            >
                                <div className="container py-4 px-1 lg:px-4 flex flex-wrap">
                                    <div
                                        onClick={() => openImageModal(`/our-services/${tab.label}/1.jpg`)}
                                        className="mainImageDiv  w-1/2 relative place-self-center col-span-1 cursor-pointer"
                                    >
                                        <div className="absolute  text-xl top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 ">{tab.label}</div>
                                        <Image
                                            src={`/our-services/${tab.label}/1.jpg`}
                                            width={1000}
                                            height={1000}
                                            alt="Hero"
                                            className='opacity-50 rounded'
                                        />
                                    </div>
                                    <div className="imgGridContainer pl-5 w-1/2 lg:py-10 grid  grid-rows-2 grid-cols-2 gap-4">
                                        {Array(4).fill(0).map((_, index) => (
                                            <div key={index} className='imgContainer relative cursor-pointer'
                                                onClick={() => openImageModal(`/our-services/${tab.label}/${index + 2}.jpg`)}>
                                                <Image
                                                    src={`/our-services/${tab.label}/${index + 2}.jpg`}
                                                    className=' object-cover rounded'
                                                    fill
                                                    sizes="50vw"
                                                    alt={`img${index + 2}`}
                                                /></div>
                                        ))}
                                    </div>
                                </div>
                                <Para>
                                    {tab.content}
                                </Para>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>
            {isImageModalOpen && (
                <ImageModal imageUrl={currentImage} onClose={closeImageModal} />
            )}
            <Footer />
        </main>
    )
}

export default Page


interface TabProps {
    
    label: string
    isActive: boolean
    onClick: () => void // Assuming no arguments are passed to the click handler
}
const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            className={`tab-button p-2 m-2 color text-black rounded-2xl bg-white ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

const ImageModal: React.FC<{ imageUrl: string, onClose: () => void }> = ({ imageUrl, onClose }) => {
    return (
        <div className="fixed inset-0 p-2 bg-black bg-opacity-75 grid place-items-center">
            <div className="relative w-full h-full max-w-5xl max-h-[50vw]">
                <button
                    className="absolute z-20 top-4 right-4 bg-black rounded-full border-zinc-500 border text-white text-2xl p-2 bg-opacity-50"
                    onClick={onClose}
                >
                    <HiOutlineX />
                </button>
                <Image
                    src={imageUrl}
                    fill
                    alt="Modal Image"
                    className="rounded z-10 object-cover"
                />
            </div>
        </div>
    )
}