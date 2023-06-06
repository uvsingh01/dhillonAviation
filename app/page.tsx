import Aboutsection from '@/components/Homepage/Aboutsection'
import Choosesection from '@/components/Homepage/Choosesection'
import Clientsection from '@/components/Homepage/Clientsection'
import Footersection from '@/components/Homepage/Footersection'
import Formsection from '@/components/Homepage/Formsection'
import Header from '@/components/Homepage/Header'
import Hero from '@/components/Homepage/Hero'
import Infofooter from '@/components/Homepage/Infofooter'
import Newsection from '@/components/Homepage/Newsection'
import Servicesection from '@/components/Homepage/Servicesection'


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Aboutsection/>
    <Servicesection/>
    <Choosesection/>
    <Clientsection/>
    <Newsection/>
    <Formsection/>
    <Footersection/>
    <Infofooter/>
    </>
  )
}
