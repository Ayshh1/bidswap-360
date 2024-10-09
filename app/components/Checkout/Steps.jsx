"use client";
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Steps({ steps }) {
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const cartItems = useSelector((store) => store.cart);

  return (
    <nav className="flex text-sm md:text-xl mb-8">
      <ol
        role="list"
        className="flex flex-wrap gap-y-5 md:gap-y-0 items-center gap-x-1.5"
      >
        <li>
          <div className="-m-1">
            <Link
              href="/cart"
              className="inline-flex items-center p-2 md:p-1 text-gray-500 rounded-md font-medium 
              hover:text-gray-700 dark:hover:text-cyan-500 focus:outline-none 
              focus:ring-2 focus:ring-gray-900"
            >
              Cart
              <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-bold
              bg-cyan-400 rounded-full text-gray-50">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </li>

        {steps.map((step, i) => (
          <li key={i}>
            <div className="flex items-center">
              <ChevronRight className="flex-shrink-0 w-4 h-4 text-gray-400" />
              <div className="-m-1">
                <p
                  className={`p-2 ml-1.5 font-medium rounded-md transition-colors duration-200 
                  ${step.number === currentStep ? "text-cyan-400" : "text-gray-500 hover:text-gray-700 dark:hover:text-cyan-500"}`}
                >
                  {step.title}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
