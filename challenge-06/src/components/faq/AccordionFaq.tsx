import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const items: { title: string; content: string }[] = [
  {
    title: 'Apa saja syarat yang dibutuhkan?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Berapa hari minimal sewa mobil lepas kunci?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Apakah Ada biaya antar-jemput?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Bagaimana jika terjadi kecelakaan',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]

export default function AccordionFaq() {
  return (
    <div>
      {items.map((item, index) => (
        <Accordion type='single' collapsible className='w-full ' key={index}>
          <AccordionItem
            value={`item-${index + 1}`}
            className='text-sm border mb-4 px-6  my-[18px] '
          >
            <AccordionTrigger className='font-normal text-left'>
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}
