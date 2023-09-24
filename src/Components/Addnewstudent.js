import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddStudent } from "./Slice/StudentSlice";
import { useNavigate } from "react-router-dom";


const Addnewstudent=()=>{
    const Studentlist = useSelector((state)=>state.Student)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [Name, setName] =useState('')
    const [Age, setAge] = useState('')
    const [Course, setCourse] = useState('')
    const [Batch, setBatch] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(AddStudent({
            id: Studentlist.length+1,
            Name,
            Age,
            Course,
            Batch
        }))
        setName('');
        setAge('');
        setCourse('');
        setBatch('');
        navigate('/student')
    }
    const cancelClick = (e) =>{
        e.preventDefault()
        navigate('/student')
    }
    return(
        <>
        <form className="newform" onSubmit={handleSubmit}>
            <div className="inputBox">
                <input type="text" value={Name} required onChange={(e)=>setName(e.target.value)}/> 
                <span className="span1">Name</span>
            </div>
            <div className="inputBox">
                <input type="number" value={Age} required onChange={(e)=>setAge(e.target.value)}/> 
                <span className="span2" style={{backgroundColor:'rgb(172 192 195)' }}>Age</span>  
            </div>
            <div className="inputBox"> 
                <input type="text" value={Course} required onChange={(e)=>setCourse(e.target.value)}/> 
                <span className="span3" style={{backgroundColor:'rgb(239 190 213)'}}>Course</span>
            </div>
                
            <div className="inputBox">
                <input type="text" value={Batch} required onChange={(e)=>setBatch(e.target.value)}/>
                <span className="span4" style={{backgroundColor:'rgb(239 190 213)'}}>Batch</span>
            </div>

            <button className="btn">Submit</button>
            <button onClick={cancelClick} className="btnCancel">Cancel</button>
        </form>
        </>
    )
}
export default Addnewstudent;