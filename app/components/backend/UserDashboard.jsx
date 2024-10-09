import React from 'react';

export default function UserDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-600 text-white p-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:text-teal-300 transition duration-300">Profile</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-teal-300 transition duration-300">Settings</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-teal-300 transition duration-300">Orders</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-teal-300 transition duration-300">Messages</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-teal-300 transition duration-300">Logout</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome User</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700">Profile Overview</h3>
            <p className="mt-2 text-gray-600">View and update your profile information.</p>
            <a href="#" className="mt-4 inline-block text-teal-600 font-semibold hover:underline">Go to Profile</a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700">Orders</h3>
            <p className="mt-2 text-gray-600">Manage your past and current orders.</p>
            <a href="#" className="mt-4 inline-block text-teal-600 font-semibold hover:underline">View Orders</a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700">Messages</h3>
            <p className="mt-2 text-gray-600">Check your messages and notifications.</p>
            <a href="#" className="mt-4 inline-block text-teal-600 font-semibold hover:underline">View Messages</a>
          </div>

          {/* Additional cards can be added here */}
        </div>
      </div>
    </div>
  );
}
