// Vercel serverless function: relays form submissions to Resend, and forwards
// candidate submissions (jobs/join) into RecruitCRM.
// The API keys live in RESEND_API_KEY / RECRUITCRM_API_TOKEN env vars.

import { createCandidate, SOURCE_PROFILE, SOURCE_FREELANCER } from './_recruitcrm.js'

const TO = 'hyro@hyrorc.com'
const FROM = 'HYRO Website <onboarding@resend.dev>'

const FORMS = {
  contact: 'New contact message',
  jobs: 'New candidate profile',
  join: 'New freelancer application',
  partner: 'New partnership inquiry',
  business: 'New business introduction inquiry',
}

// Map a form submission to a RecruitCRM candidate. Returns null for forms that
// are inquiries rather than candidates (contact).
function toCandidate(form, fields, attachment) {
  const cvFile =
    attachment && attachment.filename && attachment.content
      ? {
          buffer: Buffer.from(attachment.content, 'base64'),
          fileName: attachment.filename,
          contentType: attachment.contentType || 'application/octet-stream',
        }
      : null

  if (form === 'jobs') {
    const prefs = [
      fields.seniority ? `Seniority: ${fields.seniority}` : '',
      fields.workType ? `Work type: ${fields.workType}` : '',
    ]
      .filter(Boolean)
      .join(' | ')
    return {
      fullName: fields.name,
      email: fields.email,
      phone: fields.phone || null,
      industry: fields.industry || null,
      location: fields.city || null,
      skills: prefs || null,
      source: SOURCE_PROFILE,
      cvFileName: attachment?.filename || null,
      cvFile,
    }
  }

  if (form === 'join') {
    return {
      fullName: fields.name,
      email: fields.email,
      phone: fields.phone || null,
      industry: fields.expertise || null,
      skills: fields.services || null,
      bio: fields.bio || null,
      portfolioUrl: fields.portfolio || null,
      source: SOURCE_FREELANCER,
      cvFileName: attachment?.filename || null,
      cvFile,
    }
  }

  return null
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { form, fields, attachment } = req.body || {}
  if (!FORMS[form] || !fields || typeof fields !== 'object') {
    res.status(400).json({ error: 'Invalid payload' })
    return
  }
  if (!fields.email || !fields.name) {
    res.status(400).json({ error: 'Name and email are required' })
    return
  }

  const rows = Object.entries(fields)
    .filter(([, v]) => v !== '' && v != null)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#888;text-transform:capitalize;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`
    )
    .join('')

  const payload = {
    from: FROM,
    to: [TO],
    reply_to: fields.email,
    subject: `${FORMS[form]} — ${fields.name}`,
    html: `
      <div style="font-family:Arial,sans-serif;font-size:14px;color:#222">
        <h2 style="color:#031B3A">${FORMS[form]}</h2>
        <table style="border-collapse:collapse">${rows}</table>
        <p style="color:#999;font-size:12px;margin-top:24px">Sent from hyrorc.com</p>
      </div>`,
  }

  if (attachment && attachment.filename && attachment.content) {
    // ~4MB serverless body limit; reject anything close to it
    if (attachment.content.length > 4_500_000) {
      res.status(413).json({ error: 'Attachment too large' })
      return
    }
    payload.attachments = [{ filename: attachment.filename, content: attachment.content }]
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = await r.json()
    if (!r.ok) {
      console.error('Resend error:', data)
      res.status(502).json({ error: data.message || 'Send failed' })
      return
    }

    // Forward candidate submissions into RecruitCRM. This is best-effort: the
    // email already went out, so a CRM hiccup must not fail the submission.
    const candidate = toCandidate(form, fields, attachment)
    if (candidate) {
      const crm = await createCandidate(candidate)
      if (!crm.ok) console.error('RecruitCRM push failed:', crm.error)
    }

    res.status(200).json({ ok: true, id: data.id })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Send failed' })
  }
}
