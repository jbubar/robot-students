import React from 'react'
import './student.scss';


export default function Student({ student }) {
    const name = `${student.firstName} ${student.lastName}`
    const avgGrade = (grades) => {
        const sum = grades.reduce((avg, grade) => (parseInt(grade) + avg), 0)
        return (sum / grades.length)
    }
    return (
        <div data-testid="student" className="student" >
            <img src={student.pic} alt={`${name}'s avatar`} />
            <div className="text-info">
                <h1>{name.toUpperCase()}</h1>
                <p>{`Email: ${student.email}`}</p>  
                <p>{`Company: ${student.company}`}</p>
                <p>{`Skill: ${student.skill}`}</p>
                <p>{`Average: ${avgGrade(student.grades)}%`}</p>
            </div>
        </div>
    )
}
