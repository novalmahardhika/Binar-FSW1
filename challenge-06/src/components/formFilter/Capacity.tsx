import React from 'react'

export default function Capacity() {
  return (
    <>
      <label htmlFor='capacity'>Jumlah Penumpang (optional)</label>
      <div className='border'>
        <input
          id='capacity'
          type='number'
          min='0'
          max='6'
          placeholder='Jumlah Penumpang'
          className='px-3 rounded-[1px] placeholder-black py-[9px] w-full bg-white focus:ring-0 focus:ring-offset-0 outline-none'
        />
      </div>
    </>
  )
}
