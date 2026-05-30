'use client'

import Navigation from './components/Navigation'
import LeadForm from './components/LeadForm'

export default function HomePage() {
  const LEAD_RELAY_URL = 'http://localhost:3002/lead'
  return (
    <main id="main-content">

      {/* ── Navigation ─────────────────────────────────────────── */}
      <Navigation />

      {/* ══════════════════════════════════════════════════════════
          HERO — warm parchment, editorial serif headline
      ══════════════════════════════════════════════════════════ */}
      <section
        className="pt-36 pb-28 px-6 bg-[var(--bg-primary)]"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-4xl mx-auto text-center">

          <div className="pill mb-10">
            <span className="pill-dot" aria-hidden="true" />
            Free for qualifying SMEs &nbsp;·&nbsp; 2-week assessment
          </div>

          <h1
            id="hero-heading"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 500,
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}
          >
            Your SME is leaking
            <br />
            <span style={{ color: 'var(--accent)' }}>$50,000 a year</span>
            <br />
            in operational waste.
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '36rem',
              margin: '0 auto 2.5rem',
            }}
          >
            A 2-week operational audit that maps your workflows,
            quantifies your cash leakage, and prescribes automation
            with a{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              payback under 10 months
            </strong>
            .
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            <a
              href="/discovery"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Take the Full Assessment
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              How it works
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              fontSize: '13px',
              color: 'var(--text-tertiary)',
            }}
            role="list"
            aria-label="Key benefits"
          >
            {[
              'No cost',
              'No commitment',
              '100% confidential',
            ].map((item) => (
              <span
                key={item}
                role="listitem"
                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROBLEM FRAMING — 3-column card grid
      ══════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-surface)' }}
        aria-labelledby="problem-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2
              id="problem-heading"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Is this costing you money?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '28rem', margin: '0 auto' }}>
              Most SMEs with 10–50 employees bleed cash through inefficiencies they cannot see.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
            role="list"
            aria-label="Common operational problems"
          >
            {[
              {
                icon: (
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '6+ hours/week on manual data entry',
                desc: 'Your team repeats the same data entry tasks every week — filling spreadsheets, copying between tools, re-keying customer data. That\'s a full person\'s time, gone.',
              },
              {
                icon: (
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: 'SOPs exist but nobody follows them',
                desc: 'You have documented processes, but the team takes shortcuts. Errors accumulate. Quality suffers. Customers notice. The gap between "documented" and "done" costs you money.',
              },
              {
                icon: (
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
                title: 'Tools that don\'t talk to each other',
                desc: 'You pay for multiple SaaS subscriptions but they don\'t integrate. CRM doesn\'t update your accounting. Email doesn\'t log to your project tracker. Every gap is a manual step.',
              },
            ].map((card, i) => (
              <article
                key={i}
                className="card"
                role="listitem"
                style={{ cursor: 'default' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(201, 100, 66, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW IT WORKS — numbered steps on dark background
      ══════════════════════════════════════════════════════════ */}
      <section
        id="how-it-works"
        className="py-24 px-6"
        style={{ background: 'var(--bg-dark)' }}
        aria-labelledby="how-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge badge-pro" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              The Process
            </span>
            <h2
              id="how-heading"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 500,
                color: 'var(--text-on-dark)',
                marginBottom: '0.75rem',
              }}
            >
              From first form to final report — 2 weeks
            </h2>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', maxWidth: '26rem', margin: '0 auto' }}>
              Here&apos;s exactly what you get and when.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                step: '1',
                title: 'Fill out the form',
                desc: '4 questions about your company and team. Takes 2 minutes. No fluff.',
                tag: 'Day 1',
              },
              {
                step: '2',
                title: 'We analyze your data',
                desc: 'We map your workflows, score your bottlenecks, model your cash leakage.',
                tag: 'Days 2–7',
              },
              {
                step: '3',
                title: 'You receive the report',
                desc: 'Boardroom-ready document with your top AI opportunities ranked by ROI.',
                tag: 'Day 14',
              },
              {
                step: '4',
                title: 'If it makes sense — let\'s talk',
                desc: 'No pressure. Review the findings and decide if implementation makes sense.',
                tag: 'Your call',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '28px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <span
                    className="step-number"
                    style={{
                      background: 'var(--accent)',
                      color: '#fff',
                    }}
                  >
                    {item.step}
                  </span>
                  <span
                    className="badge badge-pro"
                    style={{ fontSize: '10px' }}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    color: 'var(--text-on-dark)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LEAD CAPTURE FORM
      ══════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-primary)' }}
        aria-labelledby="form-heading"
      >
        <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2
              id="form-heading"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Start your free audit
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '26rem', margin: '0 auto' }}>
              Answer 4 questions. We&apos;ll be in touch within 3 business days with your report.
            </p>
          </div>
          <LeadForm relayUrl={LEAD_RELAY_URL} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SOCIAL PROOF — testimonials on warm surface
      ══════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-surface)' }}
        aria-labelledby="social-proof-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2
              id="social-proof-heading"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Trusted by SME operators across industries
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              From manufacturing to logistics to professional services — cash leakage looks the same.
            </p>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
            role="list"
            aria-label="Trust indicators"
          >
            {[
              { icon: '🔒', label: 'GDPR Compliant' },
              { icon: '🔐', label: '256-bit SSL' },
              { icon: '⭐', label: '4.9/5 Rating' },
              { icon: '📊', label: '500+ Audits' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="pill"
                role="listitem"
              >
                <span aria-hidden="true">{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
            role="list"
            aria-label="Customer testimonials"
          >
            {[
              {
                quote: 'We had no idea we were losing $40K/year to manual invoice processing. The audit paid for itself in the first month of implementation.',
                name: 'Michael Torres',
                role: 'Operations Director',
                company: 'Precision Parts Co.',
              },
              {
                quote: 'The report was boardroom-ready. We presented it to our leadership team and approved the first automation project the same week.',
                name: 'Sarah Chen',
                role: 'CEO',
                company: 'LogiTech Solutions',
              },
              {
                quote: 'I was skeptical about a "free" audit, but the depth of the analysis surprised me. The ROI modeling alone was worth the time.',
                name: "James O'Brien",
                role: 'Managing Partner',
                company: "OBrien & Associates",
              },
            ].map((t, i) => (
              <article
                key={i}
                className="testimonial-card"
                role="listitem"
              >
                {/* Stars */}
                <div
                  style={{
                    display: 'flex',
                    gap: '3px',
                    marginBottom: '1rem',
                    paddingLeft: '2rem',
                  }}
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="14"
                      height="14"
                      fill="var(--accent)"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                    paddingLeft: '2rem',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div style={{ paddingLeft: '2rem' }}>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-tertiary)',
                      marginTop: '2px',
                    }}
                  >
                    {t.role}, {t.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: 'var(--bg-primary)' }}
        aria-labelledby="faq-heading"
      >
        <div style={{ maxWidth: '36rem', margin: '0 auto' }}>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
            }}
          >
            Frequently asked questions
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {[
              {
                q: 'What does "free" mean?',
                a: 'You receive a complete written audit report at no cost and with no obligation. If you decide to implement any of the recommended automation projects, that would be a separate discussion — but the audit itself is free.',
              },
              {
                q: 'How long does the audit take?',
                a: 'From the moment you submit the intake form, the process takes approximately 2 weeks. You will need to be available for one 45–60 minute working session with us to map your key workflows.',
              },
              {
                q: 'Who sees my data?',
                a: 'Only the assigned consultant and our AI audit tools. Your data is never shared with third parties or used for any purpose outside of delivering your audit report.',
              },
              {
                q: 'What if my company is outside the 10–50 employee range?',
                a: 'This audit is designed specifically for SMEs with 10–50 employees. If your company falls outside this range, the recommendations would not be relevant. You can still submit the form and we will let you know if we can help.',
              },
              {
                q: 'What kind of AI automation do you recommend?',
                a: 'We focus on open-source and low-cost AI tools — automation platforms like n8n, Make, or LangFlow, combined with LLMs for document processing, classification, and workflow routing. We do not recommend expensive enterprise software.',
              },
              {
                q: 'What if I\'m not ready to implement after the audit?',
                a: 'That\'s fine. The audit report is yours to keep. You can review it, share it with your team, and reach out when you\'re ready. There is no pressure and no sales follow-up unless you request one.',
              },
            ].map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span>{faq.q}</span>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <footer
        style={{
          background: 'var(--bg-dark)',
          color: 'var(--text-tertiary)',
          padding: '3.5rem 1.5rem 2.5rem',
        }}
        role="contentinfo"
      >
        <div
          style={{
            maxWidth: '60rem',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '2.5rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontWeight: 500,
                    fontSize: '1.05rem',
                    color: 'var(--text-on-dark)',
                  }}
                >
                  SME AI Audit
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  maxWidth: '18rem',
                  color: 'var(--text-tertiary)',
                }}
              >
                Operational diagnostics and AI automation recommendations for SMEs with 10–50 employees.
              </p>
            </div>

            {/* Links */}
            <div
              style={{
                display: 'flex',
                gap: '3rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                  Service
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['How it works', 'Start audit', 'Privacy policy'].map((link) => (
                    <a
                      key={link}
                      href={link === 'Privacy policy' ? '/privacy' : '#' + (link === 'Start audit' ? 'intake-form' : 'how-it-works')}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-tertiary)',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-on-dark)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                  Contact
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a
                    href="mailto:audit@sme-audit.com"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-tertiary)',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-on-dark)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
                  >
                    audit@sme-audit.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="section-divider" />

          <div
            style={{
              paddingTop: '1.75rem',
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--text-tertiary)',
            }}
          >
            Built for SMEs with 10–50 employees.&nbsp;
            Open-source-first.&nbsp;
            No vendor lock-in.
          </div>
        </div>
      </footer>
    </main>
  )
}