import About from '../components/basicpage/About'
import Blogs from '../components/basicpage/Blogs'
import Header from '../components/Header'
import Services from '../components/basicpage/Services'
import Faq from '../components/sections/FAQ'


export default function Home() {
  return (
    <>

      <Header />
    
      <About />
<Services/>
      <Blogs />
      <Faq/>
    </>
  )
}
