import React, { useState } from 'react'

import './Sidebar.css';

 function Sidebar() 
 {

  const colors = ["#fe9b72","#fec971","#00d4fe","#b693fd","#e4ee91"];

  const [listopen,setlistopen] = useState(false);


  return (
        <div className='sidebar'>
            <img src = "/Addhere.jpg" style = {{width:'75%'}}  onClick= {() => setlistopen(!listopen)}/>
            <ul className = {`sidebar_list ${listopen ? "sidebar_list.active":""}`}>
               { 
                  colors.map((item,index) =>(
                      <li key = {index}
                      className = "sidebar_list_item"
                      style = {{backgroundColor:item}} />
                  ))
               }
            </ul>
        </div>
  )
}
export default Sidebar 