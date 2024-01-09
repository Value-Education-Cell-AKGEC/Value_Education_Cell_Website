import React from 'react'

export default function Message(props) {
  return (
    <div className='message'>
         <img src={props.image}></img>
        <div className='nameof'>
                <h1>''</h1>
                <p>{props.text}</p>
                <h2>{props.name}</h2>
        </div>
    </div>
  )
}
