import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return(
    <div>
      <Head>
        <title> Chullu APP</title>
      </Head>

      
    
    <h1> Let's build Hulu</h1>

    {/* Header component  */}
    <Header />
    <Navbar />
     {/* Y al ultimo va hacer results Obviamente con el footer
      */}
    </div>
  )
}
