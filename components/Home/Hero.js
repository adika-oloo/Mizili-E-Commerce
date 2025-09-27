import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-green-600 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Mizili Agricultural Marketplace</h1>
        <p className="text-xl mb-8">Connect farmers, buyers, and extension service providers</p>
        <div className="space-x-4">
          <Link href="/auth/register?role=farmer" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
            Join as Farmer
          </Link>
          <Link href="/auth/register?role=buyer" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold">
            Join as Buyer
          </Link>
        </div>
      </div>
    </section>
  )
}
