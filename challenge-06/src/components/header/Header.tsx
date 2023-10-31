'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import NavItems from './NavItems'
import Hamburger from '../ui/Hamburger'
import Sidebar from './Sidebar'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className='h-9  mt-6 '>
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
