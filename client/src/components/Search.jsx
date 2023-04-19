import React, { useState } from 'react';
import axios from 'axios';

// require('dotenv').config();

export default function Search({ query, setQuery, location, setLocation }) {
  const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const todayDate = (new Date()).toLocaleDateString('en-US', dateOptions);
  const tempDate = new Date();
  tempDate.setDate(new Date().getDate() + 4);
  const futureDate = tempDate.toLocaleDateString('en-US', dateOptions);

  const todayArr = todayDate.split('/');
  const futureArr = futureDate.split('/');

  const today = `${todayArr[2]}-${todayArr[0]}-${todayArr[1]}`;
  const future = `${futureArr[2]}-${futureArr[0]}-${futureArr[1]}`;

  const changeHandler = (e) => {
    e.preventDefault();
    console.log('location: ', location);
    setLocation(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${today}/${future}?unitGroup=us&key=4NVVRLUB27LLEG8MD8YRCCWF6`);
    console.log('query: ', query);

    axios.get(query)
      .then((res) => {
        console.log('resData: ', res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div id="search">
      <form onSubmit={submitHandler}>
        <input type="search" placeholder="Search by zipcode" onChange={changeHandler} />
      </form>
      <i className="fa-solid fa-magnifying-glass" />
    </div>
  );
}
