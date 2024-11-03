import React, { useState } from 'react'
import api from "../../api";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const PersonalInfo = ({data,setData}) => {
    const [toggler, setToggle] = useState(false)
  const toggle = ()=>{
    setToggle(!toggler);
  }
  const save = (e)=>{
    e.preventDefault();
    console.log("clicked");
    
    api
      .post("/api/Personal/", { ...data })
      .then((res) => {
        if (res.status === 201) alert("data created!");
        else alert("Failed to submit data.");
        
      })
      .catch((err) => alert(err));
  }
  return (
    <div className=''>
        <div className="container px-1 py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-11 col-lg-11 col-md-11 col-11 text-center">
            <div className="d-flex bg-white  p-lg-3 p-sm-3 rounded-top border-0" onClick={toggle}>
          <div className="col-10 text-dark h5 text-start">Personal Information</div>
            <div className="col-2 text-end">
              {
                toggler ? <FaAngleDown className="text-dark" /> : <FaAngleUp className="text-dark" />
              }
            
            </div>
            </div>
          
              {
                (toggler) ? <form className="form-control rounded-0 border-0" onSubmit={save}>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-12 flex-column d-flex">
                   
                    <label className="form-control-label px-3">
                      Full Name<span className="text-danger"  > *</span>
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter Your Full Name"
                      onChange={(e) => setData({...data,name:e.target.value},console.log(data))}
                     value={data.name}
                    />
                  </div>
                  
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                  
                    <label className="form-control-label px-3">
                     Email<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      onChange={(e) => setData({...data,email:e.target.value})}
                      value={data.email}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                  
                    <label className="form-control-label px-3">
                      Phone number<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="mob"
                      name="mob"
                      placeholder=""
                      onChange={(e) => setData({...data,mobile:e.target.value})}
                      value={data.mobile}
             
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-12 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      Domain<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="job"
                      name="job"
                      placeholder="Enter Your Domain"
                      onChange={(e) => setData({...data,domain:e.target.value})}
                      value={data.domain}
                    />{" "}
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                  
                    <label className="form-control-label px-3">
                     Development<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      onChange={(e) => setData({...data,dev:e.target.value})}
                      value={data.dev}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                  
                    <label className="form-control-label px-3">
                      DSA <span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="mob"
                      name="mob"
                      placeholder=""
                      onChange={(e) => setData({...data,dsa:e.target.value})}
                      value={data.dsa}
             
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-12 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      Resume<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="job"
                      name="job"
                      placeholder="Enter Your Domain"
                      onChange={(e) => setData({...data,resume:e.target.value})}
                      value={data.resume}
                    />{" "}
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-12 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      Linkdin Link<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="job"
                      name="job"
                      placeholder="Enter Your Domain"
                      onChange={(e) => setData({...data,linkdin:e.target.value})}
                      value={data.linkdin}
                    />{" "}
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-12 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      Github Link<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="job"
                      name="job"
                      placeholder="Enter Your Domain"
                      onChange={(e) => setData({...data,github:e.target.value})}
                      value={data.github}
                    />{" "}
                  </div>
                </div>
               
                
   
                
                <input type="submit" value="Submit"></input>
              </form> : ""
              }
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
