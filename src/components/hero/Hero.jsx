import React from 'react';

import './hero.css'

import HeroImg from "../../assets/Group 77.png"


const Hero = () => {
  return (
    <>
        <div className="Hero--img--container">
            <img className='.Hero--img' src={HeroImg} alt="" />
        </div>
        <div className="Hero--content">
            <h1 className="Hero--title">
                Online Experiences
            </h1>
            <p className="Hero--para">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    </>
  )
}

export default Hero