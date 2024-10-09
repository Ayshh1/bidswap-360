"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import React from 'react'

export default function BreadCrumb() {

  return (
    <div>
      <Breadcrumb className="mb-8" aria-label="Breadcrumb">
        {/* Home Tab */}
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>

        {/* Products Tab */}
        <Breadcrumb.Item href="#">
          Products
        </Breadcrumb.Item>

        {/* Cart Tab - Active with cyan-400 */}
        <Breadcrumb.Item href="#" style={{ color: '#22d3ee' }}>
          Cart
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
