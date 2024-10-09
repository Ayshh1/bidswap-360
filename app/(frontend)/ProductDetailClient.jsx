"use client"; // Client Component

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import toast from 'react-hot-toast';
import { BaggageClaim, Minus, Plus, Share2, Tag } from 'lucide-react';
import Image from 'next/image';
import BreadCrumb from '@/app/components/frontend/BreadCrumb';

export default function ProductDetailClient({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success("Item added successfully");
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-12 gap-8">
        {/* Product Image */}
        <div className="col-span-3">
          <img src={product.image} alt={product.name} width={556} height={556} className="w-full" />
        </div>
        {/* Product Details */}
        <div className="col-span-6">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-xl lg:text-3xl font-semibold">{product.name}</h2>
    <button><Share2 /></button>
  </div>
  <div className="border-b border-gray-500">
    <p className="py-2">{product.description}</p>
    <div className="flex items-center gap-8 mb-4">
      <p>{product.sku}</p>
      <p className={`py-1.5 px-4 rounded-full ${product.isActive ? 'bg-lime-200 text-slate-900' : 'bg-red-200 text-slate-900'}`}>
        <b>Availability:</b> {product.isActive ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  </div>
          {/* Price Section */}
          <div className="flex items-center gap-4 justify-between pt-4 border-b border-gray-500 pb-4">
            <div className="flex items-center gap-4">
              <h4 className="text-2xl">${product.saleprice}</h4>
              {product.originalprice && (
                <del className="text-slate-500 text-sm">${product.originalprice}</del>
              )}
            </div>
            <p className="flex items-center">
              <Tag className="w-5 h-5 text-slate-400 me-2" />
              <span>Save 50% right now</span>
            </p>
          </div>
          {/* Quantity and Add to Cart */}
          <div className="flex justify-between items-center py-6">
            <div className="rounded-xl border border-gray-400 flex items-center gap-3">
              <button onClick={() => handleQuantityChange(-1)} className="border-r border-gray-400 py-2 px-4">
                <Minus />
              </button>
              <p className="flex-grow py-2 px-4">{quantity}</p>
              <button onClick={() => handleQuantityChange(1)} className="border-l border-gray-400 py-2 px-4">
                <Plus />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-2 bg-cyan-600 px-4 py-2 rounded-md text-white"
            >
              <BaggageClaim />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
