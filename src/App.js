import "./App.css";

import About from "./components/About";
import Activities from "./components/Activities";
import Home from "./components/Home";
import { useState,useEffect } from "react";
import Domains from "./components/Domains";
import Transformations from "./components/Transformations";
function App() {
    let animate=document.getElementById("animate");
    const [themeimage,setthemeimage]=useState(<i class="fa-solid fa-moon"></i>);
    const [theme,setTheme]=useState("lightmode");
    
    function changetheme(){
      if(theme==="darkmode"){
        setTheme("lightmode");
        setthemeimage(<i class="fa-solid fa-moon"></i>);
      }
      else{
        setTheme("darkmode");
        setthemeimage(<i class="fa-regular fa-sun"></i>);
      }
    }
    useEffect(()=>{
      document.body.className=theme;
    },[theme])

  return (
    <div className="app">
      <div className="header">
            <a className="logo" href="index.html"> </a>
            <div className="lnk">
                <a className="ig home" href="#home">Home</a>
                <a className="ig services" href="#service">Activities</a>
                <a className="ig teams" href="#tem">Our Team</a>
                <a className="ig teams" href="#tem">Contact Us</a>
            </div>
            <button className="themechangebtn" onClick={changetheme}>{themeimage}</button>
        </div>
        
        <Home></Home>
        <About></About>
        <Domains></Domains>
        <Transformations></Transformations>
    </div>
  );
}

export default App;
