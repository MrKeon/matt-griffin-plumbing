import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Matt Griffin Plumbing</h1>
      <nav>
        <ul>
          <li><a href="#plumbingservices">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
