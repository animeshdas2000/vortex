import React from 'react';
import { Link } from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import AuthBtn from './AuthBtn';
function Nav() {

  
  return (
  <>
    <nav className='header'>
      
    <h1><Link to="/">Vortex.</Link></h1>

    <ul className="main-nav">
      
    <li><Link to="/">Home</Link></li>
    <li><Scroll to="about" spy={true} smooth={true}>About</Scroll></li>
       <li><Link to="/market">Market</Link></li> 
        <li><Link to="/bitcoin">Trending</Link></li>
        <li><Link to="/bitcoin">Dashboard</Link></li>
    </ul>
   
    <div className="auth">

    <AuthBtn/>
    </div>
      
      </nav>
  </>
  );
}

export default Nav;
