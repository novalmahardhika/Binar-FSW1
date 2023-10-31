import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <section className='bg-indigo-50 grid md:grid-cols-2 grid-cols-1 '>
      <div className='max-w-xl flex flex-col space-y-4 justify-center mx-4 lg:ml-32 mt-[90px]  lg:mt-24 md:mb-4'>
        <h1 className='text-2xl xl:text-4xl font-bold'>
          Sewa & Rental Mobil Terbaik di kawasan Tangerang
        </h1>
        <p className='text-sm max-w-[468px]'>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <Button className='max-w-[140px] bg-green-500'>Mulai Sewa Mobil</Button>
      </div>

      <div className='flex items-end justify-end mt-6 md:mt-24 ml-4'>
        <Image
          src='/assets/hero_img.png'
          width={704}
          height={407}
          alt='hero-img'
        />
      </div>
    </section>
  )
}
