import { Calendar } from '@/components/ui/calendar'
import InputButton from '../ui/InputButton'
import Image from 'next/image'
import { useCarContext } from '@/context/CarProvider'

export default function PickDate() {
  const { isValue, setIsValue } = useCarContext()
  const value = isValue.date?.toDateString()

  return (
    <>
      <label htmlFor='date'>Date</label>
      <div
        className='flex border rounded-[1px] cursor-pointer'
        onClick={() =>
          setIsValue((prev) => ({ ...prev, isOpen: !isValue.isOpen }))
        }
      >
        <InputButton id='date' value={value || 'Pilih Tanggal'} />
        <Image
          src='/ic_calendar.svg'
          width={18}
          height={18}
          alt='ic-calendar'
          className='mr-[9px] '
        />
      </div>

      <Calendar
        mode='single'
        selected={isValue.date}
        onSelect={(e) => setIsValue((prev) => ({ ...prev, date: e }))}
        className={`${
          isValue.isOpen ? '' : 'hidden'
        }  absolute rounded-md border shadow bg-white top-16  -right-[18px] md:-right-9 z-10 `}
      />
    </>
  )
}
