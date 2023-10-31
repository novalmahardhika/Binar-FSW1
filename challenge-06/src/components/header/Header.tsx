'use client'

import Link from 'next/link'
import React from 'react'

import NavItems from './NavItems'
import Sidebar from './Sidebar'

export default function Header() {
  return (
    <header className='h-9  mt-6 fixed bg-slate-200 w-full max-w-[1440px] mx-auto right-0 left-0'>
      <nav className=' h-full flex justify-between items-center px-4'>
        <Link href='/' className='text-xl font-medium'>
          BCR
        </Link>
        <NavItems />
        <Sidebar />
      </nav>
    </header>
  )
}
