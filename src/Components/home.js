import React from 'react';
import GlasgowUni from '../images/cloisters.png';
import CodeClan from '../images/codeclan.png';

const Home = () => {
    
    return (
        <>
            <p id="name-intro">Hello <span role="img">👋</span> I'm Ahmed, welcome to my page.</p>
            <img id="glasgow-uni-image" src={GlasgowUni}></img>
            <p id="university-description">I graduated in 2007 from Glasgow University, having studied 
            Aerospace and Mechanical Engineering. I found work as a Design Engineer and worked on some pretty 
            cool things for about 11 years. When it was time to move on, I signed up to CodeClan and did their 
            seriously intensive course, and now I'm a software developer.</p>
        </>
    )

}

export default Home;