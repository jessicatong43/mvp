import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../dist/assets/images/Logo.png';
import Search from './Search';

export default function Header({ location, setLocation, setData }) {
  return (
    <div id="header-bar">
      <img id="logo" alt="logo" src={logo} />
      <Search location={location} setLocation={setLocation} setData={setData} />
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};
