import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mizili - Transforming Agriculture</title>
        <meta name="description" content="Connecting Farmers, Buyers, and Agricultural Experts" />
      </Head>

      <Layout>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  )
}
