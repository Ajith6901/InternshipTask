import React from 'react'
import "./Titles.css"
function Titles(props) {
  return (
    <div className='title_main_container'>
        {props.text}
    </div>
  )
}

export default Titles