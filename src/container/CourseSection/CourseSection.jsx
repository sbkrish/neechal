const CourseDetailCard = () => {
    return (
      <div className="max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">C Language Course - FREE</h2>
          <p className="text-gray-600 mb-4">Get started with C programming and build a strong foundation for a successful career in IT.</p>
          
          <ul className="mb-4">
            <li className="text-gray-700"><span className="font-semibold">Duration:</span> 30 days (including weekends)</li>
            <li className="text-gray-700"><span className="font-semibold">Time:</span> 9:00 PM - 10:00 PM IST</li>
            <li className="text-gray-700"><span className="font-semibold">Mode:</span> Online - MS Teams</li>
            <li className="text-gray-700"><span className="font-semibold">Session:</span> Live</li>
            <li className="text-gray-700"><span className="font-semibold">Language:</span> Tamil</li>
            <li className="text-gray-700"><span className="font-semibold">Batch Size:</span> 100 students</li>

          </ul>
  
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Eligibility</h3>
          <ul className="list-disc list-inside mb-4 text-gray-700 border rounded-md p-5">
            <li>Age: 20 years and above.</li>
            <li>Final year students or 2012+ graduates can join.</li>
            <li>Students or graduates who are eager to start a career in IT but face financial challenges.</li>
            <li>Preference for graduates struggling in jobs like delivery (Swiggy, Zomato, Amazon) or drivers (Ola, Uber, Rapido, PickMe).</li>
            <li>Available only to students from India and Sri Lanka.</li>
          </ul>
  
          <p className="text-green-600 font-semibold">Start your journey in IT with this essential programming course.</p>
          <p className="mt-10 p-3 border rounded-md bg-gray-50 text-gray-600">Kindly note: If you are able to pay and wish to join Neechal, we will soon start an affordable paid batch for the C programming course. <a href="#subscribe" className="text-blue-700 underline">Click here</a> to join the waitlist.</p>
        </div>
      </div>
    );
  }
  
  export default CourseDetailCard;
  