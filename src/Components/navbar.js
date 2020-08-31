import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </>
    )
}

export default NavBar;