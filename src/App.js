import "./App.css";
import Home from "./components/Home";
import { useState,useEffect } from "react";
import Activities from "./components/Activities";
import Team from "./components/Team";
import Contact from "./components/Contact";
function App() {
    
    const [themeimage,setthemeimage]=useState(<i class="fa-solid fa-moon"></i>);
    const [theme,setTheme]=useState("lightmode");
    
    const [selectHome,setHome]=useState(true);
    const [selectActivities,setActivities]=useState(false);
    const [selectTeam,setTeam]=useState(false);
    const [selectContact,setContact]=useState(false);

 



    function turnAllFalse(){
      setActivities(false);
      setHome(false);
      setTeam(false);
      setContact(false);
    }
    function homeHandler(btn){
      turnAllFalse();
      setHome(true);
    }
    function activitiesHandler(){
      turnAllFalse();
      setActivities(true);
    }
    function teamHandler(){
      turnAllFalse();
      setTeam(true);
    }
    function contactHandler(){
      turnAllFalse();
      setContact(true);
    } 
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
    let link = document.querySelector(".lnk")
    const [active,setactive]=useState(false)
    function makenavvisible(){
      setactive(!active);
    }

    useEffect(()=>{
      document.body.className=theme;
    },[theme]);
  return (
    <div className="app">
      <div className="header">
            <a className="logo" href="index.html"> </a>
            <div className={`lnk linkss ${active ? 'active' : ""}` }>
                <a className="ig" id="home" onClick={homeHandler} href="#home">Home</a>
                <a className="ig" id="activity" onClick={activitiesHandler} href="#service">Activities</a>
                <a className="ig" id="teams" onClick={teamHandler} href="#team">Our Team</a>
                <a className="ig" id="contact" onClick={contactHandler} href="#contact">Contact Us</a>
            </div>
            <div className="navbtns">
            <button className="themechangebtn" onClick={changetheme}>{themeimage}</button>
            
            <button className="themechangebtn menubtn"  onClick={makenavvisible} > <i  class="fa-solid fa-bars"></i></button>

            </div>
        </div>
        <div className="container">
          {selectHome && <Home></Home>}
          {selectActivities && <Activities></Activities>}
          {selectTeam && <Team></Team>}
          {selectContact && <Contact></Contact>}
        </div>
        
    </div>
  );
}

export default App;
