'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import NavItems from './NavItems'
import Hamburger from '../ui/Hamburger'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className='h-9  mt-6 bg-red-400'>
      <nav className=' h-full flex justify-between items-center'>
        <Link href='/' className='text-xl font-medium'>
          BCR
        </Link>

        <NavItems />
        <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </nav>
    </header>
  )
}
