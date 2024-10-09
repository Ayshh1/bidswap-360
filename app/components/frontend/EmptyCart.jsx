import Link from 'next/link'
import React from 'react'

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
    <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 md:p-10 max-w-md text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
        Your Cart is Empty
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        It looks like you haven't added anything to your cart yet. 
        Browse our collection and find what you love!
      </p>
      <Link 
        href="/" 
        className="bg-cyan-400 text-white font-semibold rounded-lg py-3 px-6 hover:bg-cyan-500 transition-all duration-300">
        Start Shopping
      </Link>
    </div>
  </div>
  )
}
