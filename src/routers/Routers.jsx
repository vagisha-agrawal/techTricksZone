import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Services from '../pages/Services'
import AdminLogin from '../backend/AdminLogin'
import Header from '../components/Header'
import Collections from '../backend/Collections'
import AdminServices from '../backend/AdminServices'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" exact element={<><Header /><HomePage /></>} />
        <Route path="/allServices" exact element={<><Header /><Services /></>} />
        <Route path="/admin" exact element={<><AdminLogin /></>} />
        <Route path="/admin/collections" exact element={<><Collections /></>} />
        <Route path="/admin/services" exact element={<><AdminServices /></>} />
    </Routes>
  )
}

export default Routers