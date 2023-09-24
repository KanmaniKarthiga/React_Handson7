import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Editstudent } from "./Slice/StudentSlice";
// import Student from "./Data";


const EditStudent = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useLocation()
    const StudentId = data.state;
    // console.log(StudentId)
    const Stddata = useSelector((state)=>state.Student.filter((item)=>item.id === StudentId))
    console.log(Stddata)

    const  {Name,Age,Course,Batch} = Stddata[0]
    // console.log(Name,Age)

    const [newName, setName] =useState(Name)
    const [newAge, setAge] = useState(Age)
    const [newCourse, setCourse] = useState(Course)
    const [newBatch, setBatch] = useState(Batch)
    // console.log(Name)
    // console.log(Age)

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        dispatch(Editstudent({
            id: StudentId,
            newName,
            newAge,
            newCourse,
            newBatch
        }))
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
                <input type="text" value={newName} required onChange={(e)=>setName(e.target.value)}/> 
                <span className="span1">Name</span>
            </div>
            <div className="inputBox">
                <input type="number" value={newAge} required onChange={(e)=>setAge(e.target.value)}/> 
                <span className="span2" style={{backgroundColor:'rgb(172 192 195)' }}>Age</span>  
            </div>
            <div className="inputBox"> 
                <input type="text" value={newCourse} required onChange={(e)=>setCourse(e.target.value)}/> 
                <span className="span3" style={{backgroundColor:'rgb(239 190 213)'}}>Course</span>
            </div>
                
            <div className="inputBox">
                <input type="text" value={newBatch} required onChange={(e)=>setBatch(e.target.value)}/>
                <span className="span4" style={{backgroundColor:'rgb(239 190 213)'}}>Batch</span>
            </div>

            <button className="btn">Submit</button>
            <button onClick={cancelClick} className="btnCancel">Cancel</button>
        </form>
        </>
    )
}
export default EditStudent;