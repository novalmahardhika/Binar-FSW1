import FormFilter from '@/components/formFilter/FormFilter'
import Hero from '@/components/hero/Hero'
import ListCars from '@/components/listCars/ListCars'

export default async function Car() {
  return (
    <main className='max-w-[1440px] mx-auto relative '>
      <Hero />
      <FormFilter />
      <ListCars />
    </main>
  )
}
