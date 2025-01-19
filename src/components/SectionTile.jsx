import React from 'react'

const SectionTile = ({text}) => {
  return (
    <div className='border-b border-gray-200 pb-5'>
      <h2 className='text-3xl font-medium tracking-wider'>{text}</h2>
    </div>
  )
}

export default SectionTile