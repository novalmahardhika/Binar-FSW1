'use client'

import { FormEvent } from 'react'
import TypeDriverInput from './TypeDriverInput'
import PickDate from './Date'
import TimeInput from './TimeInput'
import Capacity from './Capacity'
import { Button } from '../ui/button'

export default function FormFilter() {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      className='max-w-[1000px] xl:max-w-[1047px] mx-4 grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 p-6 form-shadow absolute left-0 right-0 lg:mx-auto -mt-11 md:-mt-2 lg:-mt-11 bg-white rounded-md gap-4 z-0 text-xs'
      onSubmit={submitHandler}
    >
      {/* Type Driver */}
      <div className='col-span-2 flex flex-col space-y-1 relative'>
        <TypeDriverInput />
      </div>

      {/* Date */}
      <div className='col-span-2 flex flex-col space-y-1 relative'>
        <PickDate />
      </div>

      {/* Time */}
      <div className='col-span-2 space-y-1 relative flex flex-col'>
        <TimeInput />
      </div>

      {/*Capacity */}
      <div className='col-span-2 flex flex-col space-y-1'>
        <Capacity />
      </div>

      {/* button */}
      <div className='flex items-end col-span-2 sm:col-span-full  md:col-span-4 lg:col-span-1'>
        <Button className='w-full'>Cari Mobil</Button>
      </div>
    </form>
  )
}
