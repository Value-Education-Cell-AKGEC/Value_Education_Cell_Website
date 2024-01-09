import React from 'react'
import Domain from './Domain';
export default function Domains() {
    const data=[
        {
            image:"https://media.istockphoto.com/id/1387792229/photo/microphone.jpg?s=612x612&w=0&k=20&c=u14iE4im20x3LnHyqKjvbLUndJhrL9ZJT_6PwrENNo8=",
            name:"Oratory",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {
            image:"https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
            name:"Web Development",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {
            image:"https://media.istockphoto.com/id/518185738/photo/child-drawing-top-view-artwork-workplace-with-creative-accessories.jpg?s=612x612&w=0&k=20&c=VquqIgnEQRvjku7UPht4ehNnFPMqmSKwwopUmMjC0kY=",
            name:"Art and Craft",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {
            image:"https://images.news18.com/ibnlive/uploads/2021/08/sun-photo-16293134144x3.jpg",
            name:"Photography",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {
            image:"https://frameboxx.in/upload/page/graphic-designing_542121x.jpg",
            name:"Designing",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        }
    ]
  return (
    <div className='donainsclass flex flex-col items-center'>
        <br></br>
        <h1 className='text-6xl '>Domains</h1>
         <div className='domains'>
       { 
        data.map((element)=>{
            return <Domain {...element}></Domain>;
        })
        }
    </div>
    </div>
   
  )
}
