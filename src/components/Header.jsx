import React, { useState, useEffect } from 'react'
import HeaderImage from "../assets/header.jpeg"

const Header = () => {
  const [storeName, setStoreName] = useState('')
  const [currentUser, setCurrentUser] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!storeName.trim()) {
      alert('Please enter a store name')
      return
    }
    // placeholder: wire to API or parent handler
    alert(`Store registered: ${storeName}`)
    setStoreName('')
  }

  useEffect(() => {
    try {
      const u = JSON.parse(localStorage.getItem('user') || 'null')
      setCurrentUser(u)
    } catch {
      setCurrentUser(null)
    }
  }, [])

  return (
    <header className='flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-lg shadow-sm'>
      <div className='flex-1'>
        {currentUser && (
          <div className="mb-2 text-sm text-gray-700">Welcome, <span className="font-semibold">{currentUser.storeName || currentUser.email}</span> 👋</div>
        )}
        <h1 className='text-left font-extrabold text-3xl md:text-4xl text-gray-900'>Register your store name now!</h1>
        <p className='text-left mt-3 text-gray-600 max-w-xl'>With etail.me, anyone can earn their first dollar online. Just start with what you know — it's that easy.</p>

        <form onSubmit={handleSubmit} className='mt-6 flex items-center gap-3'>
          <label htmlFor='storeName' className='text-gray-700 font-semibold'>My store</label>
          <input
            id='storeName'
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            type='text'
            placeholder='Enter your store name'
            className='border-2 border-gray-200 focus:ring-2 focus:ring-blue-300 rounded-full px-4 py-2 w-48 md:w-64 transition'
          />

          <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition'>
            Register
          </button>
        </form>
      </div>

      <div className='flex-1 flex justify-center md:justify-end'>
        <img src={HeaderImage} alt='store illustration' className='max-w-xs md:max-w-md w-full h-auto object-cover rounded-md shadow-md' />
      </div>
    </header>
  )
}

export default Header