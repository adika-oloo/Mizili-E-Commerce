export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, password, role, phone } = req.body
  
  res.status(201).json({
    user: {
      id: Date.now(),
      name,
      email,
      role,
      phone
    },
    token: 'demo-token',
    message: 'Registration successful'
  })
}
