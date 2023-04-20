import React from 'react';

function ForecastDay({ dayData, moonphase }) {
  const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };
  const date = (new Date(dayData.datetime)).toLocaleDateString('en-US', dateOptions);
  let score = 0;

  switch (true) {
    case (dayData.cloudcover < 20):
      score += 3;
      break;
    case (dayData.cloudcover < 40):
      score += 2;
      break;
    case (dayData.cloudcover < 60):
      score += 1;
      break;
    default:
      break;
  }
  switch (true) {
    case (dayData.humidity < 45):
      score += 3;
      break;
    case (dayData.humidity < 55):
      score += 2;
      break;
    case (dayData.humidity < 65):
      score += 1;
      break;
    default:
      break;
  }
  switch (true) {
    case (dayData.visibility > 9):
      score += 3;
      break;
    case (dayData.visibility > 7):
      score += 2;
      break;
    case (dayData.visibility > 5):
      score += 1;
      break;
    default:
      break;
  }
  switch (true) {
    case (dayData.moonphase < 0.14 || dayData.moonphase > 0.88):
      score += 3;
      break;
    case (dayData.moonphase < 0.28 || dayData.moonphase > 0.73):
      score += 2;
      break;
    case (dayData.moonphase < 0.42 || dayData.moonphase > 0.57):
      score += 1;
      break;
    default:
      break;
  }

  return (
    <div className="forecastWidget">
      <small>{date}</small>
      <div>
        <h2>Great</h2>
        <h3>53°F</h3>
      </div>
      {/* <div className="stats">
        <img alt="Clear Sky" className="weatherIcon" src={clearSkyIcon} />
        <p>Clear skies</p>
        <img alt="Wind" className="weatherIcon" src={windIcon} />
        <p>ENE 9mph</p>
        <img alt="Sunset" className="weatherIcon" src={sunsetIcon} />
        <p>7:46PM</p>
        <img alt="Waxing cresent" className="weatherIcon" src={waxingCrescentIcon} />
        <p>Waxing crescent</p>
        <img alt="Humidity" className="weatherIcon" src={humidityIcon} />
        <p>76%</p>
        <img alt="Sunrise" className="weatherIcon" src={sunriseIcon} />
        <p>6:30AM</p>
      </div> */}
    </div>
  );
}

export default ForecastDay;
