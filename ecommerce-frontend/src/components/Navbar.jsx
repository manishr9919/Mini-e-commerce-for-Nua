
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const { items } = useSelector((s) => s.cart)
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">Mini E-Shop</Link>
      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({count})</Link>
      </div>
    </nav>
  )
}
