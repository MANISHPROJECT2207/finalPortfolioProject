import React, { useEffect, useState } from 'react'
import api from '../../api'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const Skills = () => {
  const [toggler, setToggle] = useState(false)
  const toggle = ()=>{
    setToggle(!toggler);
  }
  const [data, setData] = useState("")
  const [list_of_skill, setSkill] = useState([])
   
    const add = () =>{
      
      setSkill([...list_of_skill,data])
      setData('')
      console.log(list_of_skill);
    
    }

    useEffect(() => {
      api
      .post(`/api/skills/`, {list_of_skill})
      .then((res) => {
        
        if (res.status === 201) ""
        else alert("Failed to submit.");
        // getNotes();
      })
      .catch((err) => alert(err));
    
      
    }, [list_of_skill])
    
  return (
    <div>
       <div className="container px-1 py-3 ">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-11 col-lg-11 col-md-11 col-11 text-center">
          <div className="d-flex bg-white  p-lg-3 p-sm-3 rounded-top border-0" onClick={toggle}>
          <div className="col-10 text-dark h5 text-start">Skills Details</div>
            <div className="col-2 text-end">
            {
                toggler ? <FaAngleDown className="text-dark" /> : <FaAngleUp className="text-dark" />
              }
            </div>
            </div>
            {
              (toggler)? <div>
      <section className="vh-75 gradient-custom-2 p-2">
        
              
      <div className="text-center pb-2">
                     <h2 className="my-4">Skills</h2>
                  </div>
                  <div className="items row px-2 px-lg-5" >
                  {
                    list_of_skill.map((item, index) => {
                      return (
                        <div key={index} className='col-auto'>
                          <span>{item}</span>
                          <i className="fas fa-times" onClick={() => setSkill(list_of_skill.filter((_, i
                          ) => i !== index))}></i>
                          </div>
                          );
                          })
                          
                  }
                  </div>
          <div className="place rounded-5">
         
          <div className="add p-0" >
            <input type="text" onChange={(e) => setData(e.target.value)}
                    value={data} placeholder="add your skills" id="input-add" />
            <button id="add" onClick={add} className="">ADD</button>
            </div>
            </div>
      </section>
      </div> : ""
}
      <div>
        
        
      </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
