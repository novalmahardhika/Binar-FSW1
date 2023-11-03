import React from 'react'

type HamburgerType = {
  onClick: () => void
  isOpen: boolean
}

export default function Hamburger({ isOpen, onClick }: HamburgerType) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col space-y-1.5 duration-50 md:hidden z-50 fixed mt-8 top-0 right-0 mr-4 ${
        isOpen ? 'rotate-180' : ''
      }`}
    >
      <div
        className={`h-1  w-8 bg-black duration-300 ${
          isOpen ? 'rotate-45 translate-y-2.5' : ''
        }`}
      ></div>
      <div
        className={`h-1  w-8 bg-black duration-300 ease-out ${
          isOpen && 'opacity-0 '
        }`}
      ></div>
      <div
        className={`h-1 w-8 bg-black duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2.5' : ''
        }`}
      ></div>
    </div>
  )
}
