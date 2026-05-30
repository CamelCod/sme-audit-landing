import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SME AI Opportunity Audit | Find Your Cash Leakage',
  description: 'A 2-week operational audit that maps your workflows, quantifies cash leakage, and prescribes AI automation with payback under 10 months. Free for qualifying SMEs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}