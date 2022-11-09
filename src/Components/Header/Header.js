import React from 'react'
import './Header.css'
import UpperPart from "../UpperHeader/UpperPart"
import LowerPart from '../LowerHeader/LowerPart'

function Header() {
  return (
    <div className='main_container'>
        
        <UpperPart/>
        <LowerPart/>
        
        
        
    </div>
  )
}

export default Header