import React from 'react'
import "./Service_item.css"
function Service_item(props) {
  return (
    <div className='Service_items_maincontainer'>
      <img src={props.src}/>
      <p>{props.text}</p>
        
    </div>
  )
}

export default Service_item;