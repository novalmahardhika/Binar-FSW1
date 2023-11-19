'use client'

import React, { useState } from 'react'
import NavItems from './NavItems'
import Link from 'next/link'
import { Button } from '../ui/button'
import Hamburger from '../ui/Hamburger'

const itemNav: { href: string; text: string }[] = [
  {
    href: '/',
    text: 'Our Services',
  },
  {
    href: '/',
    text: 'Why Us',
  },
  {
    href: '/',
    text: 'Testimonial',
  },
  {
    href: '/',
    text: 'FAQ',
  },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  if (typeof window !== 'undefined') {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }

  return (
    <>
      {/* sidebar */}
      <aside
        className={`h-screen fixed top-0 right-0 duration-100 bg-white md:hidden z-50 ${
          isOpen ? 'w-64 sm:w-72 ' : 'w-0'
        }`}
      >
        <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

        <div className='mt-8 h-full ml-4'>
          <Link href='/' className='font-bold'>
            BCR
          </Link>

          <div className='flex flex-col mb-4'>
            {itemNav.map((item, index) => (
              <Link
                style={{ transitionDelay: isOpen ? index * 150 + 'ms' : '0ms' }}
                key={index}
                href={item.href}
                className={`${
                  isOpen ? 'opacity-100 duration-1000' : 'opacity-0'
                } mt-4 `}
              >
                {item.text}
              </Link>
            ))}
            <Button className='bg-green-500 hover:bg-green-600 w-20 mt-4 h-8'>
              Register
            </Button>
          </div>
        </div>
      </aside>

      {/* modal */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        }  absolute bg-black/70 inset-0 -z-10  h-screen md:hidden`}
      ></div>
    </>
  )
}