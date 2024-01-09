import React from 'react'

export default function Card(props) {

  if(props.data%2){
    return (
      <div className='card'>
          <img src={props.image}></img>
          <div className='sidediv'>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
          </div>
      </div>
    )
  }
  else{

    
    return (
      <div className='card cardright'>
          <img src={props.image}></img>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
      </div>
    )
  }
  // return (
  //       <div className='card'>
  //           <div className='sidediv'>
  //             <h1>{props.name}</h1>
  //             <p>{props.text}</p>
  //           </div>
  //           <img src={props.image}></img>
  //       </div>
  //     )
}
