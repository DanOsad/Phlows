import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='app--container'>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App;
