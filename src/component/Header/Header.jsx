import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food hear</h2>
        <p>
          A customer will search for a favorite restaurant, usually filtered via
          type of cuisine and choose from available items, and choose delivery
          or pick-up.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
