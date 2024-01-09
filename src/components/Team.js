import React from 'react';
import student4 from './student4';
import student3 from './student';
import student2 from './student2';
import Member from './Member';
export default function Team() {
  return (
    <div className='team'>
      <h1>2026 Batch</h1>
      <div className='thirdyr'>
        {
          student2.map((element)=>{
            return <Member {...element}></Member>
          })
        }
      </div>
      <h1>2025 Batch</h1>
      <div className='thirdyr'>
        {
          student3.map((element)=>{
            return <Member {...element}></Member>
          })
        }
      </div>
      <h1>2024 Batch</h1>
      <div className='thirdyr'>
        {
          student4.map((element)=>{
            return <Member {...element}></Member>
          })
        }
      </div>
    </div>
  )
}
