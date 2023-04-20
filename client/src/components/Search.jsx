import React, { useState, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// require('dotenv').config();

export default function Search({ location, setLocation, setData }) {
  const [tempLocation, setTempLocation] = useState(location);

  // function handleOnFlyTo() {
  //   const { current = {} } = mapRef;
  //   const { leafletElement: map } = current;

  //   map.flyTo(position, 18, {
  //     duration: 2,
  //   });
  // }

  const changeHandler = (e) => {
    e.preventDefault();
    setTempLocation(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${tempLocation}&aggregateHours=24&forecastDays=5&unitGroup=us&shortColumnNames=true&contentType=json&key=AEUZHSGZPPNFPVKQJ76RUXNSB`;

    axios.get(query)
      .then((resData) => {
        const newGetData = {
          [tempLocation]: resData.data.locations[tempLocation].values,
          moonData: resData.data.locations[tempLocation].currentConditions.moonphase,
          sunset: resData.data.locations[tempLocation].currentConditions.sunset,
          sunrise: resData.data.locations[tempLocation].currentConditions.sunrise,
          latitude: resData.data.locations[tempLocation].latitude,
          longitude: resData.data.locations[tempLocation].longitude,
        };
        console.log('newGetData: ', newGetData);
        setLocation(tempLocation);
        setData(newGetData);
        e.target.reset();
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

Search.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};
