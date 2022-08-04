import React from 'react'
import SidebarBtn from './SidebarBtn'

export default function Sidebar() {

    return (
        <div className='sidebar--container'>
            <SidebarBtn value="home"/>
            <SidebarBtn value="phlows"/>
            <SidebarBtn value="projects"/>
            <SidebarBtn value="analytics"/>
            <SidebarBtn value="settings"/>
        </div>
    )
}