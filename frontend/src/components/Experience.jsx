import React from 'react'

const Experience = () => {
  const data = [
    {
      link : "",
      domain : "",
      company : "",
      tech : "",
      summary:""
    },
    {
      link : "",
      domain : "",
      company : "",
      tech : "",
      summary:""
    },
    {
      link : "",
      domain : "",
      company : "",
      tech : "",
      summary:""
    }
  ]
  return (
    <div>
      <h3 className="mb-4" 
           //   data-aos="fade-up" 
             data-aos-delay={300}>
               Experiance
             </h3>
             <div className="row gy-4">
               <a href="https://drive.google.com/file/d/1BciGOJ7b5Ar7T9zOqUb8dfYvhhJHjJCL/view" target="_blank">
                 <div className="col-12" 
               //   data-aos="fade-up"
                  data-aos-delay={600}>
                   <div className="bg-base p-4 rounded-4 shadow-effect">
                     <h4>Full Stack Developer</h4>
                     <p className="text-brand mb-2">EUONUS IT PVT. LTD. (2024)</p>
                     <p className="text-brand mb-2">Tech Stack : HTML, CSS, BOOTSTRAP, JS, DJANGO</p>
                     <p className="mb-0">
                       Designed a website for the students Name as Manik.That Consists All the Syllabus youtube Videos
                       and Article Links.
                     </p>
                   </div>
                 </div>
               </a>
               <a href="https://drive.google.com/file/d/1BdfhrcnSmSAZj5p0a7X4C_s7HUOVAfSV/view" target="_blank">
                 <div className="col-12" 
               //   data-aos="fade-up" 
                 data-aos-delay={600}>
                   <div className="bg-base p-4 rounded-4 shadow-effect">
                     <h4>Full Stack Developer With Django</h4>
                     <p className="text-brand mb-2">BLUE SPACE PVT. LTD. (2023)</p>
                     <p className="text-brand mb-2">Tech Stack : HTML, CSS, BOOTSTRAP, JS, PYTHON, DJANGO</p>
                     <p className="mb-0">
                       Designed a LINKEDIN Web Scrapper.
                     </p>
                   </div>
                 </div>
               </a>
               <a href>
                 <div className="col-12" 
               //   data-aos="fade-up" 
                 data-aos-delay={600}>
                   <div className="bg-base p-4 rounded-4 shadow-effect">
                     <h4>Front End Developer</h4>
                     <p className="text-brand mb-2">Matrix Computer(2022)</p>
                     <p className="text-brand mb-2">Tech Stack : HTML, CSS, BOOTSTRAP, JS</p>
                     <p className="mb-0">
                       Designed a Team Website.
                     </p>
                   </div>
                 </div>
               </a>
             </div>
    </div>
  )
}

export default Experience
