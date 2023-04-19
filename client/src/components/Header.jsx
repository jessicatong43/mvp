import React from 'react';
import logo from '../../dist/assets/Logo.png';
import Search from './Search';

export default function HeaderBar({ query, setQuery, location, setLocation }) {
  return (
    <div id="header-bar">
      <img id="logo" alt="logo" src={logo} />
      <Search query={query} setQuery={setQuery} location={location} setLocation={setLocation} />
    </div>
  );
}
