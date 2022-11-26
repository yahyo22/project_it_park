import {Routes,Route,Navigate} from "react-router-dom"

// Components
import AdminsDesktop from '../pages/desktop/AdminsDesktop'
import Login from '../pages/login/Login'

export default function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin'element={<AdminsDesktop />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
