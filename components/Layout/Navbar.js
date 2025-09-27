import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">🌱 Mizili</Link>
        
        <div className="flex space-x-4">
          <Link href="/marketplace" className="hover:underline">Marketplace</Link>
          <Link href="/auth/login" className="hover:underline">Login</Link>
          <Link href="/auth/register" className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100">
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}
