import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const itemNav: { href: string; text: string }[] = [
  {
    href: '#service',
    text: 'Our Services',
  },
  {
    href: '#why-us',
    text: 'Why Us',
  },
  {
    href: '#testimonial',
    text: 'Testimonial',
  },
  {
    href: '#faq',
    text: 'FAQ',
  },
]

export default function NavItems() {
  return (
    <div className='space-x-8 items-center text-sm md:flex hidden'>
      {itemNav.map((item, index) => (
        <Link key={index} href={item.href}>
          {item.text}
        </Link>
      ))}

      <Button className='bg-green-500 hover:bg-green-600 w-20 h-8'>
        Register
      </Button>
    </div>
  )
}
