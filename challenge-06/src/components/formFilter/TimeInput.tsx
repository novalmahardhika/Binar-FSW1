import React, { MouseEvent, useState } from 'react'
import InputButton from '../ui/InputButton'
import Image from 'next/image'
import { useCarContext } from '@/context/CarProvider'

const times: string[] = ['08:00', '09:00', '10:00', '11:00', '12:00']

export default function TimeInput() {
  const { isValue, setIsValue } = useCarContext()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onClickHandler = (e: MouseEvent<HTMLElement>) => {
    const input = (e.target as HTMLInputElement).value

    setIsValue((prev) => ({ ...prev, time: input }))
  }

  return (
    <>
      <label>Waktu Jemput/Ambil</label>
      <div
        className='flex border rounded-[1px] cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <InputButton id='time' value={isValue.time} />
        <Image
          src='/ic_clock.svg'
          width={18}
          height={18}
          className='mr-[9px]'
          alt='ic-time'
        />

        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col absolute duration-300 top-16  border w-full`}
        >
          {times.map((time) => (
            <InputButton
              key={`time-${time}`}
              id='time'
              variantType='item'
              value={time}
              onClick={onClickHandler}
            />
          ))}
        </div>
      </div>
    </>
  )
}
