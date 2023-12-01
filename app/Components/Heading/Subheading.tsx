import React from 'react'

interface SubheadingProps{
    children: string
}
const Subheading: React.FC<SubheadingProps> = (props) => {
  return (

      <p className=' text-lg font-light max-w-2xl text-center leading-8 m-2'>{props.children}</p>

  )
}

export default Subheading
