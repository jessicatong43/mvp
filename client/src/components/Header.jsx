import React from 'react';
import logo from '../../dist/assets/Logo.png';
import Search from './Search';

export default function HeaderBar() {
  return (
    <div id="header-bar">
      <img id="logo" alt="logo" src={logo} />
      <Search />
    </div>
  );
}
