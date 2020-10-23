import React from "react";

import './Header.scss';
import logo from './img/logo.png';

const Header = ({handleChange}) => {
    
  return (
    <header className="header">
      <nav className="menu">
      
         <a href="/" className="logo">
         <img className="logo__icon" src={logo} alt=""/>
         <span>Coin base</span>
        </a>
           
      
        <div className="coin-search">
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
