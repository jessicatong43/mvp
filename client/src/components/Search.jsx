import React, { useState } from 'react';
import axios from 'axios';

// require('dotenv').config();

export default function Search({ location, setLocation, setData }) {
  const [tempLocation, setTempLocation] = useState(location);

  const changeHandler = (e) => {
    e.preventDefault();
    setTempLocation(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setLocation(tempLocation);

    const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${tempLocation}&aggregateHours=24&forecastDays=5&unitGroup=us&shortColumnNames=true&contentType=json&key=AEUZHSGZPPNFPVKQJ76RUXNSB`;

    axios.get(query)
      .then((resData) => {
        const newGetData = {
          [tempLocation]: resData.data.locations[tempLocation].values,
          moonData: resData.data.locations[tempLocation].currentConditions.moonphase,
        };
        console.log('newGetData: ', newGetData);
        setData(newGetData);
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
