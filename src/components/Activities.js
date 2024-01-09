import React from 'react'
import data from './data'
import Card from './Card'
export default function Activities() {
  return (
    <div className='activities'>
        <div className='activity'>
           { data.map((element)=>{
                return <Card {...element}></Card>
            })
            }
        </div>
    </div>
  )
}
