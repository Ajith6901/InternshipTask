import React from 'react'
import "./imageSlider.css"
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';

function imageSlider() {
  return (
    <div className='imageSlider_maincontainer'>


<AwesomeSlider 

organicArrows="false">
<div><img src='https://m.media-amazon.com/images/I/81P1XvFS-yL._SX3000_.jpg'></img></div>
<div><img src='https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg'></img></div>
    <div><img src='https://m.media-amazon.com/images/I/81P1XvFS-yL._SX3000_.jpg'></img></div>
    <div><img src='https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg'></img></div>
    
  </AwesomeSlider>

    </div>
  )
}

export default imageSlider;