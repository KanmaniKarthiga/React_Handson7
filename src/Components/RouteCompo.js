import React from "react";
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Student from "./Student";
import Contact from "./Contact";
import Addnewstudent from './Addnewstudent'
import EditStudent from './EditStudent'

const RouteCompo = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/addnewstudent" element={<Addnewstudent/>}/>
            <Route path="/editstudent" element={<EditStudent/>}/>

        </Routes>
    )
}
export default RouteCompo;