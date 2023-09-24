import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StudentData = () =>{
    const navigate = useNavigate()
    const data = useSelector((state)=>state.Student)
    return(
        <div>
            <table className='table'>
                <thead>
                    <th>Name</th>
                    <th style={{paddingLeft:"55px"}}>Age</th>
                    <th style={{textAlign: "center",paddingRight: "0px"}}>Course</th>
                    <th style={{textAlign: "end",paddingLeft: "0px"}}>Batch</th>
                    <th style={{paddingRight:"80px", textAlign: "end"}}>Change</th>
                </thead>
            </table>
        
        {
            data.map((item,index)=>{
                return(
                    <>
                    <div key={index} className='table'>
                        <div className='items'>
                            <table>
                            <tbody>
                                <tr>
                                    <td>{item.Name}</td>
                                    <td style={{paddingRight:"35px"}}>{item.Age}</td>
                                    <td>{item.Course}</td>
                                    <td style={{textAlign:"start", paddingLeft:"30px"}}>{item.Batch}</td>
                                </tr>   
                            </tbody>
                            </table>
                            </div>
                        <button id="editbtn"onClick={()=>{
                            const id = item.id;
                            navigate('/editstudent', {state:id})}}>Edit</button>
                    </div>
                    </>
                )
            })
        }
        </div>
        
    )
}
export default StudentData;