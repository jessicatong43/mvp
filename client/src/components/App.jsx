import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Map from './Map';
import Today from './Today';
import FutureForecast from './FutureForecast';
import sampleData from '../../../server/sampleData';

export default function App() {
  const [location, setLocation] = useState('94061');
  const [data, setData] = useState(sampleData);
  const query = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=94061&aggregateHours=24&forecastDays=4&unitGroup=us&shortColumnNames=true&contentType=json&key=AEUZHSGZPPNFPVKQJ76RUXNSB';

  useEffect(() => {
    axios.get(query)
      .then((resData) => {
        const forecastData = {
          [location]: resData.data.locations[location].values.slice(1),
          moonphase: resData.data.locations[location].currentConditions.moonphase,
        };
        console.log('forecastData: ', forecastData);
        setData(forecastData);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [location]);

  return (
    <div id="App">
      <Header location={location} setLocation={setLocation} />
      <div id="content">
        <div id="topRow">
          <h1>Today</h1>
          <Today className="widget" />
          <Map className="widget" />
        </div>
        <div id="bottomRow">
          <h1>4-Day Forecast</h1>
          <FutureForecast data={data} location={location} />
        </div>
      </div>
    </div>
  );
}
