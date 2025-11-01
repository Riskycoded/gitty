import React from 'react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-4xl font-extrabold">About etail.me</h2>

      <p className="text-lg text-gray-700">etail.me helps small businesses create a beautiful online storefront in minutes. We focus on simplicity, fast setup, and powerful selling features so you can spend less time managing tech and more time growing your business.</p>

      <section>
        <h3 className="text-2xl font-semibold">Our mission</h3>
        <p className="text-gray-600">Make commerce accessible to every creator and small business by providing affordable, easy-to-use tools for selling online.</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">What we offer</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Fast store setup with templates and intuitive product management</li>
          <li>Payment integration and order management</li>
          <li>Responsive store front that works on mobile and desktop</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">The team</h3>
        <p className="text-gray-600">We are a small team of designers and engineers passionate about building tools that help businesses thrive online.</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Contact</h3>
        <p className="text-gray-600">Questions? Email <a href="mailto:support@etail.me" className="text-blue-700 hover:underline">support@etail.me</a></p>
      </section>
    </div>
  )
}
