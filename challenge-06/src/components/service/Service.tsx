import Image from 'next/image'
import React from 'react'

const list: { text: string }[] = [
  {
    text: 'Sewa Mobil Dengan Supir di Bali 12 Jam',
  },
  {
    text: 'Sewa Mobil Lepas Kunci di Bali 24 Jam',
  },
  {
    text: 'Sewa Mobil Jangka Panjang Bulanan',
  },
  {
    text: 'Gratis Antar - Jemput Mobil di Bandara',
  },
  {
    text: 'Layanan Airport Transfer / Drop In Out',
  },
]

export const Service = () => {
  return (
    <section className=' grid md:grid-cols-2 grid-cols-1 px-4 lg:px-32 mt-[60px] lg:mt-[100px]'>
      <div className='flex justify-center items-end'>
        <Image
          src='/assets/img_service.png'
          width={450}
          height={420}
          alt='img-service'
        />
      </div>

      <div className='ml-6 md:max-w-[468px]  flex flex-col justify-center items-center'>
        <h2 className='title lg:mb-6 text-center md:text-start mt-6 md:mt-0'>
          Best Car Rental for any kind of trip in Tangerang!
        </h2>

        <div className='text-sm mt-4'>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>

          <ul className='flex space-y-4 flex-col mt-4 mx-auto'>
            {list.map((data, index) => (
              <li key={index} className='flex space-x-4 items-center'>
                <Image
                  src='/checklist.svg'
                  width={24}
                  height={24}
                  alt='icon-checklist'
                />

                <p>{data.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
