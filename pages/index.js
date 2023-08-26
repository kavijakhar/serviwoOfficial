import Head from 'next/head'
import About from '../components/basicpage/About'
import Blogs from '../components/basicpage/Blogs'
import Header from '../components/Header'
import Projects from '../components/basicpage/Projects'
import Services from '../components/basicpage/Services'
import Script from 'next/script'

export default function Home() {
  return (
    <>
<Head>
  {/* Meta Tags */}
  <title>Serviwo - Professional Web Development Services</title>
  <meta name="description" content="Transforming businesses through professional web development. Contact Serviwo for custom web solutions that drive online success." />
  <meta name="keywords" content="web development, web design, website services, web development company, Serviwo" />
  
  {/* Open Graph Tags */}
  <meta property="og:title" content="Serviwo - Professional Web Development Services" />
  <meta property="og:description" content="Transforming businesses through professional web development. Contact Serviwo for custom web solutions that drive online success." />
  <meta property="og:image" content="/logo3.png" />
  <meta property="og:url" content="https://serviwo.com" />
  
  {/* Canonical Link */}
  <link rel="canonical" href="https://serviwo.com" />
  
  {/* Viewport and Favicon */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/serviwoFavicon.png" />
  
  {/* Font Awesome Styles */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />

 

</Head>
      <Header />
    
      <About />
<Services/>
      <Projects/>
      <Blogs />
    </>
  )
}
