import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items } = useSelector((s) => s.cart)
  const dispatch = useDispatch()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)

  if (!items.length) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-4">Your cart is empty 🛒</p>
        <Link to="/" className="text-indigo-600 underline">Go back to shop</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
              <div>
                <h3 className="font-medium text-sm">{item.title}</h3>
                <p className="text-indigo-600 font-semibold">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={item.quantity}
                onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                className="border p-1 rounded"
              >
                {[1,2,3,4,5,6,7,8,9,10].map((n)=>(
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-semibold">Total: ${total}</p>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(clearCart())}
            className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50"
          >
            Clear Cart
          </button>
          <Link
            to="/checkout"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}
