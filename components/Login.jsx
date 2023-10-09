import React from 'react'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <div className="relative">
            <label htmlFor="email" className="text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md p-3 focus:ring focus:ring-blue-200"
              placeholder="Your email"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md p-3 focus:ring focus:ring-blue-200"
              placeholder="Your password"
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  )
}
