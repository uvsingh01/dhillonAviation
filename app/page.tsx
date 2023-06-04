import Aboutsection from '@/components/Homepage/Aboutsection'
import Choosesection from '@/components/Homepage/Choosesection'
import Header from '@/components/Homepage/Header'
import Hero from '@/components/Homepage/Hero'
import Servicesection from '@/components/Homepage/Servicesection'

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Aboutsection/>
    <Servicesection/>
    <Choosesection/>
    </>
  )
}
