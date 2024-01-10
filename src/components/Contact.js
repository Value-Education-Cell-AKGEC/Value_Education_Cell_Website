import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
  
      <form className='contactform'>
          <h1>Get in touch</h1>
          <input type='text' placeholder='Name'></input>
          <input type='text' placeholder='Email'></input>
          <textarea type="text" placeholder="Content"></textarea>
          <input type='submit'></input>
        </form>

      <div className='contactdetails'>
          <a href="https://www.google.com/maps/place/Ajay+Kumar+Garg+Engineering+College/@28.6711354,77.4928267,15z/data=!4m6!3m5!1s0x390cf30885b1e2a5:0x9983675e24c6638b!8m2!3d28.6756736!4d77.5020041!16zL20vMGJ4aGdf?entry=ttu">
          <img className="map" src={require(`./images/akgmap.png`)}></img> </a>
          <div className='link'>
            <a href="https://www.linkedin.com/company/97222446/admin/feed/posts/" target="_blank"><i class="fa-brands fa-linkedin" ></i></a>
            <a href="https://www.instagram.com/vecell_akgec/" target="_blank"><i class="fa-brands fa-instagram" ></i></a>
            <a href="mailto:vecell@akgec.ac.in" target="_blank"><i class="fa-solid fa-envelope" ></i></a>
          </div>
      </div>
    </div>
  )
}
