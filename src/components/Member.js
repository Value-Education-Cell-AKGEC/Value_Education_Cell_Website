import React from 'react'

export default function Member(props) {
  return (
    <div class="member">
                    <div class="memberimage">
                        <img class="memig" src={require(`${props.image}`)}></img>
                    </div>
                    <div class="line1">{props.name}</div>
                    <div class="line2">{props.domain}</div>
                    <div class="links">
                        <a href={props.linkedin} target="_blank"><i class="fa-brands fa-linkedin" ></i></a>
                        <a href={props.instagram}target="_blank"><i class="fa-brands fa-instagram" ></i></a>
                        <a href={props.email} target="_blank"><i class="fa-solid fa-envelope" ></i></a>
            
                    </div>
                </div>
  )
}
