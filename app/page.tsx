'use client';

import { useState, useRef, FormEvent } from 'react';

function SignupForm({ id }: { id: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const email = emailRef.current?.value.trim();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, referrer: window.location.href }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      // Fire Meta Pixel Lead event
      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead');
      }

      setStatus('success');
      setMessage("You're in! Check your email to get your dashboard.");
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        {message}
      </div>
    );
  }

  return (
    <div>
      {status === 'error' && (
        <div className="form-error">{message}</div>
      )}
      <form className="signup-form" id={id} onSubmit={handleSubmit}>
        <input
          type="email"
          ref={emailRef}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
        />
        <button type="submit" className="cta-btn" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Get the Free Dashboard \u2192'}
        </button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Free Google Sheet &mdash; Instant Access
            </div>
            <h1 className="hero-headline">Put your email in the form and get:</h1>
            <ul className="hero-bullets">
              <li>
                <span className="bullet-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span><span className="free-tag">FREE</span> family dashboard w/ meeting, budget, meal capsule, and SOP templates we use for our family of 6</span>
              </li>
              <li>
                <span className="bullet-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>Weekly email with frameworks for founders and families</span>
              </li>
              <li>
                <span className="bullet-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>Early access to new tools, e-courses, and my upcoming book</span>
              </li>
            </ul>
            <SignupForm id="hero-form" />
            <p className="form-note">Join 10,083+ families. Unsubscribe anytime. No spam, ever.</p>
          </div>
          <div className="hero-right">
            <div className="spreadsheet-card">
              <div className="spreadsheet-bar">
                <div className="dots">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                </div>
                <span className="title">Family Framework Dashboard</span>
              </div>
              <table className="sheet-table">
                <thead><tr><th style={{ width: '58%' }}>Tab</th><th>Category</th></tr></thead>
                <tbody>
                  <tr className="section-header"><td colSpan={2}>&#10084;&#65039; RELATIONSHIP</td></tr>
                  <tr><td>&#128131; Date Night Convo&apos;s</td><td><span className="sheet-label label-red">Relationship</span></td></tr>
                  <tr><td>&#128767; Kid 1:1 Convo&apos;s</td><td><span className="sheet-label label-red">Relationship</span></td></tr>
                  <tr><td>&#129332; Family Org Chart</td><td><span className="sheet-label label-red">Relationship</span></td></tr>
                  <tr className="section-header"><td colSpan={2}>&#129517; DIRECTION</td></tr>
                  <tr><td>&#129517; Mission / Vision / Values / Goals</td><td><span className="sheet-label label-blue">Direction</span></td></tr>
                  <tr className="section-header"><td colSpan={2}>&#9201;&#65039; MEETINGS</td></tr>
                  <tr><td>&#9201;&#65039; Weekly Meeting (90min)</td><td><span className="sheet-label label-orange">Meetings</span></td></tr>
                  <tr><td>&#128683; Issues List</td><td><span className="sheet-label label-orange">Meetings</span></td></tr>
                  <tr><td>&#128641; Quarterly Offsite (1/2 day)</td><td><span className="sheet-label label-orange">Meetings</span></td></tr>
                  <tr><td>&#127958;&#65039; Annual Retreat (2 days)</td><td><span className="sheet-label label-orange">Meetings</span></td></tr>
                  <tr className="section-header"><td colSpan={2}>&#128736;&#65039; TOOLS</td></tr>
                  <tr><td>&#128181; Simple Budget</td><td><span className="sheet-label label-green">Tools</span></td></tr>
                  <tr><td>&#129369; Meal Capsules</td><td><span className="sheet-label label-green">Tools</span></td></tr>
                  <tr><td>&#128198; Weekly Rhythm</td><td><span className="sheet-label label-green">Tools</span></td></tr>
                  <tr><td>&#128301; SWOT Analysis</td><td><span className="sheet-label label-green">Tools</span></td></tr>
                  <tr><td style={{ color: '#999', fontStyle: 'italic' }}>+ 4 more tabs...</td><td><span className="sheet-label label-green">Tools</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-inner">
          <p className="section-label">All 16 Tabs, All Free</p>
          <h2 className="features-title">Here&apos;s What&apos;s Actually Inside</h2>
          <p className="features-sub">4 categories. 16 tabs. Every template my wife and I use to run our family of 6. Go to File &rarr; Make a Copy and it&apos;s yours.</p>
          <div className="category">
            <div className="category-header"><span className="category-icon">&#10084;&#65039;</span><span className="category-name">Relationship</span></div>
            <div className="category-grid">
              <div className="feature-card"><h3>&#128131; Date Night Convo&apos;s</h3><p>A running list of things to talk about with your spouse, plus evergreen questions like &ldquo;Tell me something you thought this week that you wouldn&apos;t tell anyone else.&rdquo;</p></div>
              <div className="feature-card"><h3>&#128767; Kid 1:1 Convo&apos;s</h3><p>Intentional conversation prompts for each kid. Track what you need to cover and use evergreen questions like &ldquo;Is there anything as a Dad I can do to make your life better?&rdquo;</p></div>
              <div className="feature-card"><h3>&#129332; Family Org Chart</h3><p>I know it sounds insane, but giving each parent clear ownership of family areas (Growth, Operations, Finance) makes life so much better.</p></div>
            </div>
          </div>
          <div className="category">
            <div className="category-header"><span className="category-icon">&#129517;</span><span className="category-name">Direction</span></div>
            <div className="category-grid">
              <div className="feature-card"><h3>&#129517; Mission / Vision / Values / Goals</h3><p>Define your family&apos;s core values, mission statement, and 1-year, 3-year, and 10-year vision. Update annually, revisit quarterly. This is the compass for everything else.</p></div>
            </div>
          </div>
          <div className="category">
            <div className="category-header"><span className="category-icon">&#9201;&#65039;</span><span className="category-name">Meetings</span></div>
            <div className="category-grid">
              <div className="feature-card"><h3>&#9201;&#65039; Weekly Meeting (90min)</h3><p>A structured 90-minute agenda: good news, to-do review, goal check (green/yellow/red), calendar and budget review, issues to discuss, and a recap. This is the heartbeat.</p></div>
              <div className="feature-card"><h3>&#128683; Issues List</h3><p>This is a game changer. When you&apos;re frustrated about something, don&apos;t say it out loud. Put it on this list and cover it at the weekly meeting. Saves so many fights.</p></div>
              <div className="feature-card"><h3>&#128641; Quarterly Offsite (1/2 Day)</h3><p>Half-day agenda to review the last 90 days, check goals, revisit your mission/vision/values, and set next quarter&apos;s goals. Keeps you making progress.</p></div>
              <div className="feature-card"><h3>&#127958;&#65039; Annual Retreat (2 Days)</h3><p>A full 2-day retreat agenda: review the year, assess team health, refresh your 3-year picture, build the 1-year plan, and set quarterly goals. The ultimate reset.</p></div>
              <div className="feature-card"><h3>&#128301; SWOT Analysis</h3><p>Yeah, it&apos;s business-y. But mapping your family&apos;s strengths, weaknesses, opportunities, and threats once a year during planning is incredibly clarifying.</p></div>
              <div className="feature-card"><h3>&#128198; Annual Calendar</h3><p>12-month view for tracking family events, vacations, and important dates. See the whole year at a glance so nothing sneaks up on you.</p></div>
            </div>
          </div>
          <div className="category">
            <div className="category-header"><span className="category-icon">&#128736;&#65039;</span><span className="category-name">Tools</span></div>
            <div className="category-grid">
              <div className="feature-card"><h3>&#128181; Simple Budget</h3><p>Give every dollar a job. Income, savings, giving, recurring expenses, discretionary spending. All mapped out with 30+ expense categories. No complicated software needed.</p></div>
              <div className="feature-card"><h3>&#129369; Meal Capsules</h3><p>This has changed our life. A simple weekly grid: breakfast, lunch, dinner across 7 days. Plan once, eat stress-free all week.</p></div>
              <div className="feature-card"><h3>&#128198; Weekly Rhythm</h3><p>Map your ideal week from early morning to late evening, every day. Design it quarterly to align with your goals. Post it on the fridge.</p></div>
              <div className="feature-card"><h3>&#128736;&#65039; Chores List</h3><p>Nothing revolutionary, but reviewing a shared chores checklist every week at your meeting means nothing gets dropped.</p></div>
              <div className="feature-card"><h3>&#128085; Clothing Capsules</h3><p>Fill out the details for each family member, paste it into ChatGPT, and get a complete capsule wardrobe checklist for the season. Seriously.</p></div>
              <div className="feature-card"><h3>&#129345; SOPs</h3><p>Standard Operating Procedures for your family. Document how things get done so it&apos;s not all in one person&apos;s head.</p></div>
            </div>
          </div>
          <div className="tab-count">
            <div className="tc-number">16 tabs</div>
            <p>One Google Sheet. File &rarr; Make a Copy. Start using it tonight.</p>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="proof-inner">
          <div className="proof-stat">10,083+</div>
          <p className="proof-label">families already using the dashboard</p>
          <div className="testimonials">
            <div className="testimonial">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>&ldquo;Systems only work when the relationships are healthy. The weekly date night idea really stood out to me. Keeping it simple, phone-free, and consistent sounds like such a powerful way to reconnect.&rdquo;</p>
              <span className="author">&#8212; JP, Newsletter Subscriber</span>
            </div>
            <div className="testimonial">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>&ldquo;I love the idea of applying startup-style systems to family life. Having a clear framework really helps reduce the mental load and keeps everyone aligned.&rdquo;</p>
              <span className="author">&#8212; Judy, Newsletter Subscriber</span>
            </div>
            <div className="testimonial">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>&ldquo;My husband and I didn&apos;t come from &lsquo;team&rsquo; mindset families. We often felt lost in where to even start. The Family Mission/Vision/Values statement is exactly the central grounding point we needed.&rdquo;</p>
              <span className="author">&#8212; Bianca, Newsletter Subscriber</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-cta">
        <div className="bottom-cta-inner">
          <h2>Your family deserves a system.<br />This one&apos;s free.</h2>
          <p>Drop your email. Get the dashboard. Start this week.</p>
          <SignupForm id="bottom-form" />
          <p className="form-note">No credit card. No spam. Just a really useful spreadsheet.</p>
        </div>
      </section>
    </>
  );
}
