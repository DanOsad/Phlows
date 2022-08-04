import React from 'react'

export default function Header() {

    return (
        <header>
            <img src='images/waves-1000.png' alt='waves logo' className='header--logo'/>
            <h1 className='header--title'>Phlows</h1>
            <span className='header--description'>a tracking tool for photographers</span>
        </header>
    )
}