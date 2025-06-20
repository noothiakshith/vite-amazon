import React from 'react'
import useStore from '../store/store'

function WishList() {
  const wishlist = useStore((state) => state.wishlist)
  const removewishlist = useStore((state) => state.removewishlist)
  const addtocart = useStore((state) => state.addtocart)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">💖 Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty 💔</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="border rounded p-4 shadow mb-4 flex flex-col gap-2"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-700">₹{item.price}</p>

            <div className="flex gap-2">
              <button
                onClick={() => removewishlist(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>

              <button
                onClick={() => {
                  addtocart(item)
                  removewishlist(item.id)
                }}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Move to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default WishList
