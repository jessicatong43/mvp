import React from 'react';
import logo from '../../dist/assets/images/Logo.png';
import Search from './Search';

export default function HeaderBar({ location, setLocation }) {
  return (
    <div id="header-bar">
      <img id="logo" alt="logo" src={logo} />
      <Search location={location} setLocation={setLocation} />
    </div>
  );
}
