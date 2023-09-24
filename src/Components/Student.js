import React from 'react'
import StudentData from './StudentData';
import { Link } from 'react-router-dom';

const Student = () =>{
    return(
        <>
        <div id='h1'>Students Details</div>
        <Link to='/addnewstudent'><button>Add New Student</button></Link>
        <div>
            <StudentData/>
        </div>
        </>
    )
}
export default Student;