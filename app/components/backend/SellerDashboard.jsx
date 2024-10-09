'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 2000 },
  { month: 'Apr', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'Jun', sales: 2390 },
  { month: 'Jul', sales: 3490 },
  { month: 'Aug', sales: 4300 },
];

const productData = [
  { product: 'Product A', sales: 400 },
  { product: 'Product B', sales: 300 },
  { product: 'Product C', sales: 200 },
  { product: 'Product D', sales: 278 },
  { product: 'Product E', sales: 189 },
];

export default function SellerDashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Seller Dashboard</h1>
        <p>Welcome to your seller dashboard, manage your sales, orders, and more</p>
      </header>

      <section className="dashboard-summary">
        <div className="summary-box">
          <h3>Total Sales</h3>
          <p>$23,980</p>
        </div>
        <div className="summary-box1">
          <h3>Products Sold</h3>
          <p>450</p>
        </div>
        <div className="summary-box2">
          <h3>Pending Orders</h3>
          <p>10</p>
        </div>
      </section>

      <section className="dashboard-charts">
        <div className="chart">
          <h3>Sales Over Time</h3>
          <LineChart
            width={500}
            height={300}
            data={salesData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </div>

        <div className="chart">
          <h3>Top Selling Products</h3>
          <BarChart width={500} height={300} data={productData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#82ca9d" />
          </BarChart>
        </div>
      </section>

      <style jsx>{`
        .dashboard {
          padding: 20px;
        }
        .dashboard-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .dashboard-title {
          font-size: 32px;
          color: #FEFAE0;
        }
        .dashboard-summary {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
        }
        .summary-box {
          background-color: #387478;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          width: 30%;
        }
         .summary-box1 {
          background-color: #7A1CAC;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          width: 30%;
        }
         .summary-box2 {
          background-color: #028391;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          width: 30%;
        }
        .dashboard-charts {
          display: flex;
          justify-content: space-between;
        }
        .chart {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
