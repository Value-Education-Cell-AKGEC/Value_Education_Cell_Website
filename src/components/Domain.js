import React from 'react'

export default function Domain(props) {
  return (
    <div className='domain'>
        <img src={props.image}></img>
        <h1 className='text-xl font-bold'>{props.name}</h1>
        <p className='text-sm'>{props.text}</p>
    </div>
  )
}
