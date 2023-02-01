import React from 'react';
import fej from './Images/Fej.jpeg';
import { Link } from 'react-router-dom';

import "./Home.css";

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className='cont'>
            <img src={fej} alt='fej' />
            <div className='col-2'>
                <h2>Welcome</h2>
                <p>I am James Funsho Emmanuel, A graduate and an aspiring frontend developer. 
                    I am a creative person who desire to work in a fast-paced environment. I desire to continue learning, and improving my skills </p>
                <p>My Tech journey started with Zuri platform, HNG. I also made use of youtube and google to aid my learning.</p>
                <a href='https://github.com/Drfej' target="_blank" rel="noreferrer" id='github'><button className='button'>Github</button></a>
                <Link to="/contact"><button className='contact-me'>Contact me</button></Link>
            </div>
        </div>

    </div>
    
    
  )
}

export default Home
