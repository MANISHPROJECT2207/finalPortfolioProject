import React, { useEffect, useState } from 'react'
import api from '../../api';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    getExperience();
  }, []);
  const [toggler, setToggle] = useState(false)
  const toggle = ()=>{
    setToggle(!toggler);
  }
  const getExperience = () => {
    api
      .get("/api/experience/")
      .then((res) => res.data)
      .then((data) => {
        setExperience(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  // const deleteNote = (id) => {
  //   api
  //     .delete(`/api/notes/delete/${id}/`)
  //     .then((res) => {
  //       if (res.status === 204) alert("Note deleted!");
  //       else alert("Failed to delete note.");
  //       getNotes();
  //     })
  //     .catch((error) => alert(error));
  // };
  
  const deleteExperience = (id) => {
    api
      .delete(`/api/experience/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Experience deleted!");
        else alert("Failed to delete note.");
        getExperience();
      })
      .catch((error) => alert(error));
  };
    const [data,setData] = useState({
        domain : "",
        company : "",
        tech : "",
        des : ""
    });
    const submit = (e)=>{
      e.preventDefault();
    
    api
      .post("/api/experience/", { ...data })
      .then((res) => {
        
        if (res.status === 201) alert("experience details submitted!");
        else alert("Failed to submit.");
        getExperience();
      })
      .catch((err) => alert(err));
    
    }

  return (
    <div>
      <div className="container px-1 py-5 ">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-11 col-lg-11 col-md-11 col-11 text-center ">
          <div className="d-flex bg-white  p-lg-3 p-sm-3 rounded-top border-0" onClick={toggle}>
          <div className="col-10 text-dark h5 text-start">Experience Details</div>
            <div className="col-2 text-end">
            {
                toggler ? <FaAngleDown className="text-dark" /> : <FaAngleUp className="text-dark" />
              }
            </div>
            </div>
            {
              (toggler)? <div>
                <section className="vh-75 gradient-custom-2 p-5">
        
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-12 col-11">
              <div className="card mask-custom">
                <div className="card-body p-4 text-white">
                  <div className="text-center pb-2">
                     <h2 className="my-4">Experience</h2>
                  </div>
                  <table className="table text-white mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Company</th>
                        
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        experience.map((item, index) => {
                          return (
                            <tr className="fw-normal">
                        <th>
                          <span className="ms-2">{item.company}</span>
                        </th>
                        
                        <td className="align-middle">
                          <a href="#!" data-mdb-tooltip-init title="Done"><i className="fas fa-check fa-lg text-success me-3" /></a>
                          <a href="#!" data-mdb-tooltip-init title="Remove" onClick={() => deleteExperience(item.id)}><i className="fas fa-trash-alt fa-lg text-warning" /></a>
                        </td>
                      </tr>
                     
                          )
                      })
                    }
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
              <form className="form-control" onSubmit={submit}>
               
                <div>
                <div className="row justify-content-center text-left">
              
                <div className="row col-11 rounded-5 shadow-lg text-left">
               
                   
                  <div className="form-group col-sm-6 flex-column d-flex">
                  
                    <label className="form-control-label px-3">
                     domain<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      onChange={(e) => setData({...data,domain:e.target.value})}
                      value={data.domain}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                  
                    <label className="form-control-label px-3">
                      Company<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      placeholder=""
                      onChange={(e) => setData({...data,company:e.target.value})}
                      value={data.company}
             
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                  
                  <label className="form-control-label px-3">
                   tech<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    onChange={(e) => setData({...data,tech:e.target.value})}
                    value={data.tech}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                
                  <label className="form-control-label px-3">
                    des<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="mob"
                    name="mob"
                    placeholder=""
                    onChange={(e) => setData({...data,des:e.target.value})}
                    value={data.des}
           
                  />
                </div>
                </div>
                </div>
                
                </div>
                
   
                
                <div className="row justify-content-center">
                  <div className="form-group col-sm-5 text-justify py-5">
                    {" "}
                    <button type="submit" className="btn-block btn-primary bg-primary">
                      Submit
                    </button>{" "}
                  </div>
                </div>
              </form>
              </div> : ""
            }
      
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
