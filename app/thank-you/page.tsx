import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're In — Check Your Inbox",
  robots: "noindex, nofollow",
};

export default function ThankYou() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Archivo:wght@400;500;600;700&display=swap');

        body {
          font-family: 'Newsreader', Georgia, serif !important;
          background: #FBF7EC !important;
          color: #0E0D0B !important;
          line-height: 1.6;
        }

        .ty-confirm-banner {
          background: #0E0D0B;
          color: #FBF7EC;
          text-align: center;
          padding: 14px 20px;
          font-family: 'Archivo', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .ty-confirm-check {
          width: 22px;
          height: 22px;
          background: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          animation: tyPopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }

        @keyframes tyPopIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .ty-confirm-check svg { width: 14px; height: 14px; color: white; }
        .ty-confirm-banner span { color: #FFC72C; }

        .ty-hook {
          max-width: 660px;
          margin: 0 auto;
          padding: 56px 24px 0;
          text-align: center;
        }

        .ty-hook-eyebrow {
          font-family: 'Archivo', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8E2818;
          margin-bottom: 16px;
          display: inline-block;
          border-bottom: 2px solid #8E2818;
          padding-bottom: 4px;
        }

        .ty-hook h1 {
          font-family: 'Archivo Black', sans-serif;
          font-size: 36px;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .ty-highlight {
          background: #FFC72C;
          padding: 2px 8px;
          display: inline;
        }

        .ty-subhead {
          font-size: 19px;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto;
        }

        .ty-product-preview {
          max-width: 660px;
          margin: 0 auto;
          padding: 36px 24px 0;
        }

        .ty-preview-frame {
          border: 1px solid #0E0D0B;
          overflow: hidden;
        }

        .ty-preview-frame img { width: 100%; display: block; }

        .ty-preview-caption {
          font-family: 'Archivo', sans-serif;
          font-size: 12px;
          color: #888;
          text-align: center;
          margin-top: 10px;
          letter-spacing: 0.02em;
        }

        .ty-problem {
          max-width: 660px;
          margin: 0 auto;
          padding: 36px 24px 0;
        }

        .ty-problem p {
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .ty-value-stack {
          max-width: 660px;
          margin: 0 auto;
          padding: 44px 24px 0;
        }

        .ty-vs-eyebrow {
          font-family: 'Archivo', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8E2818;
          margin-bottom: 20px;
          text-align: center;
        }

        .ty-stack-item {
          border: 1px solid #0E0D0B;
          margin-bottom: 10px;
          overflow: hidden;
        }

        .ty-stack-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: #FFFFFF;
        }

        .ty-stack-num {
          font-family: 'Archivo Black', sans-serif;
          font-size: 13px;
          color: #FFFFFF;
          background: #0E0D0B;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ty-stack-title {
          font-family: 'Archivo', sans-serif;
          font-weight: 700;
          font-size: 15px;
        }

        .ty-stack-desc {
          padding: 0 20px 16px 64px;
          background: #FFFFFF;
          font-size: 14px;
          line-height: 1.6;
          color: #555;
        }

        .ty-stack-item.star { border: 2px solid #FFC72C; }
        .ty-stack-item.star .ty-stack-num { background: #FFC72C; color: #0E0D0B; }
        .ty-stack-item.star .ty-stack-header,
        .ty-stack-item.star .ty-stack-desc { background: #FFF4D6; }

        .ty-cta-section {
          max-width: 660px;
          margin: 0 auto;
          padding: 40px 24px 0;
          text-align: center;
        }

        .ty-cta-box {
          background: #FFFFFF;
          border: 2px solid #0E0D0B;
          padding: 40px 32px;
        }

        .ty-cta-box h2 {
          font-family: 'Archivo Black', sans-serif;
          font-size: 20px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 6px;
        }

        .ty-cta-sub {
          font-size: 16px;
          color: #666;
          margin-bottom: 24px;
        }

        .ty-price-row {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 12px;
          margin-bottom: 6px;
        }

        .ty-price-was {
          font-family: 'Archivo', sans-serif;
          font-size: 22px;
          color: #aaa;
          text-decoration: line-through;
        }

        .ty-price-now {
          font-family: 'Archivo Black', sans-serif;
          font-size: 48px;
          line-height: 1;
        }

        .ty-price-note {
          font-family: 'Archivo', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #8E2818;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }

        .ty-cta-button {
          display: inline-block;
          background: #FFC72C;
          color: #0E0D0B;
          font-family: 'Archivo', sans-serif;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 18px 44px;
          border: 2px solid #0E0D0B;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .ty-cta-button:hover {
          background: #0E0D0B;
          color: #FFC72C;
          transform: translateY(-2px);
          box-shadow: 4px 4px 0 #FFC72C;
        }

        .ty-cta-details {
          font-family: 'Archivo', sans-serif;
          font-size: 13px;
          color: #888;
          margin-top: 16px;
          line-height: 1.6;
        }

        .ty-cta-details span { display: inline-block; margin: 0 5px; }

        .ty-no-thanks {
          display: block;
          margin-top: 14px;
          font-family: 'Archivo', sans-serif;
          font-size: 12px;
          color: #aaa;
          text-decoration: underline;
        }

        .ty-no-thanks:hover { color: #888; }

        .ty-recording-proof {
          max-width: 660px;
          margin: 0 auto;
          padding: 44px 24px 0;
        }

        .ty-rp-eyebrow {
          font-family: 'Archivo', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8E2818;
          margin-bottom: 14px;
          text-align: center;
        }

        .ty-recording-frame {
          border: 1px solid #0E0D0B;
          overflow: hidden;
        }

        .ty-recording-frame img { width: 100%; display: block; }

        .ty-recording-caption {
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          margin-top: 14px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          color: #555;
        }

        .ty-proof {
          max-width: 660px;
          margin: 0 auto;
          padding: 44px 24px 0;
        }

        .ty-proof-eyebrow {
          font-family: 'Archivo', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8E2818;
          margin-bottom: 16px;
          text-align: center;
        }

        .ty-proof-card {
          background: #FFFFFF;
          border: 1px solid rgba(14, 13, 11, 0.12);
          padding: 24px 28px;
          margin-bottom: 10px;
        }

        .ty-proof-card.featured {
          border: 1px solid #0E0D0B;
          background: #F5EFDF;
        }

        .ty-proof-stars {
          color: #FFC72C;
          font-size: 15px;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .ty-proof-text {
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 10px;
        }

        .ty-proof-name {
          font-family: 'Archivo', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #999;
        }

        .ty-guarantee {
          max-width: 660px;
          margin: 0 auto;
          padding: 40px 24px 0;
        }

        .ty-guarantee-inner {
          border: 1px solid rgba(14, 13, 11, 0.15);
          padding: 24px 28px;
          background: #F5EFDF;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .ty-guarantee-shield { font-size: 24px; flex-shrink: 0; margin-top: 2px; }

        .ty-guarantee-text {
          font-size: 15px;
          line-height: 1.7;
        }

        .ty-guarantee-text strong { font-weight: 600; }

        .ty-credibility {
          max-width: 660px;
          margin: 0 auto;
          padding: 36px 24px;
          text-align: center;
        }

        .ty-cred-line {
          font-size: 15px;
          line-height: 1.7;
          color: #666;
        }

        .ty-cred-line strong { color: #0E0D0B; font-weight: 600; }

        .ty-final-cta {
          background: #0E0D0B;
          padding: 36px 24px;
          text-align: center;
        }

        .ty-final-cta p {
          font-family: 'Archivo', sans-serif;
          font-size: 15px;
          color: #FBF7EC;
          margin-bottom: 16px;
        }

        .ty-final-cta .ty-cta-button { border-color: #FFC72C; }
        .ty-final-cta .ty-cta-button:hover {
          background: #FFC72C;
          color: #0E0D0B;
          box-shadow: 4px 4px 0 rgba(255, 199, 44, 0.3);
        }

        .ty-final-cta .ty-no-thanks { color: #666; }
        .ty-final-cta .ty-no-thanks:hover { color: #999; }

        .ty-footer {
          padding: 20px;
          text-align: center;
        }

        .ty-footer p {
          font-family: 'Archivo', sans-serif;
          font-size: 12px;
          color: #bbb;
        }

        @media (max-width: 520px) {
          .ty-hook h1 { font-size: 27px; }
          .ty-subhead { font-size: 17px; }
          .ty-problem p { font-size: 16px; }
          .ty-stack-desc { padding-left: 20px; }
          .ty-cta-box { padding: 32px 20px; }
          .ty-price-now { font-size: 40px; }
          .ty-cta-button { width: 100%; padding: 16px 20px; font-size: 15px; }
          .ty-guarantee-inner { flex-direction: column; align-items: center; text-align: center; }
        }
      `}</style>

      {/* CONFIRMATION BANNER */}
      <div className="ty-confirm-banner">
        <div className="ty-confirm-check">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
            <polyline points="4 12 10 18 20 6"></polyline>
          </svg>
        </div>
        Dashboard sent to your inbox. <span>Check spam if you don&apos;t see it.</span>
      </div>

      {/* HOOK */}
      <section className="ty-hook">
        <div className="ty-hook-eyebrow">Before You Go</div>
        <h1>Your Dashboard Is Ready.<br /><span className="ty-highlight">Want to Nail Your First Meeting This Sunday?</span></h1>
        <p className="ty-subhead">Most families wing their first meeting and it fizzles by week three. We recorded everything you need to make sure that doesn&apos;t happen.</p>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="ty-product-preview">
        <div className="ty-preview-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/course-preview.jpg" alt="Video walkthrough: Blake and Chandler reviewing the weekly meeting step by step" />
        </div>
        <p className="ty-preview-caption">One of 13 video walkthroughs. Short, practical, watchable together.</p>
      </section>

      {/* PROBLEM */}
      <section className="ty-problem">
        <p>The dashboard gives you the structure. But knowing <em>what to say</em> when your kid checks out, when the budget conversation gets tense, or when someone says &quot;this is dumb&quot; is the part nobody talks about.</p>
        <p>We spent 10+ years figuring that out with 7 kids. Then we hit record.</p>
      </section>

      {/* VALUE STACK */}
      <section className="ty-value-stack">
        <div className="ty-vs-eyebrow">Everything Inside</div>

        <div className="ty-stack-item star">
          <div className="ty-stack-header">
            <div className="ty-stack-num">&#9733;</div>
            <div className="ty-stack-title">Our Real Meeting, Recorded</div>
          </div>
          <div className="ty-stack-desc">No scripts. No edits. Just us, 7 kids, and an actual Sunday meeting. See exactly how we open, handle chaos, and close. Nobody else offers this.</div>
        </div>

        <div className="ty-stack-item">
          <div className="ty-stack-header">
            <div className="ty-stack-num">01</div>
            <div className="ty-stack-title">13 Video Walkthroughs</div>
          </div>
          <div className="ty-stack-desc">Setup, the meeting itself, and the close. Every section explained so your first meeting feels like your tenth.</div>
        </div>

        <div className="ty-stack-item">
          <div className="ty-stack-header">
            <div className="ty-stack-num">02</div>
            <div className="ty-stack-title">Meeting Agenda + Goal Tracker</div>
          </div>
          <div className="ty-stack-desc">The Google Sheet structure that keeps your meeting on rails. Agenda, goals, and next-week action items.</div>
        </div>

        <div className="ty-stack-item">
          <div className="ty-stack-header">
            <div className="ty-stack-num">03</div>
            <div className="ty-stack-title">Issues List Template</div>
          </div>
          <div className="ty-stack-desc">Frustrated about something? Don&apos;t say it in the moment. Write it here. Discuss it at the meeting. This alone has saved us roughly 200 dumb fights.</div>
        </div>

        <div className="ty-stack-item">
          <div className="ty-stack-header">
            <div className="ty-stack-num">04</div>
            <div className="ty-stack-title">Meeting Journal + Lifetime Updates</div>
          </div>
          <div className="ty-stack-desc">Track your progress week over week. Every new video and template we add, you get automatically.</div>
        </div>
      </section>

      {/* CTA #1 */}
      <section className="ty-cta-section">
        <div className="ty-cta-box">
          <h2>This Page Only: $24 Instead of $39</h2>
          <p className="ty-cta-sub">This price isn&apos;t available anywhere else.</p>
          <div className="ty-price-row">
            <span className="ty-price-was">$39</span>
            <span className="ty-price-now">$24</span>
          </div>
          <div className="ty-price-note">Thank-you page exclusive</div>
          <a href="https://allsmith.gumroad.com/l/weekly/DASHBOARD" className="ty-cta-button">Get Instant Access &rarr;</a>
          <div className="ty-cta-details">
            Instant delivery <span>&middot;</span> Lifetime access <span>&middot;</span> 100% refund guarantee
          </div>
          <a href="https://theallsmiths.com" className="ty-no-thanks">No thanks, I&apos;ll figure it out on my own</a>
        </div>
      </section>

      {/* RECORDING PROOF */}
      <section className="ty-recording-proof">
        <div className="ty-rp-eyebrow">What Makes This Different</div>
        <div className="ty-recording-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/recording-still.jpg" alt="Blake and Chandler Allsmith recording their weekly family meeting walkthrough" />
        </div>
        <p className="ty-recording-caption">We sat down and recorded our actual Sunday meeting. 7 kids. No reshoots. You&apos;ll see exactly what this looks like in real life.</p>
      </section>

      {/* SOCIAL PROOF */}
      <section className="ty-proof">
        <div className="ty-proof-eyebrow">From Real Families</div>

        <div className="ty-proof-card featured">
          <div className="ty-proof-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div className="ty-proof-text">&quot;When I saw your weekly meeting spreadsheet it made SO much sense to me and helped clarify parts of the meeting that hadn&apos;t been working for us. I&apos;ve enjoyed exploring more of your resources over the last week.&quot;</div>
          <div className="ty-proof-name">Grace</div>
        </div>

        <div className="ty-proof-card">
          <div className="ty-proof-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div className="ty-proof-text">&quot;My wife Emily and I just started using your weekly meeting template, it&apos;s been so helpful.&quot;</div>
          <div className="ty-proof-name">Ben</div>
        </div>

        <div className="ty-proof-card">
          <div className="ty-proof-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div className="ty-proof-text">&quot;Life changing! If you can implement this weekly meeting using Blake&apos;s simple template, it will revolutionize your marriage. Follow his step by step guide and stick with it, and you can&apos;t help but see tremendous growth.&quot;</div>
          <div className="ty-proof-name">Verified Buyer</div>
        </div>
      </section>

      {/* CTA #2 */}
      <section className="ty-cta-section">
        <div className="ty-cta-box">
          <h2>$24. One Time. Lifetime Access.</h2>
          <p className="ty-cta-sub">Less than dinner out. More useful than most parenting books.</p>
          <div className="ty-price-row">
            <span className="ty-price-was">$39</span>
            <span className="ty-price-now">$24</span>
          </div>
          <div className="ty-price-note">This page only</div>
          <a href="https://allsmith.gumroad.com/l/weekly/DASHBOARD" className="ty-cta-button">Get the Video Walkthrough &rarr;</a>
          <div className="ty-cta-details">
            Instant delivery <span>&middot;</span> Lifetime access <span>&middot;</span> 100% refund guarantee
          </div>
          <a href="https://theallsmiths.com" className="ty-no-thanks">No thanks, I&apos;ll figure it out on my own</a>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="ty-guarantee">
        <div className="ty-guarantee-inner">
          <div className="ty-guarantee-shield">&#128737;&#65039;</div>
          <div className="ty-guarantee-text">
            <strong>Zero-risk guarantee.</strong> Watch the videos. Run your first meeting. If you don&apos;t feel a noticeable difference in how your family communicates, email blake@allsmith.org and get every penny back. No hoops. No forms. It either works or you pay nothing.
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="ty-credibility">
        <p className="ty-cred-line">From <strong>Blake &amp; Chandler Allsmith</strong>, authors of <strong><em>The Family Framework</em></strong> (Baker Books, October 2026, foreword by Jeff Bethke). 10,000+ families using our tools. 15,000+ weekly readers.</p>
      </section>

      {/* FINAL CTA */}
      <section className="ty-final-cta">
        <p>You already made the decision to invest in your family. This is the next step.</p>
        <a href="https://allsmith.gumroad.com/l/weekly/DASHBOARD" className="ty-cta-button">Get Instant Access &mdash; $24 &rarr;</a>
        <a href="https://theallsmiths.com" className="ty-no-thanks">No thanks, take me to the site</a>
      </section>

      {/* FOOTER */}
      <div className="ty-footer">
        <p>&copy; 2026 Blake &amp; Chandler Allsmith</p>
      </div>
    </>
  );
}
