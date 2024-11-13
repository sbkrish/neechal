import React, { useState } from "react";
import validator from "validator";
import DOMPurify from "dompurify";
import { useLocation } from "wouter";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});

  const isValidEmail = validator.isEmail(formData.email);
  const [, navigate] = useLocation();
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!isValidEmail && formData.email)
      newErrors.email = "Email address is Invalid";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ email: e.target.value });
    setErrors({})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Sanitize formData
      const sanitizedData = {
        email: DOMPurify.sanitize(formData.email),
      };
      const submitFormData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/newsletter`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sanitizedData),
          });

          if (response.ok) {
            // Handle success
            const result = await response.json();
            // console.log("Form submitted successfully", result);
            setErrors({});
            navigate('/newsletter-success')
          } else {
            // Handle server errors
            const errorData = await response.json();
            // console.error("Server error", errorData.message);
            setErrors({ form: "Server error: Please try again later." });
            navigate('/server-error');
          }
        } catch (error) {
          // Handle fetch error
          // console.error("Network error", error.message);
          setErrors({
            form: "Network error: Please check your internet connection.",
          });
          navigate('/server-error');

        }
      };

      // Call the function to submit the data
      submitFormData();
    }
  };
  return (
    <div
      className=" p-14 max-w-5xl bg-blue-200 mx-auto border rounded-3xl mb-10"
      id="subscribe"
    >
      {/* Input */}
      <p className="text-center text-3xl font-semibold p-5">
        Join the waitlist for{" "}
        <span className="text-blue-700">upcoming batch</span> notifications
      </p>
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 rounded-lg dark:border-neutral-700">
          <div className="relative w-full">
            <label htmlFor="hero-input" className="sr-only">
              Subscribe
            </label>
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <svg
                className="shrink-0 size-4 text-gray-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width={20} height={16} x={2} y={4} rx={2} />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <input
              type="email"
              id="hero-input"
              name="email"
              value={formData.email}
              className="py-3 ps-9 pe-3 block w-full border-transparent rounded-lg text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="w-full sm:w-auto whitespace-nowrap py-3 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200"
            type="submit"
          >
            Join
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
        <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500 text-center">
          No spam, unsubscribe at any time.
        </p>
      </form>
      {/* End Input */}
    </div>
  );
};

export default Newsletter;
