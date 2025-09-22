import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching products
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Organic Maize', price: 25, unit: 'kg', farmer: 'John Doe' },
        { id: 2, name: 'Fresh Tomatoes', price: 15, unit: 'kg', farmer: 'Jane Smith' },
        { id: 3, name: 'Avocados', price: 30, unit: 'kg', farmer: 'Robert Johnson' },
        { id: 4, name: 'Coffee Beans', price: 45, unit: 'kg', farmer: 'Maria Garcia' }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      <Head>
        <title>Mizili E-commerce</title>
        <meta name="description" content="Connect farmers, buyers, and agricultural services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Welcome to Mizili
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connecting farmers, buyers, and agricultural services in one platform
          </p>
          <div className="space-x-4">
            <Link href="/register" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Get Started
            </Link>
            <Link href="/login" className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50">
              Sign In
            </Link>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          {loading ? (
            <div className="text-center">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-green-700 font-bold">${product.price} / {product.unit}</p>
                  <p className="text-sm text-gray-500">By: {product.farmer}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
