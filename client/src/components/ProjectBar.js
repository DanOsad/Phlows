import React from "react"
// import data from '../dummyData'

function ProjectBar(props) {

    // const {clientNames, phlows} = data

    const mapPhlows = props.phlows.map(phlow => {
        return  <div className='project--phlow--container'>
                    <span className='project--phlow--text'>
                        {phlow}
                    </span>
                </div>
    })
    
    // const mapPhlows = data.map(project => {
    //     const {clientNames, phlows} = project
    //     return  <div className='project--phlow--container'>
    //                 <span className='project--phlow--text'>
    //                     {phlow}
    //                 </span>
    //             </div>
    // })

    return (
        <div className='project--container'>
            <div className='project--clientNames--container'>
                <span className='project--clientNames--text'>{props.clientNames}</span>
            </div>
                {mapPhlows}
        </div>
    )
}

export default ProjectBar