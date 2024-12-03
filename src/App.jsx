import React from 'react'
import Navbar from './Components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/home'

const App =()=>{
  return(
    <>
<Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/vedio/:categoryId/:vedioId' element={<vedio />}/>
</Routes>
    </>
  )
}
export default App