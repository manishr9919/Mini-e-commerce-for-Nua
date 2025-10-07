import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import api from '../services/api'
import { addToCart } from '../store/slices/cartSlice'

export default function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const cached = localStorage.getItem(`product_${id}`)
        if (cached) {
          setProduct(JSON.parse(cached))
        } else {
          const res = await api.get(`/products/${id}`)
          localStorage.setItem(`product_${id}`, JSON.stringify(res.data))
          setProduct(res.data)
        }
      } catch (err) {
        setError('Failed to load product details.')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
    alert('Item added to cart ✅')
  }

  if (loading) return <div className="text-center mt-10 text-gray-500">Loading...</div>
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>
  if (!product) return null

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img src={product.image} alt={product.title} className="h-72 object-contain" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-500 mb-3 capitalize">Category: {product.category}</p>
          <p className="text-indigo-600 font-bold text-2xl mb-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-yellow-500 mb-4">⭐ {product.rating?.rate} ({product.rating?.count} reviews)</p>

          <div className="flex items-center gap-3 mb-6">
            <label htmlFor="qty" className="font-medium">Qty:</label>
            <select
              id="qty"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border p-1 rounded"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
