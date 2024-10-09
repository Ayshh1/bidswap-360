"use client";

import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

export default function SidebarCategories() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        async function fetchCategories() {
            const fetchedCategories = await getData("categories");
            setCategories(fetchedCategories);
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            setSelectedCategory(category);
        }
    }, [searchParams]);

    const handleCategoryClick = async (categoryId) => {
        setSelectedCategory(categoryId);
        router.push(`/?category=${categoryId}`);
        const categoryData = await getData(`categories/${categoryId}`);
        // Here you can handle the fetched data, e.g., update state or pass to a parent component
        console.log(categoryData, "here is selected category data");
    };

    return (
        <div className="sm:col-span-3 sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden hidden shadow-lg">
        <h2 className="bg-cyan-500 py-3 px-6 font-semibold text-white rounded-t-lg dark:bg-cyan-500 justify-center text-center">
           Shop By Category {/*({categories.length}) */}
            </h2>

            
            <div className="py-3 px-4 h-[300px] overflow-y-auto flex flex-col gap-2">
                {categories.map((category, i) => {
                    return (
                        <Link
                            key={i}
                            href={`/?category=${category.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleCategoryClick(category.id);
                            }}
                            className={`flex items-center gap-3 p-2 rounded-md hover:bg-cyan-600 duration-300 transition-all 
                                dark:hover:bg-cyan-300 dark:hover:text-black dark:text-slate-300 ${selectedCategory === category.id ? 'bg-cyan-600 dark:bg-cyan-600' : ''}`}
                        >
                            <Image
                                width={556}
                                height={556}
                                className="w-12 h-12 rounded-full object-cover border border-cyan-400 shadow-sm"
                                src={category.image}
                                alt={category.name}
                            />
                            <span className="text-sm font-medium">{category.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
