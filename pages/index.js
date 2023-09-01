import About from '../components/basicpage/About'
import Blogs from '../components/basicpage/Blogs'
import Header from '../components/Header'
import Services from '../components/basicpage/Services'
import Faq from '../components/sections/FAQ'
import Pricing from '../components/sections/Pricing'


export default function Home() {
  return (
    <>

      <Header />
    
      <About />
<Services/>
      <Blogs />
      <Pricing/>
      <Faq/>
    </>
  )
}
