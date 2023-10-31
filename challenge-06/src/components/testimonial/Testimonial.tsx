import Image from 'next/image'
import React, { ReactNode } from 'react'

export const Testimonial = () => {
  const items: { icon: ReactNode; title: string; text: string }[] = [
    {
      icon: (
        <Image
          src='/icon_complete.svg'
          width={32}
          height={32}
          alt='ic-complete'
        />
      ),
      title: 'Mobil Lengkap',
      text: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat',
    },
    {
      icon: (
        <Image src='/icon_price.svg' width={32} height={32} alt='ic-price' />
      ),
      title: 'Harga Murah',
      text: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain',
    },
    {
      icon: (
        <Image src='/icon_24hrs.svg' width={32} height={32} alt='ic-24hr' />
      ),
      title: 'Layanan 24 Jam',
      text: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu',
    },
    {
      icon: (
        <Image
          src='/icon_professional.svg'
          width={32}
          height={32}
          alt='ic-profesional'
        />
      ),
      title: 'Sopir Profesional',
      text: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu',
    },
  ]

  return (
    <section className='lg:px-32 mt-[100px] p-4'>
      <h2 className='title'>Why Us?</h2>
      <p className='text-sm mb-6 md:mb-[40px]'>
        Mengapa harus memilih Binar Car Rental?
      </p>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8 '>
        {items.map((item, index) => (
          <div
            key={index}
            className='border p-6 rounded-sm flex flex-col space-y-4'
          >
            {item.icon}
            <h4 className='font-semibold'>{item.title}</h4>
            <p className='text-sm'>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
