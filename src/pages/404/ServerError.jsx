import React from 'react'
import { useLocation } from 'wouter'

const NotFound = () => {
  const [, navigate] = useLocation()

  const handleGoHome = () => {
    navigate('/') 
  }

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">500</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Server Error</p>
        <p className="mt-4 text-gray-500">Oops! Something went wrong on our end.</p>
        <p className='text-gray-500'>Please try again later.</p>
        <button
          onClick={handleGoHome}
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
