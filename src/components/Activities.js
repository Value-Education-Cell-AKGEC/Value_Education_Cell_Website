import React from 'react'
import data from './data'
import Card from './Card'
export default function Activities() {
  return (
    <div className='activities'>
        <h1 className='headofactivity'>Activities</h1>
        <div className='activity'>
           { data.map((element)=>{
                return <Card {...element}></Card>
            })
            }
        </div>
    </div>
  )
}
