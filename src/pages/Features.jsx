import React from 'react'

const featureList = [
  { title: 'Quick setup', desc: 'Create your store and add products in minutes with guided setup.' },
  { title: 'Product management', desc: 'Manage inventory, pricing, and images with a simple UI.' },
  { title: 'Payments & Orders', desc: 'Connect payment providers and manage orders in one place.' },
  { title: 'Responsive templates', desc: 'Beautiful storefronts that look great on mobile and desktop.' },
  { title: 'Analytics', desc: 'Track views, sales, and customer behavior with built-in analytics.' },
]

export default function Features() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold mb-6">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featureList.map(f => (
          <div key={f.title} className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-600 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-gray-700">
        <p>We focused on the core needs of small sellers: speed, reliability, and beautiful presentation. Everything is built with extensibility in mind so you can grow when you’re ready.</p>
      </div>
    </div>
  )
}
