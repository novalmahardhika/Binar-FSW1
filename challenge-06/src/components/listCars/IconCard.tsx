import Image from 'next/image'
import React from 'react'

type PropsType = {
  capacity: number | string
  transmission: string
  year: number
}

export default function IconCard({ car }: { car: PropsType }) {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex space-x-2'>
        <Image src='/fi_users.svg' width={20} height={20} alt='ic-user' />
        <p>{car.capacity} Orang</p>
      </div>
      <div className='flex space-x-2'>
        <Image src='/fi_settings.svg' width={20} height={20} alt='ic-setting' />
        <p>{car.transmission}</p>
      </div>

      <div className='flex space-x-2'>
        <Image src='/fi_calendar.svg' width={20} height={20} alt='ic-user' />
        <p>Tahun {car.year}</p>
      </div>
    </div>
  )
}
