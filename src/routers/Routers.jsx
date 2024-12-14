import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Services from '../pages/Services'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" exact element={<><HomePage /></>} />
        <Route path="/allServices" exact element={<><Services /></>} />
    </Routes>
  )
}

export default Routers