import React from 'react'
import'./Vedio.css/'
import Playvedio from '../../Components/play vedio/Playvedio'
import Rec from '../../Components/Recomendation/Rec'
import { useParams } from 'react-router-dom'
const Vedio=()=>{
  const{vedioId,categoryId}=useParams();
  return(
    <>
<div className='play-container'>
  <Playvedio vedioId={vedioId} />
  <Rec categoryId={categoryId} />
</div>
    </>
  )
}
export default Vedio