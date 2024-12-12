import React from 'react'
import Mainpage from './Mainpage'
import { Route, Routes } from 'react-router-dom'
import Mealinfo from './Mealinfo'


function App() {
  return (
    <>
    
    

      <Routes>
        <Route path='/' element={<Mainpage />}></Route>
        <Route path='/:mealid' element={<Mealinfo />}></Route>
      </Routes>

    </>
  )
}

export default App