import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Map from './Map';
import Today from './Today';
import FutureForecast from './FutureForecast';

export default function App() {
  const [location, setLocation] = useState('94061');
  const [query, setQuery] = useState('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/94061/2023-1-1/2023-1-5?unitGroup=us&key=4NVVRLUB27LLEG8MD8YRCCWF6');

  useEffect(() => {
    axios.get(query)
      .then((res) => {
        console.log('resData: ', res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div id="App">
      <Header query={query} setQuery={setQuery} location={location} setLocation={setLocation} />
      <div id="topRow">
        <h1>Today</h1>
        <Today className="widget" />
        <Map className="widget" />
      </div>
      <FutureForecast />
    </div>
  );
}
