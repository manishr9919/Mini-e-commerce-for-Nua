import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  )

  return (
    <nav className="bg-blue-200 shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold text-indigo-600">MiniStore</Link>
        <div className="flex gap-8">
          <Link to="/" className="hover:text-indigo-600 text-3xl">Home</Link>
          <Link to="/cart" className="hover:text-indigo-600 text-3xl text-3xl">
            Cart ({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  )
}
