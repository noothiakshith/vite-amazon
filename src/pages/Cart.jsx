import React from 'react'
import useStore from '../store/store'

function Cart() {
  const cart = useStore((state) => state.cart)
  const remove = useStore((state) => state.removefromcart)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 😕</p>
      ) : (
        cart.map((item) => (
          <ul key={item.id} className="mb-4">
            <li className="border rounded p-4 shadow flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-700">₹{item.price}</p>
              <button
                onClick={() => remove(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded w-fit hover:bg-red-600"
              >
                Remove from Cart
              </button>
            </li>
          </ul>
        ))
      )}
    </div>
  )
}

export default Cart
