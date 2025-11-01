import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthRegisterForm({ onSuccess }) {
  const [storeName, setStoreName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!storeName || !email || !password) return setError('Complete all fields')

    localStorage.setItem('registeredUser', JSON.stringify({ storeName, email, password }))
    localStorage.setItem('user', JSON.stringify({ email, storeName }))
    if (onSuccess) onSuccess()
    else navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && <div className="text-sm text-red-600">{error}</div>}
      <label className="block">
        <span className="text-sm text-gray-600">Store name</span>
        <input value={storeName} onChange={(e)=>setStoreName(e.target.value)} type="text" className="mt-1 block w-full border rounded px-2 py-1" />
      </label>
      <label className="block">
        <span className="text-sm text-gray-600">Email</span>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-1 block w-full border rounded px-2 py-1" />
      </label>
      <label className="block">
        <span className="text-sm text-gray-600">Password</span>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="mt-1 block w-full border rounded px-2 py-1" />
      </label>
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Register</button>
      </div>
    </form>
  )
}
