import React from 'react'
import Domain from './Domain';
export default function Domains() {
    const data=[
        {
            image:"https://media.istockphoto.com/id/518185738/photo/child-drawing-top-view-artwork-workplace-with-creative-accessories.jpg?s=612x612&w=0&k=20&c=VquqIgnEQRvjku7UPht4ehNnFPMqmSKwwopUmMjC0kY=",
            name:"Art and Craft",
            text:"Art and craft intertwine, each a unique expression of creativity. Art channels emotions, telling stories through colors, shapes, and forms. Craft, with its hands-on precision, transforms raw materials into tangible beauty. Together, they celebrate human ingenuity, offering a diverse tapestry that reflects cultural richness and individual imagination."
        },
        {
            image:"https://frameboxx.in/upload/page/graphic-designing_542121x.jpg",
            name:"Designing",
            text:"Designing is the art of purposeful creation, harmonizing aesthetics and function. It shapes the world around us, from products to digital interfaces. Skillful designers blend innovation and user needs, transcending mere utility. Through thoughtful choices, they craft environments and objects that seamlessly integrate into our lives, enhancing experiences."
        },
        {
            image:"https://upraise.io/wp-content/uploads/2019/12/Asset-1-1.png",
            name:"Management",
            text:"Management orchestrates organizational success, guiding teams and resources toward goals. Effective managers navigate complexities, fostering collaboration and efficiency. Leadership, communication, and decision-making are their tools, ensuring a cohesive and thriving work environment that achieves sustained accomplishments."
        },
        {
            image:"https://media.istockphoto.com/id/1387792229/photo/microphone.jpg?s=612x612&w=0&k=20&c=u14iE4im20x3LnHyqKjvbLUndJhrL9ZJT_6PwrENNo8=",
            name:"Oratory/Literary",
            text:"Oratory and Literary prowess converge as powerful tools for expression, captivating audiences with the art of eloquence. In the realm of oratory, speakers weave words into compelling narratives, stirring emotions and inspiring change. Literary excellence, on the other hand, crafts worlds and ideas that endure, transcending time through the written word's enduring impact."
        },
        {
            image:"https://images.news18.com/ibnlive/uploads/2021/08/sun-photo-16293134144x3.jpg",
            name:"Photography",
            text:"Photography freezes moments in time, revealing narratives through the lens. It's a visual language, capturing emotions, landscapes, and cultures. Photographers play with light, composition, and perspective, crafting evocative images. From portraits to nature, each frame tells a unique story, preserving memories and emotions in a single click."
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2Lr-Aiw7BRo4yRFfcejeJ5zVfmupXXUt-g&usqp=CAU",
            name:"Sales and Marketing",
            text:"Sales and marketing synergize to drive business success. Marketing builds brand awareness and creates demand through strategic messaging and campaigns. Sales, the frontline engagement, converts interest into transactions, fostering customer relationships. Both are essential for business growth, working in tandem to understand, attract, and satisfy the needs of the market."
        },
        {
            image:"https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
            name:"Web Development",
            text:"Web development architects the digital world, crafting websites and applications that connect and empower users. Developers master programming languages, design principles, and user experience to create responsive, functional, and visually appealing online platforms. Constantly evolving, web development is the backbone of the internet, shaping the way we interact and share information."
        }
    ]
  return (
    <div className='donainsclass flex flex-col items-center'>
        <br></br>
        <h1 className='text-6xl '>Our Domains</h1>
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
