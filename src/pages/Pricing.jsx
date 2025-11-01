import React from 'react'

const plans = [
  { id: 'basic', name: 'Basic', price: 'Free', bullets: ['1 store', 'Limited products', 'Community support'] },
  { id: 'pro', name: 'Pro', price: '$9 / mo', bullets: ['Unlimited products', 'Custom domain', 'Email support'] },
  { id: 'business', name: 'Business', price: '$29 / mo', bullets: ['Priority support', 'Advanced analytics', 'Wholesale pricing'] },
]

export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold mb-6">Pricing</h2>
      <p className="text-gray-700 mb-6">Simple pricing that scales with your business. Start free and upgrade when you need more features.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div key={p.id} className="border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-xl font-semibold">{p.name}</div>
            <div className="text-3xl font-bold my-4">{p.price}</div>
            <ul className="text-gray-600 mb-4 space-y-1">
              {p.bullets.map(b => <li key={b}>• {b}</li>)}
            </ul>
            <button className="bg-blue-900 text-white px-4 py-2 rounded">Choose {p.name}</button>
          </div>
        ))}
      </div>
    </div>
  )
}
