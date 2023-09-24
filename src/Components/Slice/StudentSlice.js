import { createSlice } from "@reduxjs/toolkit";
import Student from "../Data";

const StudentSlice = createSlice({
    name: 'Student',
    initialState: Student,
    reducers:{
        AddStudent : (state,action)=>{
            state.push(action.payload)
        },
        Editstudent : (state,action)=>{
            const {id, newName, newAge, newCourse, newBatch} = action.payload
            const existingStudent = state.find((student)=>student.id === id)
            existingStudent.Name=newName;
            existingStudent.Age=newAge;
            existingStudent.Course=newCourse;
            existingStudent.Batch=newBatch
        }
    }
})
export default StudentSlice.reducer;
export const {AddStudent,Editstudent} = StudentSlice.actions