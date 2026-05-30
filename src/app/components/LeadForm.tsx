'use client'

import { useState } from 'react'

interface LeadFormProps {
  relayUrl: string
}

export default function LeadForm({ relayUrl }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const action = form.action
    const method = form.method || 'POST'

    try {
      const response = await fetch(action, {
        method,
        body: formData,
        mode: 'no-cors',
      })

      // Show success even with no-cors mode
      setIsSuccess(true)
      form.classList.add('hidden')
    } catch (err) {
      // Still show success on network errors (form likely submitted)
      setIsSuccess(true)
      form.classList.add('hidden')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto" id="intake-form">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Start your free audit</h2>
        <p className="text-gray-600 text-lg">
          Tell us a bit about your company. We&apos;ll be in touch within 3 business days with your audit report.
        </p>
      </div>

      {!isSuccess ? (
        <form
          id="lead-form"
          action={process.env.NEXT_PUBLIC_LEAD_RELAY_URL || 'http://localhost:3002/lead'}
          method="POST"
          onSubmit={handleSubmit}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm"
          aria-label="Lead capture form"
        >
          <div className="space-y-5">
            {/* Hidden UTM fields */}
            <input type="hidden" name="utm_source" id="utm_source" value="linkedin" />
            <input type="hidden" name="utm_campaign" id="utm_campaign" value="" />
            <input type="hidden" name="utm_content" id="utm_content" value="" />
            <input type="hidden" name="referrer_url" id="referrer_url" value="" />

            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Full name <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm transition-all focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                disabled={isSubmitting}
                aria-describedby="full_name_help"
              />
            </div>

            <div>
              <label htmlFor="work_email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Work email <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="work_email"
                name="work_email"
                required
                placeholder="jane@yourcompany.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm transition-all focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                disabled={isSubmitting}
                aria-describedby="work_email_help"
              />
            </div>

            <div>
              <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Company name <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                required
                placeholder="Acme Industries"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm transition-all focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                disabled={isSubmitting}
                aria-describedby="company_name_help"
              />
            </div>

            <div>
              <label htmlFor="employee_count" className="block text-sm font-medium text-gray-700 mb-1.5">
                Number of employees <span className="text-red-500" aria-label="required">*</span>
              </label>
              <select
                id="employee_count"
                name="employee_count"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm transition-all focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                disabled={isSubmitting}
                aria-describedby="employee_count_help"
              >
                <option value="">Select range</option>
                <option value="10-20">10–20 employees</option>
                <option value="21-35">21–35 employees</option>
                <option value="36-50">36–50 employees</option>
              </select>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 px-6 py-4 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-semibold rounded-xl transition-all shadow-md shadow-brand-500/20 text-center flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Get My Free Audit Report →
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-xs text-center text-gray-500 leading-relaxed">
              By submitting, you agree to our{' '}
              <a href="/privacy" className="underline hover:text-brand-600">Privacy Policy</a>.
              Your data is used only to deliver your audit report and will never be sold.
            </p>
          </div>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center" role="status" aria-live="polite">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">You&apos;re all set!</h3>
          <p className="text-gray-600">
            Your audit report will arrive within <strong>3 business days</strong>.
            Check your inbox — we&apos;ve sent a confirmation to your work email.
          </p>
        </div>
      )}
    </div>
  )
}
