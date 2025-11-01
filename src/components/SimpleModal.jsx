import React from 'react'

export default function SimpleModal({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose} />
      <div className="relative bg-white rounded shadow-lg max-w-md w-full p-4 z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="text-gray-600">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
