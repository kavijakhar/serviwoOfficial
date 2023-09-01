import { QueryClientProvider } from 'react-query'
import Navbar from '../components/Navbar'
import MainStates from '../context/mainstates'
import '../styles/globals.css'
import { queryClient } from '../config'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    });
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    });
  }, [])


  return <>
  <Head>
  {/* Meta Tags */}
  <title>Serviwo - Professional Web Development Services</title>
  <meta name="description" content="Transforming businesses through professional web development. Contact Serviwo for custom web solutions that drive online success." />
  <meta name="keywords" content="web development, web design, website services, web development company, Serviwo" />
  
  {/* Open Graph Tags */}
  <meta property="og:title" content="Serviwo - Professional Web Development Services" />
  <meta property="og:description" content="Transforming businesses through professional web development. Contact Serviwo for custom web solutions that drive online success." />
  {/* <meta property="og:image" content="/serviwoFavicon.png" /> */}
  <meta property="og:image" content="/faceimageServiwo.png" />
  <meta property="og:url" content="https://serviwo.com" />
  
  {/* Canonical Link */}
  <link rel="canonical" href="https://serviwo.com" />
  
  {/* Viewport and Favicon */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicons.ico" sizes="250x250" type="image/png"/>
<link rel="icon" href="/favicons.ico" sizes="500x500" type="image/png"/>
  <link rel="icon" href="/favicons.ico"  sizes="688x688" type="image/png"/>

  {/* Font Awesome Styles */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />

  <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png" // Path to your Apple Touch Icon image
        />

</Head>
    <QueryClientProvider client={queryClient}>
      <MainStates>
        <LoadingBar color='#A81AFF' waitingTime={400} progress={progress} onLoaderFinished={() => { setProgress(0) }} />
        <Navbar />
        <ToastContainer/>
        <Component {...pageProps} />
        <Footer />
      </MainStates >
    </QueryClientProvider>
  </>
}
