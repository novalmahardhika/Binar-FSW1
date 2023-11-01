import React from 'react'
import AccordionFaq from './AccordionFaq'

export default function Faq() {
  return (
    <section
      className='mt-[60px] md:mt-[100px] grid lg:grid-cols-2 md:mx-[136px] mx-4 '
      id='faq'
    >
      <div className='lg:text-start text-center'>
        <h2 className='title'>Frequently Asked Question</h2>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <AccordionFaq />
    </section>
  )
}
