import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Login from '../pages/login/Login'
export default function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/admin'element={} /> */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
