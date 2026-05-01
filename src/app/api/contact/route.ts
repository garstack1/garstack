import { NextResponse } from 'next/server'

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? ''
const TO_EMAIL       = 'garstack@gmail.com'
const FROM_EMAIL     = 'hello@garstack.com'
const SITE_NAME      = 'garstack.com'

export async function POST(req: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  const { name, email, subject, message } = await req.json()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  const notifyRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `${SITE_NAME} Contact Form <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New message via garstack.com - ${name}`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;"><h2 style="border-left:4px solid #E8490F;padding-left:16px;">New contact form submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p style="background:#F4F2EE;padding:16px;">${message}</p></div>`,
    }),
  })

  if (!notifyRes.ok) {
    const err = await notifyRes.json()
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `Garrett Stack <${FROM_EMAIL}>`,
      to: [email],
      subject: `Thanks for reaching out, ${name.split(' ')[0]}`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;"><h2 style="border-left:4px solid #E8490F;padding-left:16px;">Thanks for getting in touch.</h2><p>Hi ${name.split(' ')[0]},</p><p>Thank you for your message - I really appreciate you taking the time to reach out. I will get back to you within one business day.</p><p>Kind regards,<br><strong>Garrett Stack</strong><br><a href="https://garstack.com" style="color:#E8490F;">garstack.com</a></p></div>`,
    }),
  })

  return NextResponse.json({ success: true })
}
