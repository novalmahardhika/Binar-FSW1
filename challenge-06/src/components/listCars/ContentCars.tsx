import React from 'react'

type PropsType = {
  manufacture: string
  type: string
  rentPerDay: number
  description: string
}

export default function ContentCars({ car }: { car: PropsType }) {
  return (
    <div className='flex flex-col space-y-2'>
      <p className='font-semibold'>
        {car.manufacture}/<span>{car.type}</span>
      </p>
      <h6 className='text-base font-bold'>Rp.{car.rentPerDay}</h6>
      <p>{car.description}</p>
    </div>
  )
}
