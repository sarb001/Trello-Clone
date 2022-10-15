import React from 'react'



 function CardsList() {
  return (
    <div className = 'card-container'>

                <div className='card-cover'>
                        <span id = "title" style = {{padding:'0px 4px'}}> 
                        <textarea  type = "text" id = "title-textarea" /> 
                        </span>
                        <span id = "card-content" style = {{padding:'0px 6px'}}> 
                        <textarea type = "text"  id = "content-textarea"  />
                        </span>
                        <div style = {{display:'flex',padding:'2px 12px'}}>
                            <span style = {{width:'50%',alignSelf:'center'}} >
                                <p> 10:18 PM 22 August </p>
                            </span>
                            <span id = "delete" style = {{width:'50%'}}> 
                                <img src = "/delete-removebg-preview.png" style = {{width:'22%'}}/>
                            </span>

                        </div>
                        
                </div>

                <div className='card-cover'>
                        <span id = "title" style = {{padding:'0px 4px'}}> 
                        <textarea  type = "text" id = "title-textarea" /> 
                        </span>
                        <span id = "card-content" style = {{padding:'0px 6px'}}> 
                        <textarea type = "text"  id = "content-textarea"  />
                        </span>
                        <div style = {{display:'flex',padding:'2px 12px'}}>
                            <span style = {{width:'50%',alignSelf:'center'}} >
                                <p> 10:18 PM 22 August </p>
                            </span>
                            <span id = "delete" style = {{width:'50%'}}> 
                                <img src = "/delete-removebg-preview.png" style = {{width:'22%'}}/>
                            </span>

                        </div>
                        
                </div>

                <div className='card-cover'>
                        <span id = "title" style = {{padding:'0px 4px'}}> 
                        <textarea  type = "text" id = "title-textarea" /> 
                        </span>
                        <span id = "card-content" style = {{padding:'0px 6px'}}> 
                        <textarea type = "text"  id = "content-textarea"  />
                        </span>
                        <div style = {{display:'flex',padding:'2px 12px'}}>
                            <span style = {{width:'50%',alignSelf:'center'}} >
                                <p> 10:18 PM 22 August </p>
                            </span>
                            <span id = "delete" style = {{width:'50%'}}> 
                                <img src = "/delete-removebg-preview.png" style = {{width:'22%'}}/>
                            </span>

                        </div>
                        
                </div>
    </div>
  )
}

export default CardsList
