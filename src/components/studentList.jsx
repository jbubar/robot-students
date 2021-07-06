import React, { useContext } from 'react';
import Student from './student';
import { StudentContext} from '../utils/studentContext';

export default function StudentList() {
    const students = useContext(StudentContext);

    return (
        <div className="student-list">
            {
                students.map(student => (
                    <Student student={student} />
                ))
            }
        </div>
    )
}
