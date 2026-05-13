import { NextResponse } from 'next/server'

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? ''
const FROM_EMAIL     = 'hello@garstack.com'
const TO_EMAIL       = 'garstack@gmail.com'

const ROLE_LABELS: Record<string, string> = {
  'instructional-designer':    'Instructional Designer',
  'implementation-consultant': 'Implementation Consultant',
  'technical-writer':          'Technical Writer',
  'enablement-onboarding':     'Enablement / Onboarding',
  'cybersecurity-training':    'Cybersecurity Training',
  'data-analytics':            'Data Analytics',
  'ld-partner':                'L&D Partner',
  'training':                  'Training',
}

export async function POST(req: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json({ ok: true })
  }

  try {
    const { employerName, employerSlug, roleType } = await req.json()

    const now = new Date().toLocaleString('en-IE', {
      timeZone: 'Europe/Dublin',
      dateStyle: 'full',
      timeStyle: 'short',
    })

    const roleLabel = ROLE_LABELS[roleType] ?? roleType

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `garstack.com Alerts <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        subject: `👀 ${employerName} just visited your landing page`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px;">
            <div style="border-left:4px solid #E8490F;padding-left:16px;margin-bottom:24px;">
              <h2 style="margin:0 0 4px;font-size:18px;">Landing page visit detected</h2>
              <p style="margin:0;color:#888;font-size:13px;">garstack.com</p>
            </div>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:13px;width:120px;">Employer</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px;font-weight:bold;">${employerName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:13px;">Role</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px;">${roleLabel}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:13px;">Page</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px;"><a href="https://garstack.com/${employerSlug}" style="color:#E8490F;">garstack.com/${employerSlug}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#888;font-size:13px;">Time</td>
                <td style="padding:10px 0;font-size:15px;">${now}</td>
              </tr>
            </table>
          </div>
        `,
      }),
    })
  } catch (err) {
    console.error('Visit notification error:', err)
  }

  return NextResponse.json({ ok: true })
}
