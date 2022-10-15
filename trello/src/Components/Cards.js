import React from 'react'

 function Cards() {
  return (
                 <div>
                    <div className='card-cover'>
                            <span id = "title" > 
                            <textarea  type = "text" id = "title-textarea" /> 
                            </span>
                            <span id = "card-content" > 
                            <textarea type = "text"  id = "content-textarea"  />
                            </span>

                                <div  id = "card-bottom" >
                                    <span style = {{width:'50%',alignSelf:'center'}} >
                                        <p> 10:18 PM 22 August </p>
                                    </span>
                                    <span id = "delete"> 
                                        <img src = "/delete-removebg-preview.png" style = {{width:'22%'}}/>
                                    </span>
                                </div>
                    </div>
              </div>
  )
}
export default Cards 