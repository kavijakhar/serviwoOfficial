import Head from 'next/head'
import About from '../components/basicpage/About'
import Blogs from '../components/basicpage/Blogs'
import Team from '../components/basicpage/Team'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Serviwo</title>
        <meta name="description" content="Created by Serviwo team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />

      </Head>
      <Header />
      <About />
      <Blogs />
      <Team />

    </>
  )
}
