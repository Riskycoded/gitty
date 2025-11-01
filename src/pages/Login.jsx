import React from 'react'
import AuthLoginForm from '../components/AuthLoginForm'

export default function Login() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="bg-white p-4 rounded shadow-sm">
        <AuthLoginForm />
      </div>
    </div>
  )
}
