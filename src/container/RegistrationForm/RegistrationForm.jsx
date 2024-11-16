import React, { useState } from "react";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import parsePhoneNumber from "libphonenumber-js";
import validator, { toBoolean } from "validator";
import { State, City } from "country-state-city";
import { useEffect } from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./RegistrationForm.scss";
import CourseDetailCard from "../CourseSection/CourseSection";
import DOMPurify from "dompurify";
import { navigate } from "wouter/use-hash-location";
import { useLocation } from "wouter";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    whatsapp: "",
    laptop: "",
    occupation: "",
    degree: "",
    graduation: "",
    dialCode: "",
  });

  const occupation = [
    {
      title: "Student (Final year)",
      role: "student",
    },
    {
      title: "Delivery Partner (swiggy, zomato, amazon, etc)",
      role: "delivery partner",
    },
    {
      title: "Cab Driver (ola, uber)",
      role: "cab driver",
    },
    {
      title: "Shipyard",
      role: "shipyard",
    },
    {
      title: "Others",
      role: "others",
    },
  ];

  const graduation = Array.from({ length: 14 }, (v, i) => 2012 + i);

  const degree = ["UG", "PG", "Diploma"];
  const [, navigate] = useLocation();

  const [errors, setErrors] = useState({});
  const [countryCode, setCountryCode] = useState("IN");
  const [stateList, setStateList] = useState({});
  const [country, setCountry] = useState("India");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // console.log(State.getStatesOfCountry(countryCode));
    // console.log("cities", City.getCitiesOfState("IN", "TN"));

    setStateList(State.getStatesOfCountry(countryCode));
  }, [countryCode]);

  //age restriction for datepicker
  // Get today's date
  const today = new Date();

  // Calculate the date 15 years ago
  const fifteenYearsAgo = new Date(
    today.getFullYear() - 19,
    today.getMonth(),
    today.getDate()
  );

  // Format the date to yyyy-mm-dd
  const year = fifteenYearsAgo.getFullYear();
  const month = String(fifteenYearsAgo.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(fifteenYearsAgo.getDate()).padStart(2, "0");

  const maxDate = `${year}-${month}-${day}`;

  const handleChange = (e, cc = "", dialCode = "", country = "") => {
    if (cc) {
      // console.log(cc);

      setCountryCode(cc.toUpperCase());
    }

    // country ? setCountry(country) : setCountry
    setIsError(false);
    setErrors((err) => {
      return {
        ...err,
        [typeof e == "object" ? e.target.name : "whatsapp"]: "",
      };
    });
    if (typeof e == "object") {
      const { name, value } = e.target;
      // console.log(value);

      setFormData({
        ...formData,
        [name]:
          value === "true" || value === "false" ? JSON.parse(value) : value,
      });
      // if(countryCode) {
      //   console.log(countryCode);

      //   setFormData({...formData, countryCode: countryCode})
      // }
      // if (name === "country") {
      //   setCountryCode(value === "India" ? "IN" : "SL");
      // }
    } else {
      setFormData({
        ...formData,
        whatsapp: e,
        dialCode: dialCode,
        country: country,
      });
    }
  };

  const isValidEmail = validator.isEmail(formData.email);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!isValidEmail && formData.email)
      newErrors.email = "Email address is Invalid";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.whatsapp) newErrors.whatsapp = "WhatsApp number is required";
    if (formData.whatsapp.length < 2 && formData.whatsapp)
      newErrors.whatsapp = "Mobile number is Invalid";
    if (!formData.degree) newErrors.degree = "Degree is required";
    if (!formData.occupation) newErrors.occupation = "Occupation is required";
    if (!formData.graduation)
      newErrors.graduation = "Graduation year is required";
    if (formData.laptop === "") newErrors.laptop = "Laptop status is required";

    // if (!formData.City) newErrors.City = "City is required";
    // if (!formData.state) newErrors.state = "State is required";
    // if (!formData.country) newErrors.country = "Country is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    // console.log("formData and CC", formData, countryCode);

    const phoneNum = parsePhoneNumber(
      formData.whatsapp,
      countryCode.toUpperCase()
    );

    // Inside your form submission handler
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsError(true);
    } else {
      // Sanitize formData
      const sanitizedData = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        gender: DOMPurify.sanitize(formData.gender),
        dob: DOMPurify.sanitize(formData.dob),
        whatsapp: DOMPurify.sanitize(formData.whatsapp),
        laptop: formData.laptop,
        occupation: DOMPurify.sanitize(formData.occupation),
        degree: DOMPurify.sanitize(formData.degree),
        graduation: DOMPurify.sanitize(formData.graduation),
        dialCode: DOMPurify.sanitize(formData.dialCode),
        country: DOMPurify.sanitize(formData.country),
      };

      // Define an async function to handle the POST request
      const submitFormData = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/students`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(sanitizedData),
            }
          );

          if (response.ok) {
            // Handle success
            const result = await response.json();
            // console.log("Form submitted successfully", result);
            setErrors({});
            setIsError(false);
            navigate("/reg-success");
          } else {
            // Handle server errors
            const errorData = await response.json();
            // console.error("Server error", errorData.message);
            setErrors({ form: "Server error: Please try again later." });
            setIsError(true);
            navigate("/server-error");
          }
        } catch (error) {
          // Handle fetch error
          // console.error("Network error", error.message);
          setErrors({
            form: "Network error: Please check your internet connection.",
          });
          setIsError(true);
          navigate("/server-error");
        }
      };

      // Call the function to submit the data
      submitFormData();
    }

    // console.log(phoneNum, formData);

    if (phoneNum) {
      // console.log(errors);
      if (!phoneNum.isPossible()) {
        setErrors((err) => {
          // console.log(err);

          return { ...err, whatsapp: "Mobile Number is Invalid" };
        });
      }
      if (
        phoneNum.isPossible() &&
        formData.whatsapp.length < 10 &&
        countryCode === "in"
      )
        setErrors((err) => {
          // console.log(err);

          return { ...err, whatsapp: "Mobile Number is Invalid" };
        });
    }
  };

  return (
    <>
      <p className="head-text mb-10" id="courses">
        Take your <span>first step</span> to get started
      </p>
      <div className="app__register-item flex flex-col md:flex-row justify-evenly w-full gap-6">
        {/* Course Details */}
        <CourseDetailCard className="w-full md:w-1/2" />
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
            Registration Form
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit} netlify>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                WhatsApp Number<span className="text-red-500">*</span>
              </label>
              <PhoneNumber handleChange={handleChange} />
              {errors.whatsapp && (
                <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender<span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <div className="flex">
                  <label className="flex items-center w-full border border-gray-300 rounded-l-md px-3 py-2 text-sm">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center w-full border border-gray-300 px-3 py-2 text-sm">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </label>
                  <label className="flex items-center w-full border border-gray-300 rounded-r-md px-3 py-2 text-sm">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">Other</span>
                  </label>
                </div>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                max={maxDate}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.dob && (
                <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Occupation<span className="text-red-500">*</span>
              </label>

              <select
                name="occupation"
                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                onChange={handleChange}
                defaultValue="default"
              >
                <option disabled value="default">
                  Please select
                </option>
                {occupation.map((item, index) => (
                  <option value={item.role} key={index}>
                    {item.title}
                  </option>
                ))}
              </select>
              {errors.occupation && (
                <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Degree<span className="text-red-500">*</span>
              </label>

              <select
                name="degree"
                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                onChange={handleChange}
                defaultValue="default"
              >
                <option disabled value="default">
                  Please select
                </option>
                {degree.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.degree && (
                <p className="text-red-500 text-xs mt-1">{errors.degree}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Year of Graduation<span className="text-red-500">*</span>
              </label>

              <select
                name="graduation"
                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                onChange={handleChange}
                defaultValue="default"
              >
                <option disabled value="default">
                  Please select
                </option>
                {graduation.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.graduation && (
                <p className="text-red-500 text-xs mt-1">{errors.graduation}</p>
              )}
            </div>

            {/* Laptop Ownership */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Do you have a Laptop?<span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <div className="flex">
                  <label className="flex items-center w-full border border-gray-300 rounded-l-md px-3 py-2 text-sm">
                    <input
                      type="radio"
                      name="laptop"
                      value="true"
                      checked={formData.laptop === true}
                      onChange={handleChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center w-full border border-gray-300 rounded-r-md px-3 py-2 text-sm">
                    <input
                      type="radio"
                      name="laptop"
                      value="false"
                      checked={formData.laptop === false}
                      onChange={handleChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">No</span>
                  </label>
                </div>
              </div>
              {errors.laptop && (
                <p className="text-red-500 text-xs mt-1">{errors.laptop}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700"
              >
                Submit
              </button>
              {Object.keys(errors).length > 0 && isError ? (
                <p className="text-red-500 text-sm text-center">
                  {Object.keys(errors).length}{" "}
                  {Object.keys(errors).length === 1 ? "field is" : "fields are"}{" "}
                  not filled
                </p>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(RegistrationForm, "app__register"),
  "register"
);
