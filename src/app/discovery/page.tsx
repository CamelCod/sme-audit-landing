'use client'
import { useState, useEffect } from 'react'

export default function DiscoveryPage() {
  const [phase, setPhase] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [projectId, setProjectId] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const pid = params.get('project_id')
    if (pid) setProjectId(pid)
    if (!pid) {
      const stored = sessionStorage.getItem('sme_project_id')
      if (stored) setProjectId(stored)
    }
  }, [])

  const phases = ['Company Profile', 'Pain Discovery', 'Cost Baseline', 'Solution & ROI']

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const fd = new FormData(e.currentTarget)
    try {
      const resp = await fetch('http://localhost:3002/discovery-form', {
        method: 'POST',
        body: fd,
      })
      if (resp.ok) {
        setDone(true)
        sessionStorage.removeItem('sme_project_id')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (done) return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center max-w-lg">
        <h2 className="text-2xl font-semibold mb-3">Assessment Complete!</h2>
        <p className="text-gray-600">Your full audit is being generated. Expect your DOCX report within 3 business days.</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Progress bar */}
      <div className="h-1 bg-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="h-full bg-red-600 transition-all duration-500"
          style={{ width: `${((phase + 1) / 4) * 100}%` }} />
      </div>

      <div className="max-w-2xl mx-auto p-8 pt-16">
        <div className="mb-2">
          <span className="text-xs uppercase tracking-widest text-red-600 font-medium">
            Phase {phase + 1} of 4
          </span>
        </div>
        <h1 className="text-3xl font-serif mb-2" style={{ color: 'var(--text-primary)' }}>
          {phases[phase]}
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
          {phase === 0 && 'Tell us about your company and how it operates.'}
          {phase === 1 && 'Identify where your operations are costing you money.'}
          {phase === 2 && 'Translate your pain points into real costs.'}
          {phase === 3 && 'What would solving these problems unlock for your business?'}
        </p>

        <form onSubmit={handleSubmit}>

          {phase === 0 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Company Name</label>
                <input name="companyName" required className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Industry</label>
                <select name="industry" required className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }}>
                  <option value="">Select industry…</option>
                  <option value="oilgas">Oil & Gas / Energy</option>
                  <option value="construction">Construction / Civil Works</option>
                  <option value="manufacturing">Manufacturing / Industrial</option>
                  <option value="logistics">Logistics / Supply Chain</option>
                  <option value="healthcare">Healthcare / Medical</option>
                  <option value="finance">Finance / Professional Services</option>
                  <option value="realestate">Real Estate / Property</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Country / Region</label>
                <input name="country" placeholder="UAE, KSA, Kuwait…" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Company Size</label>
                <div className="flex gap-3 flex-wrap">
                  {['1-10','11-50','51-200','201-500','500+'].map(s => (
                    <label key={s} className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: 'var(--text-primary)' }}>
                      <input type="radio" name="sizeGroup" value={s} /> {s}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Annual Revenue</label>
                <div className="flex gap-3 flex-wrap">
                  {['<$1M','$1-5M','$5-20M','$20-100M','$100M+'].map(r => (
                    <label key={r} className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: 'var(--text-primary)' }}>
                      <input type="radio" name="revGroup" value={r} /> {r}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Main Software / Systems Used</label>
                <textarea name="systems" rows={2} placeholder="Excel, SAP, WhatsApp, Procore…" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Avg Employee Cost / Hour (USD)</label>
                <input type="number" name="hrCost" placeholder="e.g. 35" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Employees Affected by Inefficiencies</label>
                <input type="number" name="affectedStaff" placeholder="e.g. 8" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Hours Lost Per Employee / Week</label>
                <input type="number" name="hrsLost" step="0.5" placeholder="e.g. 6" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
            </div>
          )}

          {phase === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Biggest Operational Headache</label>
                <textarea name="biggestPain" rows={3} placeholder="e.g. Site reports take 3 hours to compile manually…" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Pain Areas (select all that apply)</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Manual reporting','Staff coordination','Client communication','Compliance/audits','Invoicing/payments','Data silos','Procurement','Scheduling/dispatch','Document management','Cost overruns','Staff turnover','Customer follow-up'].map(p => (
                    <label key={p} className="flex items-center gap-2 cursor-pointer border rounded px-3 py-2 text-sm" style={{ color: 'var(--text-primary)' }}>
                      <input type="checkbox" name="painAreas" value={p} /> {p}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Avg Rework / Error Event Cost (USD)</label>
                <input type="number" name="reworkCost" placeholder="e.g. 500" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Rework Frequency</label>
                <div className="flex gap-3 flex-wrap">
                  {['Daily','Weekly','Monthly'].map(f => (
                    <label key={f} className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: 'var(--text-primary)' }}>
                      <input type="radio" name="reworkFreq" value={f.toLowerCase()} /> {f}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {phase === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Deals / Contracts Lost or Delayed Per Year</label>
                <input type="number" name="dealsLost" placeholder="e.g. 4" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Average Value of One Lost Deal (USD)</label>
                <input type="number" name="dealValue" placeholder="e.g. 25000" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Compliance / Penalty Costs Per Year (USD)</label>
                <input type="number" name="penaltyCost" placeholder="e.g. 10000" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
            </div>
          )}

          {phase === 3 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>What Would Solving Your #1 Pain Unlock?</label>
                <textarea name="unlocks" rows={3} placeholder="e.g. We could take on 3× more projects without adding headcount…" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-secondary)' }}>Any Previous Attempts to Fix This? What Happened?</label>
                <textarea name="prevAttempts" rows={3} placeholder="e.g. Bought an ERP 2 years ago but staff reverted to Excel…" className="w-full border rounded-lg px-4" style={{ padding: '0.75rem 1rem', background: 'var(--input-bg)', color: 'var(--text-primary)' }} />
              </div>
            </div>
          )}

          <input type="hidden" name="project_id" value={projectId} />

          <div className="flex gap-4 mt-8">
            {phase > 0 && (
              <button type="button" onClick={() => setPhase(p => p - 1)}
                className="px-6 py-3 border rounded-lg cursor-pointer" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                ← Back
              </button>
            )}
            {phase < 3 ? (
              <button type="button" onClick={() => setPhase(p => p + 1)}
                className="px-8 py-3 text-white rounded-lg font-medium cursor-pointer" style={{ background: 'var(--accent-color, #dc2626)' }}>
                Next: {phases[phase + 1]} →
              </button>
            ) : (
              <button type="submit" disabled={isSubmitting}
                className="px-8 py-3 text-white rounded-lg font-medium cursor-pointer disabled:opacity-50" style={{ background: '#16a34a' }}>
                {isSubmitting ? 'Submitting…' : 'Submit Assessment →'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}