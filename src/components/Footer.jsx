import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-50 border-t pt-6 pb-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">&copy; {new Date().getFullYear()} etail.me — Built for small businesses.</div>
        <div className="flex items-center gap-4">
          <a href="/about" className="text-sm text-gray-700 hover:underline">About</a>
          <a href="/pricing" className="text-sm text-gray-700 hover:underline">Pricing</a>
          <a href="mailto:support@etail.me" className="text-sm text-gray-700 hover:underline">Support</a>
        </div>
      </div>
    </footer>
  )
}
