import React from 'react'
import homelogo from './images/water.png';

export default function Home() {
  return (
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
  )
}
