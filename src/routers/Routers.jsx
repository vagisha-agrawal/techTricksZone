import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" exact element={<><HomePage /></>} />
    </Routes>
  )
}

export default Routers