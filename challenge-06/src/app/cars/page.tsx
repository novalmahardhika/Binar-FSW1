import FormFilter from '@/components/formFilter/FormFilter'
import Hero from '@/components/hero/Hero'
import ListCars from '@/components/listCars/ListCars'
import { useCarContext } from '@/context/CarProvider'

// export async function dataCars() {
//   try {
//     const res = await fetch(
//       'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
//     )

//     return res.json()
//   } catch (error) {
//     throw new Error('Failed to fetch data')
//   }
// }

export default async function Car() {
  return (
    <main className='max-w-[1440px] mx-auto relative '>
      <Hero />
      <FormFilter />
      <ListCars />
    </main>
  )
}
