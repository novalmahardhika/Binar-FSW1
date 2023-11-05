import React, { useContext, useState } from 'react'
import InputButton from '../ui/InputButton'
import Image from 'next/image'
import { CarContext, useCarContext } from '@/context/CarProvider'

const items = ['Dengan Sopir', 'Tanpa Sopir (Lepas Kunci)']

export default function TypeDriverInput() {
  const { isValue, setIsValue } = useCarContext()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const clickHandler = (e: any) => {
    setIsValue((prev) => ({ ...prev, typeDriver: e.target.value }))

    setIsOpen(false)
  }

  return (
    <>
      {/* label */}
      <label htmlFor='typeDriver'>Tipe Driver</label>

      {/* header input */}
      <div
        className='flex border rounded-[1px] cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <InputButton
          id='typeDriver'
          value={isValue.typeDriver || 'Pilih Tipe Driver'}
        />
        <Image
          src='/ic_dropArrow.svg'
          width={18}
          height={18}
          alt='dropdown-menu'
          className={`mr-[9px] duration-300 rotate-180 ${
            isOpen ? 'rotate-0' : ''
          }`}
        />
      </div>

      {/* dropdown input */}
      <div
        className={`${
          isOpen ? ' flex' : ' hidden'
        }  flex-col absolute duration-300 top-16  border w-full z-10`}
      >
        {items.map((item, index) => (
          <InputButton
            key={`typeDriver=${index}`}
            id='typeDriver'
            variantType='item'
            value={item}
            onClick={clickHandler}
          />
        ))}
      </div>
    </>
  )
}
