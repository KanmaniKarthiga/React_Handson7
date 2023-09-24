import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./Slice/StudentSlice";


export default configureStore({
    reducer:{
        Student: StudentSlice
    }
})