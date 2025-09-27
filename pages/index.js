import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [stats, setStats] = useState({ farmers: 0, buyers: 0, products: 0, experts: 0 })

  useEffect(() => {
    const animateStats = () => {
      setStats({ farmers: 1250, buyers: 890, products: 5670, experts: 340 })
    }
    setTimeout(animateStats, 500)
  }, [])

  return (
    <>
      <Head>
        <title>Mizili - Agricultural Marketplace</title>
        <meta name="description" content="Connecting farmers, buyers, and agricultural experts" />
      </Head>

      {/* Main container with background gradient */}
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100">
        
        {/* Navigation */}
        <nav className="bg-white bg-opacity-90 backdrop-blur-md shadow-sm border-b border-green-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-white">🌱</span>
                </div>
                <span className="text-2xl font-bold text-green-600">Mizili</span>
              </Link>

              {/* Navigation Links */}
              <div className="flex space-x-6">
                <Link href="/marketplace" className="text-gray-700 hover:text-green-600 font-medium">Marketplace</Link>
                <Link href="/auth/login" className="text-green-600 hover:text-green-700 font-medium">Login</Link>
                <Link href="/auth/register" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transforming African Agriculture
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Mizili connects farmers, buyers, and agricultural experts across East Africa. 
              Experience seamless trading and sustainable growth for your agricultural business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/auth/register?role=farmer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                🚜 Join as Farmer
              </Link>
              <Link href="/auth/register?role=buyer" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                🏪 Join as Buyer
              </Link>
              <Link href="/auth/register?role=extension" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                🔬 Join as Expert
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { value: stats.farmers, label: 'Farmers', color: 'bg-green-100 text-green-600' },
                { value: stats.buyers, label: 'Buyers', color: 'bg-blue-100 text-blue-600' },
                { value: stats.experts, label: 'Experts', color: 'bg-purple-100 text-purple-600' },
                { value: stats.products, label: 'Products', color: 'bg-orange-100 text-orange-600' }
              ].map((stat, index) => (
                <div key={index} className={`p-4 rounded-lg ${stat.color} shadow-sm`}>
                  <div className="text-2xl font-bold">{stat.value}+</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
