import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-3 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto mb-3"
        />
        <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-indigo-600 font-semibold text-lg">${product.price}</p>
      </Link>
    </div>
  )
}
