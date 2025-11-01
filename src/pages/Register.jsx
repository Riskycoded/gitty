import React from 'react'
import AuthRegisterForm from '../components/AuthRegisterForm'

export default function Register() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="bg-white p-4 rounded shadow-sm">
        <AuthRegisterForm />
      </div>
    </div>
  )
}

