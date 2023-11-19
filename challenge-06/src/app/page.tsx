import Banner from '@/components/banner/Banner'
import Faq from '@/components/faq/Faq'
import Hero from '@/components/hero/Hero'
import Service from '@/components/service/Service'
import Testimonial from '@/components/testimonial/Testimonial'
import WhyUs from '@/components/whyUs/whyUs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
    </main>
  )
}