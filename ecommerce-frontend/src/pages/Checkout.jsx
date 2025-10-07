import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../store/slices/cartSlice'
import { Link } from 'react-router-dom'

export default function Checkout() {
  const { items } = useSelector((s) => s.cart)
  const dispatch = useDispatch()

  const [form, setForm] = useState({ name: '', email: '', address: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.address) {
      setError('All fields are required!')
      return
    }
    setError('')
    dispatch(clearCart())
    setSuccess(true)
  }

  if (!items.length && !success) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-600">Your cart is empty 🛒</p>
        <Link to="/" className="text-indigo-600 underline">Go back to shop</Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      {success ? (
        <div className="text-center py-10">
          <p className="text-green-600 text-xl font-semibold mb-4">✅ Order Placed Successfully!</p>
          <Link to="/" className="text-indigo-600 underline">Back to Home</Link>
        </div>
      ) : (
        <>
          {/* Order Summary */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Order Summary</h3>
            <ul className="mb-2">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.title} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-right">Total: ${total}</p>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <textarea
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  )
}
