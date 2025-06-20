import React from 'react'
import usestore from '../store/store'

function ProductCard({ item }) {
  const addtocart = usestore((state) => state.addtocart)
  const addtowish = usestore((state) => state.addtowishlist)

  return (
    <div className="border rounded-xl p-4 shadow-lg flex flex-col items-center">
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-32 object-contain mb-2"
      />
      <h1 className="text-lg font-semibold text-center">{item.title}</h1>
      <p className="text-gray-700 mb-3">₹{item.price}</p>
      <div className="flex gap-2">
        <button
          onClick={() => addtocart(item)}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addtowish(item)}
          className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  )
}

export default ProductCard
