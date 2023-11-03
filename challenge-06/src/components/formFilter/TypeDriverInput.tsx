import React, { useState } from 'react'
import InputButton from '../ui/InputButton'
import Image from 'next/image'

export default function TypeDriverInput() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isValue, setIsValue] = useState<string>('Pilih Tipe Driver')

  return (
    <>
      {/* label */}
      <label htmlFor='typeDriver'>Tipe Driver</label>

      {/* header input */}
      <div
        className='flex border rounded-[1px] cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <InputButton id='typeDriver' value={isValue} />
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
        <InputButton
          id='typeDriver'
          value='Dengan Sopir'
          variantType='item'
          onClick={() => {
            setIsValue('Dengan Sopir'), setIsOpen(false)
          }}
        />

        <InputButton
          id='typeDriver'
          value='Tanpa Sopir (Lepas Kunci)'
          variantType='item'
          onClick={() => {
            setIsValue('Tanpa Sopir (Lepas Kunci)'), setIsOpen(false)
          }}
        />
      </div>
    </>
  )
}
