export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Demo authentication - always success
  const { email, password } = req.body
  
  res.status(200).json({
    user: {
      id: 1,
      name: 'Demo User',
      email: email,
      role: 'farmer'
    },
    token: 'demo-token'
  })
}
