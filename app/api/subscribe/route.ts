import { NextRequest, NextResponse } from 'next/server';

const KIT_FORM_ID = '9162242';
const KIT_API_KEY = 'kit_008440e25ca31fb16eaae4f5ba245d52';
const KIT_BASE = 'https://api.kit.com/v4';

export async function POST(req: NextRequest) {
  try {
    const { email, referrer } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Step 1: Create or update the subscriber
    const createRes = await fetch(`${KIT_BASE}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': KIT_API_KEY,
      },
      body: JSON.stringify({ email_address: email }),
    });

    if (!createRes.ok) {
      const err = await createRes.json().catch(() => ({}));
      console.error('Kit create subscriber error:', err);
      return NextResponse.json(
        { error: 'Subscription failed. Please try again.' },
        { status: 500 }
      );
    }

    const createData = await createRes.json();
    const subscriberId = createData?.subscriber?.id;

    if (!subscriberId) {
      return NextResponse.json(
        { error: 'Subscription failed. Please try again.' },
        { status: 500 }
      );
    }

    // Step 2: Add subscriber to the form
    const addRes = await fetch(
      `${KIT_BASE}/forms/${KIT_FORM_ID}/subscribers/${subscriberId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kit-Api-Key': KIT_API_KEY,
        },
        body: JSON.stringify({
          referrer: referrer || 'https://dashboard.theallsmiths.com',
        }),
      }
    );

    if (!addRes.ok) {
      const err = await addRes.json().catch(() => ({}));
      console.error('Kit add to form error:', err);
      // Subscriber was created — still a partial success
      return NextResponse.json({ success: true });
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
