import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Cooklist</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>
      </nav>
    </header>
  );
};

export default Header;
