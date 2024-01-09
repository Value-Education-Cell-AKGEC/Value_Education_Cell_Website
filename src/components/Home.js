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
        <h2>Existence with coexistence</h2>
        <div className="subtitle">
            Our Mission is to make every human being able to live in harmony in all four levels

        </div>
        <button>Participate in श्रमदान</button>
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
