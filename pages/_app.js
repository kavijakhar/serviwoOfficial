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
    <QueryClientProvider client={queryClient}>
      <MainStates>
        <LoadingBar color='#A81AFF' waitingTime={400} progress={progress} onLoaderFinished={() => { setProgress(0) }} />
        <Navbar />
        <ToastContainer/>
        <Component {...pageProps} />

      </MainStates >
    </QueryClientProvider>
  </>
}
