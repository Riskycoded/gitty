import React, { useState } from 'react'

// Small inline chart component: simple bar chart derived from change percent
function MiniChart({ change, seed = 1 }) {
  // derive a numeric base from the change string (e.g. '-1.23%')
  const num = Number(String(change).replace('%', '').replace('+', '')) || 0
  // create a deterministic small dataset using seed
  const values = Array.from({ length: 6 }).map((_, i) => {
    // vary by seed and index, then scale by num
    const base = Math.abs(num) + (seed * (i + 1)) % 5
    // normalize to 8..28 range for bar height
    return 8 + (base % 21)
  })

  return (
    <svg width="80" height="28" viewBox="0 0 80 28" xmlns="http://www.w3.org/2000/svg" className="inline-block">
      {values.map((v, i) => {
        const x = i * 12
        const y = 28 - v
        const color = change && String(change).startsWith('-') ? '#ef4444' : '#10b981'
        return <rect key={i} x={x} y={y} width="8" height={v} rx="1" fill={color} />
      })}
    </svg>
  )
}

export const Table = () => {
  const initial = [
    { id: 1, symbol: 'BTC', name: 'Bitcoin', price: '$39,019.24', change: '-0.98%', icon: 'https://via.placeholder.com/30' },
    { id: 2, symbol: 'ETH', name: 'Ethereum', price: '$2,867.08', change: '-4.17%', icon: 'https://via.placeholder.com/30' },
    { id: 3, symbol: 'BCH', name: 'Bitcoin Cash', price: '$554.74', change: '-2.53%', icon: 'https://via.placeholder.com/30' },
  ]

  const [rows, setRows] = useState(initial)

  function handleBuy(row) {
    const amount = prompt(`Enter amount to buy of ${row.symbol}:`, '0.1')
    if (!amount) return
    alert(`Bought ${amount} ${row.symbol} at ${row.price}`)
  }

  function handleDelete(id) {
    if (!confirm('Are you sure you want to remove this item?')) return
    setRows(rows.filter(r => r.id !== id))
  }

  function handleEdit(id) {
    const newPrice = prompt('Enter new price (e.g. $1000):')
    if (!newPrice) return
    setRows(rows.map(r => (r.id === id ? { ...r, price: newPrice } : r)))
  }

  return (
    <div className='overflow-x-auto bg-white rounded-md shadow-sm p-4'>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">#</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Change</th>
            <th className="py-2">Chart</th>
            <th className="py-2">Trade</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className='border-b hover:bg-gray-50'>
              <td className="py-3">{row.id}</td>
              <td className="py-3 flex items-center gap-3">
                {/* small icon (optional) */}
                <div className='w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-xs text-gray-600'>
                  {row.symbol}
                </div>
                <div>
                  <div className='font-semibold'>{row.name}</div>
                  <div className='text-sm text-gray-500'>{row.symbol}</div>
                </div>
              </td>
              <td className="py-3">{row.price}</td>
              <td className={`py-3 ${row.change.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>{row.change}</td>
              <td className="py-3"><MiniChart change={row.change} seed={row.id} /></td>
              <td className="py-3 flex gap-2">
                <button onClick={() => handleBuy(row)} className='bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500'>Buy</button>
                <button onClick={() => handleEdit(row.id)} className='bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-300'>Edit</button>
                <button onClick={() => handleDelete(row.id)} className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

