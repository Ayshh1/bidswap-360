import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

export default function NavButtons() {
    const currentStep = useSelector ((store) => store.checkout.currentStep);
    
  return (
    <div className='flex items-center justify-between'>
        {currentStep>1 && (
            <button 
            type="button"
            className='inline-flex items-center px-6 py-3 mt-4 sm:mt-6
            text-sm font-medium text-center text-white  bg-slate-900 rounded-lg focus:ring-4
            focus:ring-cyan-400 dark:focus:ring-cyan-600 hover:bg-slate-800 dark:bg-cyan-400 
            dark:hover:bg-cyan-600'>
                <ChevronLeft className='w-5 h-5 mr-2'/>
                <span>Previous</span>

            </button>
        )}
         <button 
            type="submit"
            className='inline-flex items-center px-6 py-3 mt-4 sm:mt-6
            text-sm font-medium text-center text-white  bg-slate-900 rounded-lg focus:ring-4
            focus:ring-cyan-400 dark:focus:ring-cyan-600 hover:bg-slate-800 dark:bg-cyan-400 
            dark:hover:bg-cyan-600'>
               
                <span>Next</span>
                <ChevronRight className='w-5 h-5 ml-2'/>

            </button>
      
    </div>
  )
}
