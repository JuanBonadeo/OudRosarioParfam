import React from 'react';
import './logo.css';
import { Link } from 'react-router-dom';


export const Logo = (prop) => {
  return (
      <Link to="/"><img className={prop.className} src="logo.png" alt="Oud parfume" /></Link>
  );
};


