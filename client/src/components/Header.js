import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <button className="ui button small gray">Home</button>
      </Link>
    </div>
  );
};

export default Header;
