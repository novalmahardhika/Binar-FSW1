import { Calendar } from '@/components/ui/calendar'
import { useEffect, useRef, useState } from 'react'
import InputButton from '../ui/InputButton'
import Image from 'next/image'

export default function PickDate() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const value = date?.toDateString()

  return (
    <>
      <label htmlFor='date'>Date</label>
      <div
        className='flex border rounded-[1px] cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <InputButton id='date' value={value || 'Pilih Tanggal'} />
        <Image
          src='/ic_calendar.svg'
          width={18}
          height={18}
          alt='ic-calendar'
          className='mr-[9px] '
        />
      </div>

      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className={`${
          isOpen ? '' : 'hidden'
        }  absolute rounded-md border shadow bg-white top-16  -right-[18px] md:-right-9 z-10 `}
      />
    </>
  )
}
