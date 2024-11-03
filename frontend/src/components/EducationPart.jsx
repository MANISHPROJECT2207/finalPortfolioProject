import React, { useEffect, useState } from "react";

const EducationPart = ({d}) => {


  let { degree, college, stream, percentage } = d;
 
  return (
    
    <div>
      <div className="bg-base p-4 rounded-4 shadow-effect">
        <h4>{degree}</h4>
        <p className="text-brand mb-2">{college}</p>
        <p className="mb-0">{stream}</p>
        <p className="mb-0">{percentage}</p>
      </div>
    </div>
  );

};

export default EducationPart;
