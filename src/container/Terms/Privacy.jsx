import React, { useEffect } from 'react';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white  ">
      <h1 className="text-2xl font-bold mb-4 mt-20">Privacy Policy</h1>
      <p className="mb-4"><strong>Effective Date:</strong> 22-OCT-2024</p>

      <p className="mb-4">
        This Privacy Policy outlines how Neechal ("we," "us," or "our") collects, uses, and protects the information of users ("you" or "your") who register for our courses and services. By using our services, you consent to the practices described in this policy.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We do not collect payment information, but we may collect the following personal information when you register for our courses:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Mobile number</li>
        <li>Email address</li>
        <li>Country</li>
        <li>Degree</li>
        <li>Education</li>
        <li>Date of birth</li>
        <li>Gender</li>
        <li>Graduation year</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We may use the information we collect for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To process and manage your course registration.</li>
        <li>To communicate with you regarding your registration and our services.</li>
        <li>To provide you with updates, course materials, and support.</li>
        <li>To analyze and improve our services and offerings.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">3. Information Sharing and Disclosure</h2>
      <p className="mb-4">
        <strong>Neechal does not share, sell, or trade your personal information with any third parties under any circumstances.</strong> Your information is kept strictly confidential and is only used for the purposes outlined in this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
      <p className="mb-4">
        We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Access the personal information we hold about you.</li>
        <li>Request the correction of any inaccurate personal information.</li>
        <li>Request the deletion of your personal information.</li>
      </ul>
      <p className="mb-4">
        To exercise these rights, please contact us at sbkrish@neechal.com
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and the effective date will be updated accordingly. We encourage you to review this policy periodically for any changes.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: sbkrish@neechal.com
      </p>
    </div>
  );
};

export default Privacy;
