'use client'

import Link from 'next/link'
import React from 'react'

import NavItems from './NavItems'
import Sidebar from './Sidebar'

export default function Header() {
  return (
    <header className='z-50 pt-4 bg-indigo-50/80 backdrop-blur-sm fixed top-0 w-full max-w-[1440px] mx-auto right-0 left-0 '>
      <nav className=' h-full flex justify-between items-center p-4 lg:px-32'>
        <Link href='/' className='text-xl font-medium'>
          BCR
        </Link>
        <NavItems />
        <Sidebar />
      </nav>
    </header>
  )
}
