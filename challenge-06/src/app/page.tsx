import Hero from '@/components/hero/Hero'
import { Service } from '@/components/service/Service'
import { Testimonial } from '@/components/testimonial/Testimonial'

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Testimonial />
    </main>
  )
}
