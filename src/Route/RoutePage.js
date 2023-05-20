import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import SucessPage from '../Pages/SucessPage'

const RoutePage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/success' element={<SucessPage />} />
        </Routes>
    </div>
  )
}

export default RoutePage