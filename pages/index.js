import About from '../components/basicpage/About'
import Blogs from '../components/basicpage/Blogs'
import Header from '../components/Header'
import Projects from '../components/basicpage/Projects'
import Services from '../components/basicpage/Services'
import FAQ from './FAQ'
import Test from './Pricing'

export default function Home() {
  return (
    <>

      <Header />
    
      <About />
<Services/>
      <Blogs />
      <Test/>
      <FAQ/>
    </>
  )
}
