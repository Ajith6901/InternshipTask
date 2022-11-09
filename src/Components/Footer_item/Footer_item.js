import React from 'react'
import "./Footer_item.css"
function Footer_item(props) {
  return (
    <div className='footer_item_container'>
    
    <img src={props.image}/>
    <p>{props.text}</p>
    
    
    </div>
  )
}

export default Footer_item