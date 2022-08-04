import React from 'react'
import ProjectBar from './ProjectBar'
import data from '../dummyData'

export default function Main() {

    // const mapProjects = data.map(project => {
    //     const {clientNames, phlows} = project
    //     return  <div className='project--phlow--container'>
    //                 <span className='project--phlow--text'>
    //                     {phlow}
    //                 </span>
    //             </div>
    // })

    const mapProjectBars = data.map(project => {
        return (
            <ProjectBar 
                clientNames={project.clientNames}
                phlows={project.phlows}
            />
        )
    })

    return (
        <main>
            {mapProjectBars}
        </main>
    )
}