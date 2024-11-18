import React from 'react';
import { useLocation } from 'wouter';

const NewsletterSuccess = () => {
  const [, navigate] = useLocation();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleWaitlistClick = () => {
    navigate('/waitlist');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6 text-center">
      <svg width="64px" height="64px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#4CAF50"></path><path d="M738.133333 311.466667L448 601.6l-119.466667-119.466667-59.733333 59.733334 179.2 179.2 349.866667-349.866667z" fill="#CCFF90"></path></g></svg>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        You're on the Waitlist!
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-md">
        Thank you for joining the waitlist for the upcoming batch. We’ll notify you as soon as the new batch is available. Stay tuned for updates!
      </p>
      {/* <p className="text-lg text-gray-600 mb-6">
        In the meantime, if you have any questions, feel free to reach us at:
        <br />
        WhatsApp: <a href="tel:+918438031453" className="text-blue-500">+918438031453</a>
        <br />
        Email: <a href="mailto:support@neechal.com" className="text-blue-500">support@neechal.com</a>
      </p> */}
      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          onClick={handleHomeClick}
        >
          Go to Homepage
        </button>
        
      </div>
    </div>
  );
};

export default NewsletterSuccess;
