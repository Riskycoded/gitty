import React, { useEffect, useState } from 'react'

export default function StartSelling() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('products') || '[]')
    setProducts(saved)
  }, [])

  function handleAdd(e) {
    e.preventDefault()
    if (!name || !price) return
    const next = [...products, { id: Date.now(), name, price }]
    setProducts(next)
    localStorage.setItem('products', JSON.stringify(next))
    setName('')
    setPrice('')
  }

  function handleDelete(id) {
    const next = products.filter(p => p.id !== id)
    setProducts(next)
    localStorage.setItem('products', JSON.stringify(next))
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Start Selling</h2>
      <p className="text-gray-700 mb-4">Create your first product and start selling in minutes.</p>

      <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow-sm mb-6">
        <label className="block mb-2">
          <span className="text-sm text-gray-600">Product name</span>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 block w-full border rounded px-2 py-1" />
        </label>
        <label className="block mb-2">
          <span className="text-sm text-gray-600">Price</span>
          <input value={price} onChange={(e)=>setPrice(e.target.value)} className="mt-1 block w-full border rounded px-2 py-1" />
        </label>
        <div className="flex justify-end">
          <button className="bg-blue-900 text-white px-4 py-2 rounded">Create product</button>
        </div>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-3">Your products</h3>
        {products.length === 0 && <div className="text-gray-600">No products yet.</div>}
        <ul className="space-y-2">
          {products.map(p => (
            <li key={p.id} className="p-3 border rounded flex items-center justify-between">
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-gray-600">{p.price}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => navigator.clipboard?.writeText(p.id.toString()) } className="text-sm text-gray-600">Copy id</button>
                <button onClick={() => handleDelete(p.id)} className="text-sm text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
