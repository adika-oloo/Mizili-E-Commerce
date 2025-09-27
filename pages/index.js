import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
    const [stats, setStats] = useState({ farmers: 0, buyers: 0, products: 0, experts: 0 })

    useEffect(() => {
        const animateCounters = () => {
            setStats({ farmers: 1250, buyers: 890, products: 5670, experts: 340 })
        }
        setTimeout(animateCounters, 500)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-100">
            <Head>
                <title>Mizili - Agricultural Marketplace</title>
                <meta name="description" content="Connect farmers, buyers, and agricultural experts" />
            </Head>

            {/* Enhanced Navigation */}
            <nav className="bg-white/90 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">🌱</span>
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                                    Mizili
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/marketplace" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105">
                                Marketplace
                            </Link>
                            <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105">
                                Services
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105">
                                About
                            </Link>
                            <div className="flex space-x-4">
                                <Link href="/auth/login" className="text-green-600 hover:text-green-700 font-medium px-4 py-2 transition-all duration-300">
                                    Login
                                </Link>
                                <Link href="/auth/register" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Transforming <span className="text-green-600">African Agriculture</span> Through Technology
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                                Mizili connects farmers, buyers, and agricultural experts across East Africa. 
                                Experience seamless trading, expert guidance, and sustainable growth for your agricultural business.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/auth/register?role=farmer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                                    🚜 Join as Farmer
                                </Link>
                                <Link href="/auth/register?role=buyer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                                    🏪 Join as Buyer
                                </Link>
                                <Link href="/auth/register?role=extension" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                                    🔬 Join as Expert
                                </Link>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500">
                                <div className="flex items-center space-x-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                                        ))}
                                    </div>
                                    <span>2,000+ Members</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span>Live Marketplace</span>
                                </div>
                            </div>
                        </div>

                        {/* Statistics Grid */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-100/50">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: '👨‍🌾', value: stats.farmers, label: 'Active Farmers', color: 'green' },
                                    { icon: '🏪', value: stats.buyers, label: 'Verified Buyers', color: 'blue' },
                                    { icon: '🔬', value: stats.experts, label: 'Experts', color: 'purple' },
                                    { icon: '📦', value: stats.products, label: 'Products Listed', color: 'amber' }
                                ].map((stat, index) => (
                                    <div key={stat.label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                                        <div className="text-4xl mb-4 p-3 rounded-full bg-green-100 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-bold text-green-600 mb-2 transition-all duration-300">
                                            {stat.value}+
                                        </div>
                                        <div className="text-gray-600 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
