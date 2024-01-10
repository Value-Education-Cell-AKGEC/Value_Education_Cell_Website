import React from 'react'
import Message from './Message'
export default function Transformations() {
    const data=[
        {
            image:"https://www.akgec.ac.in/wp-content/uploads/2020/09/BN_new.jpg",
            name:"Mr. Bihari Nandan Pandey",
            text:"Attending the level-1 workshops was a marvelous experience for me. I got all my questions answered, which I had in mind for years. I evaluated my life objectives with the help of the workshop’s course contents in a self-explorative manner"
        },
        {
            image:"https://i1.rgstatic.net/ii/profile.image/11431281141891868-1681096902120_Q512/Parul-Verma-14.jpg",
            name:"Dr. Parul Verma",
            text:"As an individual now I have started living on the proposal given, like to verify my natural acceptance whenever I have to buy something whether it's a piece of furniture, new clothes or anything else and itgives me the feeling of prosperity with my limited but sufficient physical facilities."
        },
        {
            image:"https://www.akgec.ac.in/wp-content/uploads/2023/02/Dr.-Jitender-Chhabra-scaled.jpg",
            name:"Mr. Jitendra Chhabra",
            text:"I would not say that everything has got resolved after attending the workshop, and I do not make any mistakes now, but the realisation of wrongdoings comes quite promptly, due to which the recovery time in reaching back to the normal stage has substantially reduced. "
        },
        {
            image:"https://www.akgec.ac.in/wp-content/uploads/2020/01/shiwani-pp.jpg",
            name:"Dr. Shiwani Singhal",
            text:"Everyone used to listen to me earlier, but my decision was a command to them, and if someone didn’t listen to me, I used to feel unhappy. Now decision. We sit together and freely share our feelings and issues."
        }
    ]
  return (
    <div className='transformations'>
        <h1 className='transformhead'>Transformations</h1>
        <div className='messages'>

        {
            data.map((element)=>{
                return <Message {...element}></Message>
            })
        } 
        </div>
    </div>
  )
}
