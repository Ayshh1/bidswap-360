"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function UpdateUser() {
  const [email, setEmail] = useState();
  const [notify, setNotify] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const { data: session } = useSession();
  const id = session?.user?.id;
  const userId = id;

  async function onSubmitPassword() {
    if (session.user.email === email) {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await fetch(`${baseUrl}/api/users/update-password`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, password }),
        });
        if (response.ok) {
          setNotify("Password updated successfully");
          toast.success("Password updated successfully", { duration: 5000 });
        } else {
          toast.error("Something Went wrong");
        }
      } catch (error) {
        console.error("Network Error:", error);
        toast.error("It seems something is wrong with your Network");
      }
    } else {
      toast.error("Provide the user email");
    }
  }

  async function updateUserProfile() {
    try {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, dateOfBirth, address, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error updating profile');
      }

      setNotify("Profile updated successfully");
      toast.success("Profile updated successfully", { duration: 5000 });
      return data.data; // Updated profile data
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-teal-800 p-4">
      <h1 className="text-white text-2xl mb-6 text-center">Welcome back!</h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Password Reset Card */}
        <div className="w-full md:w-1/3 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-6 border-b border-white border-opacity-20">
            <h2 className="text-xl font-semibold text-white">Reset Password</h2>
            <p className="text-sm text-gray-300">Enter your email to reset your password</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                <p className="text-red-500 text-sm mt-1">Invalid email address.</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">New Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="p-4 bg-white bg-opacity-5">
            <button
              onClick={onSubmitPassword}
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-300 ease-in-out">
              Update Password
            </button>
          </div>
          {notify && <div className="p-4 text-green-400 font-bold">{notify}</div>}
        </div>

        {/* Update User Information Card */}
        <div className="w-full md:w-1/3 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-6 border-b border-white border-opacity-20">
            <h2 className="text-xl font-semibold text-white">Update User Information</h2>
            <p className="text-sm text-gray-300">Update your profile details</p>
          </div>
          <div className="p-6">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-300 mb-1">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
                  placeholder="Enter your address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="p-4 bg-white bg-opacity-5">
            <button
              onClick={updateUserProfile}
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600  focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-300 ease-in-out">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
