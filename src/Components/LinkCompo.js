import React from "react";
import {Link} from 'react-router-dom'

const LinkCompo = () =>{
    return(
        <div className="navbar">
        <Link to='/' className="link">Home</Link>
        <Link to='/student' className="link">Student</Link>
        <Link to='/contact' className="link">Contact</Link>
        </div>
    )
}
export default LinkCompo;