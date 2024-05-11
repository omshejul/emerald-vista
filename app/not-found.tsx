import React from 'react'
import Heading from './Components/Text/Heading'
import Nav from './Components/Nav'
import Footer from './Components/Sections/Footer'

const page = () => {
  return (<>
      <Nav />
    <div className='grid place-items-center w-screen h-screen '>
      <Heading>404 | Page Coming Soon</Heading>
    </div>
      <Footer />
  </>
  )
}

export default page
