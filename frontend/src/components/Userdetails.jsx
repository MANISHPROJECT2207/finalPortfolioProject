import React from 'react'

const Userdetails = () => {
  return (
    <div>
      <div className="d-flex flex-row">
         <div className="d-flex flex-row">
           <div className="row col-3">
             <a className="navbar-brand mx-lg-auto mb-lg-4 col-3 col-lg-12 col-md-12 px-5 row-cols-8" href="#">
               <img src="src/assets/images/IMG_20240917_212051 (1).jpg" className="d-lg-block rounded-circle" alt="" />
             </a>
           </div>
           <div className="row col-8">
             <h1 className="display-4 fw-bold" 
           //   data-aos="fade-up"
             >
               I'M A <span className="text-brand">Full Stack Developer</span>
             </h1>
             <p className="lead mt-2 mb-4" 
           //   data-aos="fade-up"
              data-aos-delay={300}>
               I am Manish Sharma, And I have Good Experience of MERN STACK, DJANGO.
               I am also good in Data Strucutre and Algorithm.
             </p>
             <div 
           //   data-aos="fade-up"
              data-aos-delay={600}>
               <a href="https://drive.google.com/file/d/1BbB9JWK-RIC_8CLbCWTrqJvjqhQxdi9L/view" target="_blank" className="btn btn-brand me-3">My Resume</a>
               <a href="tel:9079187034" className="link-custom">Call: 9079187034</a>
             </div>
             <div className="lead py-2"
           //    data-aos="fade-up" 
             data-aos-delay={900}>
               <a href="mailto:manishjpr04@gmail.com?subject=Hello Manish&body=Hi" target="_blank" className="link-custom">Mail : manishjpr04@gmail.com </a>
             </div>
             <div className="social-icons py-1" 
           // data-aos="fade-up"
              data-aos-delay={1200}>
               <a href="https://www.linkedin.com/in/manish-sharma-a86780225" target="_blank" className="m-2"><i className="lab la-linkedin" /></a>
               <a href="https://www.instagram.com/manish.______sharma/?igsh=bmE0dW93ZHN4aWNj" target="_blank" className="m-2"><i className="lab la-instagram" /></a>
               <a href="https://github.com/MANISHPROJECT2207" target="_blank" className="m-2"><i className="lab la-github" /></a>
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Userdetails
