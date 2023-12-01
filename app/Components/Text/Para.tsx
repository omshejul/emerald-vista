import React from 'react'

interface SubheadingProps{
    children: any
}
const Subheading: React.FC<SubheadingProps> = (props) => {
  return (

      <p className=' p-4 max-w-5xl text-center'>{props.children}</p>

  )
}

export default Subheading
