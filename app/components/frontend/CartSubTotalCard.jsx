import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updatecheckoutFormData } from '@/redux/slices/checkoutSlice'

export default function CartSubTotalCard({subTotal}) {
  const dispatch = useDispatch()
  const shipping = 10;
  const tax = 0;
  const totalPrice = (Number(subTotal) + Number(shipping) + Number(tax)).toFixed(2);

  const handleCheckout = () => {
    dispatch(updatecheckoutFormData({
      subTotal,
      shipping,
      tax,
      totalPrice
    }))
  }

  return (
    <div className="md:col-span-4 sm:block col-span-full bg-white border border-gray-300 rounded-lg 
    dark:bg-gray-700 dark:border-gray-700 text-slate-800 p-5 dark:text-slate-100 font-bold 
    max-w-sm mx-auto">
    <h2 className="text-2xl pb-3 font-bold">Cart Total</h2>
    
    <div className="flex items-center justify-between border-b border-slate-500 pb-6">
      <span>Subtotal</span>
      <span>{subTotal}</span>
    </div>
  
    <div className="flex items-center justify-between pb-4 mt-2">
      <span>Tax</span>
      <span>{tax}</span>
    </div>
  
    <div className="flex items-center justify-between pb-4">
      <span>Delivery Charges</span>
      <span>{shipping}</span>
    </div>
  
    <p className="border-b border-slate-500 pb-6 text-slate-400 font-normal">
      We only charge for shipping when you have over 2kg items
    </p>
  
    <div className="flex items-center justify-between py-4 font-bold">
      <span>Total</span>
      <span>{totalPrice}</span>
    </div>
  
    <div className="mt-8 flex justify-center">
      <Link href='/checkout' onClick={handleCheckout}
        className="text-white bg-cyan-400 hover:bg-cyan-500 rounded-lg py-3 px-6 font-normal
          transition-all duration-300 ease-in-out dark:bg-cyan-500 dark:hover:bg-cyan-600">
        Continue to Checkout
      </Link>
    </div>
  </div>
  )
}
