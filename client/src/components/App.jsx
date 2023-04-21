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
  // const [mapPosition, setMapPosition] = useState([37.7876511, -122.3966700]);
  const query = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=37.7876511, -122.3966700&aggregateHours=24&forecastDays=5&unitGroup=us&shortColumnNames=true&contentType=json&key=AEUZHSGZPPNFPVKQJ76RUXNSB';

  useEffect(() => {
    axios.get(query)
      .then((resData) => {
        const getData = {
          [location]: resData.data.locations[location].values,
          moonData: resData.data.locations[location].currentConditions.moonphase,
          sunset: resData.data.locations[location].currentConditions.sunset,
          sunrise: resData.data.locations[location].currentConditions.sunrise,
          latitude: resData.data.locations[location].latitude,
          longitude: resData.data.locations[location].longitude,
        };
        setData(getData);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div id="App">
      <Header location={location} setLocation={setLocation} setData={setData} />
      <div id="content">
        <div id="topRow">
          <h1>
            Today&nbsp;
            <span>
              (
              {location}
              )
            </span>
          </h1>
          <Today className="widget" data={data} location={location} />
          <Map className="widget" data={data} />
        </div>
        <div id="bottomRow">
          <h1>4-Day Forecast</h1>
          <FutureForecast data={data} location={location} />
        </div>
      </div>
    </div>
  );
}
