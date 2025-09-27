import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title = "Mizili - Agricultural Marketplace" }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Mizili - Connect farmers, buyers, and agricultural experts" />
      </Head>
      
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
