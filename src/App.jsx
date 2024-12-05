import React, { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/home'
import Vedio from './Pages/Vedio/Vedio'

const App =()=>{
  const [sidebar , setSidebar]=useState(true);
  return(
    <>
    
<Navbar setSidebar={setSidebar} />
<Routes>
  <Route path='/' element={<Home  sidebar={sidebar} />} />
  <Route path='/vedio/:categoryId/:vedioId' element={<Vedio />}/>
  
</Routes>
    </>
  )
}
export default App