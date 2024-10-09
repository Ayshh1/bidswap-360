import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'

export default function CategoryList({category}) {
  // console.log(category, "category to find servicetype")
  let updatedProducts;
  if( category.serviceType){
    if(category.expiresAt){
    updatedProducts = category.products.map(product => ({
      ...product, // Spread existing product properties
      expiresAt: category.expiresAt, // Add the expiresAt field from category
      serviceType: category.serviceType, // Add the expiresAt field from category
      saleprice: category.salePrice, // Add the expiresAt field from category
    }));
    }else if(category.productExchange){
      updatedProducts = category.products.map(product => ({
        ...product, // Spread existing product properties
        productExchange: category.productExchange, // Add the expiresAt field from category
        serviceType: category.serviceType, // Add the expiresAt field from category
        saleprice: category.salePrice, // Add the expiresAt field from category
      }));
      
      // productExchange
    }
    else{
      updatedProducts = category.products.map(product => ({
        ...product, // Spread existing product properties
        // expiresAt: category.expiresAt, // Add the expiresAt field from category
        serviceType: category.serviceType, // Add the expiresAt field from category
        saleprice: category.salePrice, // Add the expiresAt field from category
      }));

    }
  } 
  // console.log(updatedProducts,"updated category data")
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden">
    <div className="bg-gray-100 py-3 px-6 font-semibold border-b border-gray-300 dark:bg-gray-900 text-slate-800 dark:text-slate-100 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{category.name}</h2>
        {/* <Link href="/" className="bg-gray-600 dark:bg-gray-600 text-slate-50 rounded-md px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800  transition-all duration-300">
            See All
        </Link> */}
    </div>
    <div className="bg-white dark:bg-gray-800 p-5 rounded-b-lg">
      {updatedProducts ?(
          <CategoryCarousel products={updatedProducts} /> 

      ):
      (

          <CategoryCarousel products={category.products} /> 
      )

      }
        </div>

      
    </div>
  )
}
