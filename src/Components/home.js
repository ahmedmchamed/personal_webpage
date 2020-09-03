import React from 'react';
import GlasgowUni from '../images/cloisters.png';
import CodeClan from '../images/codeclan.png';

const Home = () => {
    
    return (
        <>
            <p id="name-intro">Hello <span role="img">👋</span> I'm Ahmed, welcome to my page.</p>
            <img id="glasgow-uni-image" src={GlasgowUni}></img>
            <p id="university-description">I came to Scotland in 2002 to study at Glasgow University. I had a very strong interest
            in Maths and Physics, but ultimately I decided to study Aerospace Engineering, because I thought it was pretty cool. 
            So I did my Bachelor's in Aeronautical Engineering, followed by a Masters in Mechanical Engineering, and graduated in 2007.
            </p>
            <img id="codeclan image" src={CodeClan}></img>
        </>
    )

}

export default Home;