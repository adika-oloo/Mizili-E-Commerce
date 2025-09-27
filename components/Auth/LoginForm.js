import { useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    // Demo login - remove this in production
    if (email === 'demo@mizili.com' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({
        id: 1,
        name: 'Demo User',
        email: 'demo@mizili.com',
        role: 'farmer'
      }))
      router.push('/dashboard')
      return
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('user', JSON.stringify(data.user))
        router.push('/dashboard')
      } else {
        setError('Invalid credentials')
      }
    } catch (error) {
      setError('Login failed. Using demo mode.')
      // Fallback to demo user for testing
      localStorage.setItem('user', JSON.stringify({
        id: 1,
        name: 'Demo User',
        email: email || 'demo@mizili.com',
        role: 'farmer'
      }))
      router.push('/dashboard')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>}
      
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded"
          placeholder="demo@mizili.com"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded"
          placeholder="password"
          required
        />
      </div>

      <button type="submit" className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700">
        Login
      </button>
      
      <div className="text-center text-sm text-gray-600 mt-4">
        Demo credentials: demo@mizili.com / password
      </div>
    </form>
  )
}
