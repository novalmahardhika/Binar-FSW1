import React from 'react'
import { Button } from '../ui/button'

export default function Banner() {
  return (
    <section className='bg-blue-800 mt-[60px]  md:mx-[136px] mx-4 text-center md:mt-[100px] text-white md:px-0 px-[58px] py-16 flex items-center flex-col rounded-[13px]'>
      <h1 className='font-bold text-2xl md:text-4xl mb-4'>
        Sewa Mobil di Tangerang Sekarang
      </h1>
      <p className='text-sm mb-10 max-w-[480px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
      </p>

      <Button className='bg-green-600'>Mulai Sewa Mobil</Button>
    </section>
  )
}
