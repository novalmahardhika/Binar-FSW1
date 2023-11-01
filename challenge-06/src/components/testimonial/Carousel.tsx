import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'

export const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        enabled: true,
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      }}
      modules={[Pagination, Navigation]}
      className='max-w-[832px] mt-10 relative'
    >
      <SwiperSlide>
        <div className='bg-indigo-50 md:space-x-10  mx-auto py-[40px] md:py-[69px] flex flex-col md:flex-row justify-center items-center '>
          <Image
            src='/assets/img_photo.png'
            width={70}
            height={80}
            className='h-20'
            alt='img-photo'
          />

          <div className='max-w-[415px] flex flex-col space-y-2 mt-6 md:mt-0 items-center md:items-start px-8 md:px-0'>
            <Image src='/Rate.svg' width={80} height={16} alt='icon-rate' />
            <p className='text-sm '>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>

            <b className='text-sm text-left w-full'>John Dee 32, Bromo</b>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='bg-indigo-50 md:space-x-10  mx-auto py-[40px] md:py-[69px] flex flex-col md:flex-row justify-center items-center '>
          <Image
            src='/assets/img_photo.png'
            width={70}
            height={80}
            className='h-20'
            alt='img-photo'
          />

          <div className='max-w-[415px] flex flex-col space-y-2 mt-6 md:mt-0 items-center md:items-start px-8 md:px-0'>
            <Image src='/Rate.svg' width={80} height={16} alt='icon-rate' />
            <p className='text-sm '>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor nsectetur adipiscing elit, sed do
              eiusmod”
            </p>

            <b className='text-sm text-left w-full'>John Dee 32, Bromo</b>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='bg-indigo-50 md:space-x-10  mx-auto py-[40px] md:py-[69px] flex flex-col md:flex-row justify-center items-center '>
          <Image
            src='/assets/img_photo.png'
            width={70}
            height={80}
            className='h-20'
            alt='img-photo'
          />

          <div className='max-w-[415px] flex flex-col space-y-2 mt-6 md:mt-0 items-center md:items-start px-8 md:px-0'>
            <Image src='/Rate.svg' width={80} height={16} alt='icon-rate' />
            <p className='text-sm '>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor nsectetur adipiscing elit, sed do
              eiusmod”
            </p>

            <b className='text-sm text-left w-full'>John Dee 32, Bromo</b>
          </div>
        </div>
      </SwiperSlide>

      <div className='absolute inset-0 top-14 md:top-0  z-50 w-full h-12 md:h-full  flex justify-between opacity-0 hover:opacity-100 duration-300'>
        <Image
          src='/arr-left.svg'
          width={56}
          height={68}
          alt='arrow-left'
          className='btn-prev'
        />
        <Image
          src='/arr-right.svg'
          width={56}
          height={68}
          alt='arrow-right'
          className='btn-next'
        />
      </div>
    </Swiper>
  )
}
