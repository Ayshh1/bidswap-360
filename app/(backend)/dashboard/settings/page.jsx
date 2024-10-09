'use client';
import { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('system'); // Default to System Configs

  const renderContent = () => {
    switch (activeTab) {
      case 'system':
        return <SystemConfig />;
      case 'payment':
        return <PaymentGateways />;
      case 'other':
        return <OtherConfig />;
      default:
        return <SystemConfig />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg p-8 mt-10">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Settings</h2>

        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 text-lg ${
              activeTab === 'system' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('system')}
          >
            System Config
          </button>
          <button
            className={`px-6 py-2 text-lg ${
              activeTab === 'payment' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('payment')}
          >
            Payment Gateways
          </button>
          <button
            className={`px-6 py-2 text-lg ${
              activeTab === 'other' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('other')}
          >
            Other Configs
          </button>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
}

// System Config Component
const SystemConfig = () => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-4">System Configuration</h3>
    <div className="mb-5">
      <label className="block text-gray-300 mb-2">Theme</label>
      <select className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg">
        <option>Light</option>
        <option>Dark</option>
        <option>Auto</option>
      </select>
    </div>
    <div className="mb-5">
      <label className="block text-gray-300 mb-2">Language</label>
      <select className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg">
        <option>English</option>
        <option>French</option>
        <option>German</option>
      </select>
    </div>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">
      Save System Config
    </button>
  </div>
);

// Payment Gateways Component
const PaymentGateways = () => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-4">Payment Gateway Configuration</h3>
    <div className="mb-5">
      <label className="block text-gray-300 mb-2">PayPal Client ID</label>
      <input
        type="text"
        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
        placeholder="Enter PayPal Client ID"
      />
    </div>
    <div className="mb-5">
      <label className="block text-gray-300 mb-2">Stripe API Key</label>
      <input
        type="text"
        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
        placeholder="Enter Stripe API Key"
      />
    </div>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">
      Save Payment Config
    </button>
  </div>
);

// Other Configs Component
const OtherConfig = () => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-4">Other Configuration</h3>
    <div className="mb-5">
      <label className="block text-gray-300 mb-2">API Key</label>
      <input
        type="text"
        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
        placeholder="Enter API Key"
      />
    </div>
    <div className="mb-5">
      <label className="block text-gray-300 mb-2">Enable Notifications</label>
      <input
        type="checkbox"
        className="form-checkbox text-blue-500"
      />
    </div>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">
      Save Other Configs
    </button>
  </div>
);
