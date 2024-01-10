import React from 'react'
import homelogo from './images/water.png';
import About from './About';
import Domains from './Domains';
import Transformations from './Transformations';

export default function Home() {
  
  return (
    <div>

    <div id="Home">
    <div className="info">
        <h1 id="astitva">सह अस्तित्व</h1>
        <h2>Existence with Coexistence</h2>
        <div className="subtitle">
        Existence emphasizes individual significance, while Coexistence promotes harmony, empathy, and mutual respect, fostering a balanced, interconnected society at all four levels.
        </div>
        <a href='https://forms.gle/pcx8nBfzHLChSJqA7' >Participate in श्रमदान</a>
    </div>
    <div className="slider">
        <img src={homelogo} alt="water"/>
    </div>
</div>
    <About></About>
    <Domains></Domains>
    <Transformations></Transformations>
    </div>
  )
}
