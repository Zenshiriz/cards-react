import React from 'react'

function Card({cardData}) {

  return (
    <div className=' max-w-96 py-4 rounded-xl bg-teal-100 shadow-lg'>
      <img src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" className=' max-w-80 mx-auto my-2 rounded-xl' alt="" />
      <div>
        <h3 className=' text-gray-900 font-medium truncate p-3'>{cardData.title}</h3>
        <p className='text-gray-900 font-normal  p-3'>{cardData.body}</p>
      </div>
    </div>
  )
}

export default Card
