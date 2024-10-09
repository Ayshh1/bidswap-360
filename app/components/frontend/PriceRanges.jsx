"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const PriceRanges = () => {
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const router = useRouter()

    const handlePriceChange = (e) => {
        const { name, value } = e.target
        if (name === 'min') {
            setMinPrice(value)
        } else if (name === 'max') {
            setMaxPrice(value)
        }
    }
    const handleClearFilter = () => {
        setMinPrice('')
        setMaxPrice('')
        router.push(`/`)
    }
    const handlePriceSubmit = () => {
        console.log(minPrice, maxPrice)
        if (minPrice && maxPrice) {
            const encodedMin = encodeURIComponent(minPrice)
            const encodedMax = encodeURIComponent(maxPrice)
            router.push(`/?minprice=${encodedMin}&maxprice=${encodedMax}`)

        } else {
            console.log("set prices properly")
        }
    }

    return (
        <div className="col-span-full mt-4 flex flex-col items-center justify-between rounded-xl shadow-lg bg-white dark:bg-gray-800">
        <div className="bg-cyan-500 p-4 rounded-t-lg w-full text-center">
            <span className="font-semibold justify justify-start text-white dark:text-white">Select the Price Range</span>
        </div>
        <hr className="w-full mb-2 border-gray-300" />
        <div className="flex justify-between w-full p-4">
            <input
                type="number"
                name="min"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => {
                    const value = Math.max(0, parseInt(e.target.value, 10));
                    setMinPrice(value.toString());
                }}
                className="w-24 px-3 py-2 text-black bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
            />
            <input
                type="number"
                name="max"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => {
                    const value = Math.max(0, parseInt(e.target.value, 10));
                    setMaxPrice(value.toString());
                }}
                className="w-24 px-3 py-2 text-black bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
            />
        </div>
        <div className='flex w-full gap-2 px-4 mb-4'>
            <button onClick={handlePriceSubmit} className="mt-4 bg-cyan-500 hover:bg-cyan-700 transition duration-200 text-white font-bold py-2 rounded-lg shadow-md w-full">
                Filter
            </button>
            <button onClick={handleClearFilter} className="mt-4 bg-red-600 hover:bg-red-700 transition duration-200 text-white font-bold py-2 rounded-lg shadow-md w-full">
                Clear Filter
            </button>
        </div>
    </div>
    )
}

export default PriceRanges
