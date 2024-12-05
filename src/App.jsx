import React, { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/home'
import Vedio from './Pages/Vedio/Vedio'

const App =()=>{
  const [sidebar , setSidebar]=useState(true);
  const [search ,setSearch]= useState("")
  return(
    <>
    
<Navbar setSidebar={setSidebar} setSearch={setSearch} />
<Routes>
  <Route path='/' element={<Home  sidebar={sidebar} search={search} />} />
  <Route path='/vedio/:categoryId/:vedioId' element={<Vedio />}/>
  
</Routes>
    </>
  )
}
export default App