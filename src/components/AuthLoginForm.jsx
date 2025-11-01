import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthLoginForm({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!email || !password) return setError('Provide email and password')

    const registered = JSON.parse(localStorage.getItem('registeredUser') || 'null')
    if (!registered || registered.email !== email || registered.password !== password) {
      return setError('Invalid credentials')
    }

    localStorage.setItem('user', JSON.stringify({ email, storeName: registered.storeName }))
    if (onSuccess) onSuccess()
    else navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && <div className="text-sm text-red-600">{error}</div>}
      <label className="block">
        <span className="text-sm text-gray-600">Email</span>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-1 block w-full border rounded px-2 py-1" />
      </label>
      <label className="block">
        <span className="text-sm text-gray-600">Password</span>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="mt-1 block w-full border rounded px-2 py-1" />
      </label>
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Login</button>
      </div>
    </form>
  )
}
