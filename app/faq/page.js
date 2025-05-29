'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is Farm Pass?',
    answer: `Farm Pass is a seasonal membership that gives families unlimited access
    to local Long Island farms with playgrounds, petting zoos, hayrides, and more—
    all for one upfront price.`,
  },
  {
    question: 'How much does it cost?',
    answer: `Pricing depends on the pass you choose:
    • Single-Farm Pass (one location): around $60/year  
    • All-Farm Pass (all participating farms): around $150/year  
    One-time tickets ($20-$30) will also be available for purchase.`,
  },
  {
    question: 'What if a farm is unexpectedly closed?',
    answer: `Farm schedules are updated daily. If one farm is closed, you can
    simply visit another open farm with your pass. We’ll also send push or email
    alerts for any last-minute closures.`,
  },
  {
    question: 'Can I bring guests or extra children?',
    answer: `Guest and age policies vary by farm. Many farms allow you to purchase
    additional guest passes at the gate or via Farm Pass. Children under 2 are
    typically free—check each farm’s details in the app.`,
  },
  {
    question: 'Is my pass refundable or transferable?',
    answer: `All sales are final for the season. However, if you move out of Suffolk
    County or experience a medical emergency, please contact us at
    support@farmpass.com to discuss options.`,
  },
  {
    question: 'How do I sign up my farm?',
    answer: `Visit our “For Farms” page, fill out the contact form, and our team will
    reach out with onboarding details—no upfront cost required to list.`,
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) =>
    setOpenIdx(openIdx === i ? null : i)

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="divide-y">
        {faqs.map((faq, i) => (
          <div key={i} className="py-4">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-xl font-medium text-gray-800">{faq.question}</span>
              <svg
                className={`w-6 h-6 text-gray-600 transform transition-transform ${
                  openIdx === i ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === i && (
              <p className="mt-2 text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
