import React from 'react';
import axios from 'axios';

// require('dotenv').config();

export default function Search({ location, setLocation }) {
  const changeHandler = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
    console.log('location: ', location);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(location);
    const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${location}&aggregateHours=24&forecastDays=4&unitGroup=us&shortColumnNames=true&contentType=json&key=AEUZHSGZPPNFPVKQJ76RUXNSB`;

    axios.get(query)
      .then((data) => {
        console.log('data: ', {
          [location]: data.data.locations[location].values,
        });
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
