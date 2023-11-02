import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-[60px] md:mt-[150px] grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid gap-10 xl:grid-cols-7 xl:gap-[86px] mb-[60px] md:mb-[100px] justify-between mx-4 md:mx-[136px] '>
      <div className=' md:col-span-2 text-sm flex flex-col space-y-4'>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>

      <div className='text-sm font-semibold flex flex-col space-y-4'>
        <Link href='#service'>Our services</Link>
        <Link href='#why-us'>Why Us</Link>
        <Link href='#testimonial'>Testimonial</Link>
        <Link href='#faq'>FAQ</Link>
      </div>

      <div className='text-sm  md:col-span-2'>
        <p className='mb-4'>Connect with us</p>
        <div className='flex space-x-4'>
          <Image
            src='/icon_facebook.svg'
            width={32}
            height={32}
            alt='icon-fb'
          />

          <Image
            src='/icon_instagram.svg'
            width={32}
            height={32}
            alt='icon-ig'
          />

          <Image src='/icon_twitter.svg' width={32} height={32} alt='icon-tw' />

          <Image src='/icon_mail.svg' width={32} height={32} alt='icon-mail' />

          <Image
            src='/icon_twitch.svg'
            width={32}
            height={32}
            alt='icon-twitch'
          />
        </div>
      </div>

      <div className='text-sm lg:col-span-2'>
        <p className='mb-4'>Copyright Binar 2022</p>
        <Link href='/' className='font-bold text-xl'>
          BCR
        </Link>
      </div>
    </footer>
  )
}
