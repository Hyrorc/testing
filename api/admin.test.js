import test from 'node:test'
import assert from 'node:assert/strict'
import handler from './admin.js'

function createRes() {
  return {
    statusCode: 200,
    status(code) {
      this.statusCode = code
      return this
    },
    json(payload) {
      this.body = payload
      return this
    },
    send(payload) {
      this.body = payload
      return this
    },
  }
}

test('accepts valid admin credentials', async () => {
  process.env.ADMIN_EMAIL = 'admin@example.com'
  process.env.ADMIN_PASSWORD = 'supersecret'

  const req = { method: 'POST', body: { email: 'Admin@Example.com', password: 'supersecret' } }
  const res = createRes()

  await handler(req, res)

  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.body, { ok: true })
})

test('rejects invalid admin credentials', async () => {
  process.env.ADMIN_EMAIL = 'admin@example.com'
  process.env.ADMIN_PASSWORD = 'supersecret'

  const req = { method: 'POST', body: { email: 'wrong@example.com', password: 'nope' } }
  const res = createRes()

  await handler(req, res)

  assert.equal(res.statusCode, 401)
  assert.deepEqual(res.body, { error: 'Invalid credentials' })
})
