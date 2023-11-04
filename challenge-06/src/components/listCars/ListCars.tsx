'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { useCarContext } from '@/context/CarProvider'

export default function ListCars() {
  const { filterCars } = useCarContext()

  return (
    <div className='px-4 pt-20 md:px-[128px] mx-auto w-full bg-green-200 grid md:grid-cols-3 md:gap-4 '>
      {filterCars?.map((car: any) => (
        <div
          key={car.id}
          className='border bg-white p-6 text-sm flex flex-col space-y-4 justify-between'
        >
          {/* content */}
          <div>
            <Image
              src={`/${car.image}`}
              width={300}
              height={222}
              alt={`${car.image}`}
              className='object-cover w-full h-[222px] flex '
            />

            <div className='flex flex-col space-y-2'>
              <p>
                {car.manufacture}/<span>{car.type}</span>
              </p>
              <h6 className='text-base font-bold'>Rp.{car.rentPerDay}</h6>
              <p>{car.description}</p>
            </div>
          </div>

          {/* icon */}
          <div className='flex flex-col space-y-4'>
            <div className='flex space-x-2'>
              <Image src='/fi_users.svg' width={20} height={20} alt='ic-user' />
              <p>{car.capacity} Orang</p>
            </div>
            <div className='flex space-x-2'>
              <Image
                src='/fi_settings.svg'
                width={20}
                height={20}
                alt='ic-setting'
              />
              <p>{car.transmission}</p>
            </div>

            <div className='flex space-x-2'>
              <Image
                src='/fi_calendar.svg'
                width={20}
                height={20}
                alt='ic-user'
              />
              <p>Tahun {car.year}</p>
            </div>
          </div>

          <Button>Pilih Mobil</Button>
        </div>
      ))}
    </div>
  )
}
