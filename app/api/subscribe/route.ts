import { NextRequest, NextResponse } from 'next/server';

const KIT_FORM_ID = '9162242';
const KIT_API_KEY = 'kit_008440e25ca31fb16eaae4f5ba245d52';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const kitRes = await fetch(
      `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kit-Api-Key': KIT_API_KEY,
        },
        body: JSON.stringify({ email_address: email }),
      }
    );

    if (!kitRes.ok) {
      const err = await kitRes.json().catch(() => ({}));
      console.error('Kit API error:', err);
      return NextResponse.json(
        { error: 'Subscription failed. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe route error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
