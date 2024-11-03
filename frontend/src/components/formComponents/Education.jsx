import React, { useEffect, useState } from 'react'
import api from '../../api';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Education = () => {

  // useEffect(() => {
  //   getNotes();
  // }, []);

  // const getNotes = () => {
  //   api
  //     .get("/api/notes/")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setNotes(data);
  //       console.log(data);
  //     })
  //     .catch((err) => alert(err));
  // };

  const deleteEducation = (id) => {
    api
      .delete(`/api/education/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Education deleted!");
        else alert("Failed to delete note.");
        getEducation();
      })
      .catch((error) => alert(error));
  };
  
  const [toggler, setToggle] = useState(false)
  const toggle = ()=>{
    setToggle(!toggler);
  }
  const [education, setEducation] = useState([]);
  useEffect(() => {
    getEducation();
  }, []);
  
  const getEducation = () => {
    api
      .get("/api/education/")
      .then((res) => res.data)
      .then((data) => {
        setEducation(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };
    const [data,setData] = useState({
        course : "",
        college : "",
        stream : "",
        cgpa : ""
    });
    const submit = (e)=>{
      e.preventDefault();
      if(typeof(Number(data.cgpa)) !== 'number'){
        alert("CGPA should be in numeric format");
      }
      else{
    api
      .post("/api/education/", { ...data })
      .then((res) => {
        
        if (res.status === 201) alert("Education details submitted!");
        else alert("Failed to submit.");
       
        getEducation();
        
      })
      .catch((err) => alert(err));
    }
    }

  return (
    <div>
      <div className="container px-1 py-1 ">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-11 col-lg-11 col-md-11 col-11 text-center ">
          <div className="d-flex bg-white  p-lg-3 p-sm-3 rounded-top border-0" onClick={toggle}>
          <div className="col-10 text-dark h5 text-start">Education Details</div>
            <div className="col-2 text-end">
            {
                toggler ? <FaAngleDown className="text-dark" /> : <FaAngleUp className="text-dark" />
              }
            </div>
            </div>
            {
                (toggler) ? <div>
                  <section className="vh-75 gradient-custom-2 p-5">
        
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-12 col-11">
              <div className="card mask-custom">
                <div className="card-body p-4 text-white">
                  <div className="text-center pb-2">
                     <h2 className="my-4">Education</h2>
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
                        education.map((item, index) => {
                          return (
                            <tr className="fw-normal">
                        <th>
                          <span className="ms-2">{item.course}</span>
                        </th>
                        
                        <td className="align-middle">
                          <a href="#!" data-mdb-tooltip-init title="Done"><i className="fas fa-check fa-lg text-success me-3" /></a>
                          <a href="#!" data-mdb-tooltip-init title="Remove" onClick={() => deleteEducation(item.id)}><i className="fas fa-trash-alt fa-lg text-warning" /></a>
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
                     Course<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      onChange={(e) => setData({...data,course:e.target.value})}
                      value={data.course}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                  
                    <label className="form-control-label px-3">
                      College/School Name<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      placeholder=""
                      onChange={(e) => setData({...data,college:e.target.value})}
                      value={data.college}
             
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                  
                  <label className="form-control-label px-3">
                   Stream/Subjects<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    onChange={(e) => setData({...data,stream:e.target.value})}
                    value={data.stream}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                
                  <label className="form-control-label px-3">
                    CGPA / Percentage<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="mob"
                    name="mob"
                    placeholder=""
                    onChange={(e) => setData({...data,cgpa:e.target.value})}
                    value={data.cgpa}
           
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

export default Education
