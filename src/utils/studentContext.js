import React, { createContext, useState, useEffect } from 'react';
import { fetchAllStudents } from "./studentsApiUtil";

export const StudentContext = createContext();

export const StudentContextProvider = ({ children }) => {
    const [studentData, setStudentData] = useState([]);
    

    useEffect(() => {
        fetchAllStudents().then(res => {
            setStudentData(res.data.students)
        })
    }, [])


    return (
        <StudentContext.Provider value={studentData}>
            { children }
        </StudentContext.Provider>
    )
}
