import React from "react";

const StatsList = () => {
  return (
    <>

    
  <div className="flex justify-center gap-4 p-5 pb-3">
  <div className="flex justify-start flex-col border rounded-lg p-4 w-48">
        <p className="font-bold text-2xl">8+</p>
        <p className="text-lg text-gray-700">Years Tutoring</p>
      </div>
      <div className="flex justify-start flex-col border rounded-lg p-4 w-48">
        <p className="font-bold text-2xl">400+</p>
        <p className="text-lg text-gray-700">Students</p>
      </div>
      <div className="flex justify-start flex-col border rounded-lg p-4 w-48">
        <p className="font-bold text-2xl">2000+</p>
        <p className="text-lg text-gray-700">Teaching hours</p>
      </div>
      
      <div className="flex justify-start flex-col border rounded-lg p-4 w-56">
        <p className="font-bold text-2xl">4.9/5</p>
        <p className="text-lg text-gray-700">Urbanpro Rating</p>
      </div>
    </div>
    </>
    
  );
};

export default StatsList;
