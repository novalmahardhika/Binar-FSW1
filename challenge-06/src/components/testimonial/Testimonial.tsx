'use client'

import React from 'react'

import { Carousel } from './Carousel'

export const Testimonial = () => {
  return (
    <section className='lg:px-32 mt-[60px] md:mt-[100px] p-4'>
      <h2 className='title text-center'>Testimonial</h2>
      <p className='text-center text-sm'>
        Berbagai review positif dari para pelanggan kami
      </p>
      <Carousel />
    </section>
  )
}
