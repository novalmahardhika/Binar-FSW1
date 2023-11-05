'use client'

import { FormEvent, useState } from 'react'
import TypeDriverInput from './TypeDriverInput'
import PickDate from './Date'
import TimeInput from './TimeInput'
import Capacity from './Capacity'
import { Button } from '../ui/button'
import { useCarContext } from '@/context/CarProvider'

export default function FormFilter() {
  const { isValue, cars, setFilterCars, setIsValue } = useCarContext()
  const [isModal, setIsModal] = useState<boolean>(false)

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      isValue.typeDriver === 'Pilih Tipe Driver' ||
      isValue.time === 'Pilih Waktu' ||
      isValue.date === undefined
    ) {
      setIsValue((prev) => ({ ...prev, isValid: true }))
      return
    }

    const mergeDate = new Date(
      `${isValue.date?.toISOString().slice(0, 10)} ${isValue.time}`
    )
    const pickDate = mergeDate.getTime()
    const capacity = +isValue.capacity

    const filter = cars?.filter(
      (car: any) =>
        car.available &&
        new Date(car.availableAt).getTime() >= pickDate &&
        car.capacity >= capacity
    )

    if (filter.length === 0) {
      // setIsEmpty(true)
      setIsValue({
        typeDriver: 'Pilih Tipe Driver',
        date: undefined,
        time: 'Pilih Waktu',
        capacity: '',
        isOpen: false,
        isEmpty: true,
      })
      setIsModal(false)
      return
    }

    // console.log(isValue.isEmpty)

    setFilterCars(filter)

    setIsValue({
      typeDriver: 'Pilih Tipe Driver',
      date: undefined,
      time: 'Pilih Waktu',
      capacity: '',
      isOpen: false,
      // isEmpty: false,
    })
    // setIsEmpty(false)

    setIsModal(false)
  }

  return (
    <>
      <form
        className={`${
          isModal ? 'z-30' : 'z-0'
        }  max-w-[1000px] xl:max-w-[1047px] mx-4 grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 p-6 form-shadow absolute left-0 right-0 lg:mx-auto -mt-11 md:-mt-2 lg:-mt-11 bg-white rounded-md gap-4  text-xs`}
        onSubmit={submitHandler}
        onClick={() => setIsModal(true)}
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
          <Button className='w-full bg-green-500 hover:bg-green-600'>
            Cari Mobil
          </Button>
        </div>
      </form>

      <div
        className={`${
          isModal ? 'block' : 'hidden'
        }  bg-black/70 h-screen fixed inset-0 z-20`}
      ></div>
    </>
  )
}
