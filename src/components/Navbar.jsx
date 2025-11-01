
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import SimpleModal from './SimpleModal'
import AuthLoginForm from './AuthLoginForm'
import AuthRegisterForm from './AuthRegisterForm'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('user') || 'null')
    setUser(u)
  }, [])

  function handleCTA() {
    navigate('/start-selling')
  }

  function handleLogout() {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="w-full bg-pink-400 px-4 py-3 rounded-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className='text-2xl font-bold text-blue-900'>etail.me</Link>
        </div>

        <button
          className='md:hidden text-gray-800'
          aria-label='Toggle menu'
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <ul className={`hidden md:flex items-center gap-6 font-semibold text-gray-800`}> 
          <li><Link to="/about" className='hover:underline'>About</Link></li>
          <li><Link to="/features" className='hover:underline'>Features</Link></li>
          <li><Link to="/pricing" className='hover:underline'>Pricing</Link></li>
        </ul>

        <div className='hidden md:flex items-center gap-4'>
          {!user ? (
            <>
              <button onClick={() => setLoginOpen(true)} className='text-gray-800 font-medium'>Login</button>
              <button onClick={() => setRegisterOpen(true)} className='text-gray-800 font-medium'>Register</button>
            </>
          ) : (
            <div className='flex items-center gap-3'>
              <div className='text-sm text-gray-800'>Hi, {user.storeName || user.email}</div>
              <button onClick={handleLogout} className='text-sm text-red-600'>Logout</button>
            </div>
          )}
          <button
            onClick={handleCTA}
            className='bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition'
          >
            Start selling
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='md:hidden mt-3 px-2 space-y-2'>
          <Link to="/about" className='w-full block text-left py-2 px-3 rounded hover:bg-pink-300'>About</Link>
          <Link to="/features" className='w-full block text-left py-2 px-3 rounded hover:bg-pink-300'>Features</Link>
          <Link to="/pricing" className='w-full block text-left py-2 px-3 rounded hover:bg-pink-300'>Pricing</Link>
          <div className='flex gap-2'>
            {!user ? (
              <>
                <button onClick={() => { setLoginOpen(true); setMenuOpen(false) }} className='flex-1 block text-center py-2 rounded bg-white'>Login</button>
                <button onClick={() => { setRegisterOpen(true); setMenuOpen(false) }} className='flex-1 block text-center py-2 rounded bg-white'>Register</button>
              </>
            ) : (
              <>
                <div className='flex-1 text-center py-2'>{user.storeName || user.email}</div>
                <button onClick={() => { handleLogout(); setMenuOpen(false) }} className='flex-1 block text-center py-2 rounded bg-red-100 text-red-600'>Logout</button>
              </>
            )}
            <button onClick={() => { handleCTA(); setMenuOpen(false) }} className='flex-1 block text-center py-2 rounded bg-blue-900 text-white'>Start selling</button>
          </div>
        </div>
      )}

      {/* Login/Register Modals */}
      {loginOpen && (
        <SimpleModal title="Login" onClose={() => setLoginOpen(false)}>
          <AuthLoginForm onSuccess={() => setLoginOpen(false)} />
        </SimpleModal>
      )}

      {registerOpen && (
        <SimpleModal title="Register" onClose={() => setRegisterOpen(false)}>
          <AuthRegisterForm onSuccess={() => setRegisterOpen(false)} />
        </SimpleModal>
      )}
    </nav>
  );
};

export default Navbar;
