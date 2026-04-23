import React from 'react'
import Header from './pages/header/header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import NoMatch from './pages/noMatch/NoMatch'
import PostEmployee from './pages/employee/postEmployee'
import UpdateEmployee from './pages/employee/UpdateEmployee'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/employee' element={<PostEmployee/>}/>
        <Route path='/employee/:id' element={<UpdateEmployee/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </div> 
  )
}

export default App
