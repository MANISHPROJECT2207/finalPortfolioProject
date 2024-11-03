import React from 'react'
import EducationPart from './EducationPart'

const Education = () => {
    const data = [
        {
            degree:"Bachelor of Technology",
            college:"Poornima college of Enginerring (2021 - 2025)",
            stream:"Stream : Computer Sciense And Enginerring",
            percentage:"CGPA : 9.3",
        },
        {
            degree:"Senior Secondary Education",
            college:" N.K. Public School (2020 - 2021)",
            stream:"Subjects - PCM",
            percentage:"Percentage : 98.80%",
        },
        {
          degree:"Secondary Education",
          college:" N.K. Public School (2020 - 2021)",
          stream:"Subjects - Common",
          percentage:"Percentage : 91.83%",
      }
        
    ]
  return (
    <div>

    <h3 className="mb-4"
           //    data-aos="fade-up"
               data-aos-delay={300}>
               Education
             </h3>
             <div className="row gy-4">
                {data.map((ele)=>(
                    <div className="col-12" key={ele.degree}>
                        <EducationPart d={ele}/>
                    </div>
                ))}
               
             </div>
    </div>
  )
}

export default Education
