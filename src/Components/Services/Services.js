import React from 'react'
import Service_item from '../Service_item/Service_item'
import "./Services.css"
function Services() {
  return (
    <div className='services_maincontainer'>
    <Service_item 
     src="https://cdn-icons-png.flaticon.com/128/3467/3467466.png"
     text="Prepaid Mobile Recharge"/>
        
        <Service_item 
     src=" https://cdn-icons-png.flaticon.com/128/3159/3159461.png"
     text="DTH Recharge"/>    

<Service_item 
     src=" https://cdn-icons-png.flaticon.com/512/2746/2746100.png "
     text="Loans"/>    

<Service_item 
     src=" https://cdn-icons-png.flaticon.com/512/1077/1077221.png  "
     text="Promotion"/>    
    
    <Service_item 
     src=" https://cdn-icons-png.flaticon.com/128/2537/2537926.png   "
     text="News"/>    

<Service_item 
     src=" https://cdn-icons-png.flaticon.com/128/3959/3959420.png    "
     text="Blog"/>    
    
    <Service_item 
     src=" https://cdn-icons-png.flaticon.com/512/3850/3850259.png "
     text="Jobs"/>    

<Service_item 
     src=" https://img.icons8.com/material-outlined/512/comments.png "
     text="Anonymous feedback"/> 


<Service_item 
     src=" https://img.icons8.com/material-outlined/512/gas.png"
     text="Gas "/> 

<Service_item 
     src=" https://www.shutterstock.com/image-vector/light-bulb-icon-600w-599807726.jpg"
     text="Bulb "/> 


<Service_item 
     src=" https://img.icons8.com/material-outlined/512/water.png"
     text="Water drop "/> 


<Service_item 
     src="https://img.icons8.com/material-outlined/512/connection-status-off.png"
     text="See More"/> 
    
    </div>
  )
}

export default Services