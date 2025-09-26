export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-600 to-green-400 text-white">
        <h1 className="text-5xl font-extrabold">Mizili Agricultural Platform</h1>
        <p className="mt-6 text-xl max-w-2xl mx-auto">
          Connecting Farmers, Buyers, and Agricultural Services for a smarter, transparent, and sustainable future.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-white text-green-700 rounded-xl font-semibold shadow hover:bg-gray-100">
            Explore Marketplace
          </button>
          <button className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-green-700">
            Join as Farmer
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 p-12">
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-green-600">🌾 For Farmers</h2>
          <p className="mt-4 text-gray-600">
            List products, access weather alerts, market insights, and training services.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-green-600">🛒 For Buyers</h2>
          <p className="mt-4 text-gray-600">
            Discover produce, compare prices, order directly from farmers, and leave reviews.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-green-600">📚 Extension Services</h2>
          <p className="mt-4 text-gray-600">
            Provide expert knowledge, training resources, and connect with farmers.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-green-100">
        <h2 className="text-3xl font-bold text-green-700">Ready to Transform Agriculture?</h2>
        <p className="mt-4 text-lg text-gray-600">Join Mizili today and be part of the change.</p>
        <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t mt-8">
        © 2025 Mizili. All rights reserved.
      </footer>
    </main>
  );
}
