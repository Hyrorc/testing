export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { email, password } = req.body || {}
  const expectedEmail = (process.env.ADMIN_EMAIL || 'admin@hyro.local').trim().toLowerCase()
  const expectedPassword = (process.env.ADMIN_PASSWORD || 'hyro-admin').trim()

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' })
    return
  }

  if (String(email).trim().toLowerCase() === expectedEmail && String(password) === expectedPassword) {
    res.status(200).json({ ok: true })
    return
  }

  res.status(401).json({ error: 'Invalid credentials' })
}
