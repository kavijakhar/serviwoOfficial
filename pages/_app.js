import { QueryClientProvider } from 'react-query'
import Navbar from '../components/Navbar'
import MainStates from '../context/mainstates'
import '../styles/globals.css'
import { queryClient } from '../config'

export default function App({ Component, pageProps }) {
  return <>
    <QueryClientProvider client={queryClient}>
      <MainStates>
        <Navbar />
        <Component {...pageProps} />

      </MainStates>
    </QueryClientProvider>
  </>
}
