import React from 'react';

const Terms = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-4 mt-20">Terms of Use</h1>
      <p className="mb-4"><strong>Effective Date:</strong> 22-OCT-2024</p>
  {/* <li>[Insert Date] - Updated the No Refund Policy section for clarity.</li> */}
      <p className="mb-6">
        Welcome to Neechal! These Terms of Use outline the rules and regulations for the use of our website and services.
        By accessing or using Neechal, you agree to comply with these Terms. If you do not agree with any part of these Terms, please do not use our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Definitions</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>"Neechal"</strong> refers to our platform providing programming tutoring and related services.</li>
        <li><strong>"User"</strong> refers to any individual who accesses or uses Neechal's services.</li>
        <li><strong>"Services"</strong> refers to all educational content, courses, resources, and support offered through Neechal.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
<p className="mb-4">You must meet the following eligibility criteria to register for courses on Neechal:</p>
<ul className="list-disc list-inside mb-6">
  <li>Be in your final year of college or have completed graduation on or after 2012.</li>
  <li>
    Be currently working in a non-IT field, such as delivery partners, shipyards, or cab drivers, and have a strong desire to embark on a transformative journey into the IT sector.
  </li>
  <li>Be unable to pay for programming courses.</li>
</ul>
<p className="mb-4">
  By registering for a course, you confirm that you meet these criteria.
</p>

      <h2 className="text-xl font-semibold mb-2">3. Course Registration</h2>
      <p className="mb-6">
        Users can register for courses without creating an account or making any payments. 
        Course registration is based on availability, and you may be required to provide relevant information during the registration process.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Use of Services</h2>
      <p className="mb-6">
        Users agree to use the Services for lawful purposes and in accordance with these Terms. 
        Users shall not engage in any conduct that restricts or inhibits anyone’s use or enjoyment of the Services, or that may harm Neechal or its users.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Content</h2>
      <p className="mb-4">
        All content provided through Neechal is for educational purposes only. 
        We make no representations about the accuracy, reliability, or completeness of the content.
      </p>
      <p className="mb-6">
        Users are encouraged to use the content responsibly and to follow applicable laws and regulations.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. No Refund Policy</h2>
      <p className="mb-6">
        As Neechal currently does not collect any payments for its services, we do not offer any refunds for course registrations or other services.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
      <p className="mb-4">
        All intellectual property rights in the content provided through Neechal are owned by Neechal or its licensors. 
        Users are granted a limited license to access and use the content for personal and educational purposes only.
      </p>
      <p className="mb-6">
        Users are prohibited from reproducing, distributing, or modifying any content without prior written permission from Neechal.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
      <p className="mb-6">
        Neechal shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Services. 
        Your use of the Services is at your own risk.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Indemnification</h2>
      <p className="mb-6">
        You agree to indemnify and hold harmless Neechal, its affiliates, and their respective officers, directors, employees, and agents from any claims, losses, liabilities, damages, costs, or expenses arising out of or related to your use of the Services or your violation of these Terms.
      </p>

      {/* <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the laws of [insert governing law jurisdiction]. 
        Any disputes arising under or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in [insert jurisdiction].
      </p> */}

      <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
      <p className="mb-6">
        Neechal reserves the right to modify these Terms at any time. 
        Changes will be effective immediately upon posting on our website. 
        Your continued use of the Services after any changes constitutes your acceptance of the new Terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at <u>sbkrish@neechal.com</u>
      </p>
    </div>
  );
};

export default Terms;
