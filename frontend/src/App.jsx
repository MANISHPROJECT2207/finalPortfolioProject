import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Portfolio from './pages/Portfolio'
function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
              <Portfolio/>
          </ProtectedRoute>
        } />     
         <Route path="/Portfolio" element={<Home />} /> 
         <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<Notfound />}></Route>  
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
