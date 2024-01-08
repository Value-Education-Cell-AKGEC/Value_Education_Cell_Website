import "./App.css";
import homelogo from './images/water.jpg';
import About from "./components/About";
import Activities from "./components/Activities";
function App() {


  return (
    <div>
      <div className="header">
            <a className="logo" href="index.html"> </a>
            <div className="lnk">
                <a className="ig home" href="#home">Home</a>
                <a className="ig about" href="#nam">About Us</a>
                <a className="ig services" href="#service">Activities</a>
                <a className="ig contact" href="#contact">Transformations</a>
                <a className="ig teams" href="#tem">Our Team</a>
            </div>
        </div>
        <div id="Home">
            <div className="info">
                <h1 id="astitva">सह अस्तित्व</h1>
                <h2>Existence with coexistence</h2>
                <div className="subtitle">
                    Our Mission is to make every human being able live in harmony in all four levels

                </div>
                <button>Participate in श्रमदान</button>
            </div>
            <div className="slider">
                <img src={homelogo} alt="water"/>
            </div>
        </div>
        <About></About>
        <Activities></Activities>
    </div>
  );
}

export default App;
