'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { useCarContext } from '@/context/CarProvider'
import ContentCars from './ContentCars'
import IconCard from './IconCard'

export default function ListCars() {
  const { filterCars } = useCarContext()

  return (
    <div className='px-4 pt-20 md:px-[128px] mx-auto w-full  grid md:grid-cols-3 md:gap-4 '>
      {filterCars?.map((car: any) => (
        <div
          key={car.id}
          className='border bg-white p-6 text-sm flex flex-col space-y-4 justify-between form-shadow rounded-md'
        >
          {/* content */}
          <div>
            <Image
              src={`/${car.image}`}
              width={300}
              height={222}
              alt={`${car.image}`}
              className='object-cover w-full h-[222px] flex mb-4 '
            />
            <ContentCars car={car} />
          </div>
          {/* icon */}
          <IconCard car={car} />

          {/* Button */}
          <Button className='bg-green-500 hover:bg-green-600'>
            Pilih Mobil
          </Button>
        </div>
      ))}
    </div>
  )
}
