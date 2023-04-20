/*
const sampleData = {
  columns: {
    wdir: {
      id: 'wdir',
      name: 'Wind Direction',
      type: 2,
      unit: null,
    },
    uvindex: {
      id: 'uvindex',
      name: 'weather_uvindex',
      type: 2,
      unit: null,
    },
    latitude: {
      id: 'latitude',
      name: 'Latitude',
      type: 2,
      unit: null,
    },
    preciptype: {
      id: 'preciptype',
      name: 'weather_preciptype',
      type: 1,
      unit: null,
    },
    cin: {
      id: 'cin',
      name: 'weather_cin',
      type: 2,
      unit: null,
    },
    cloudcover: {
      id: 'cloudcover',
      name: 'Cloud Cover',
      type: 2,
      unit: null,
    },
    pop: {
      id: 'pop',
      name: 'Chance Precipitation (%)',
      type: 2,
      unit: null,
    },
    mint: {
      id: 'mint',
      name: 'Minimum Temperature',
      type: 2,
      unit: 'degF',
    },
    datetime: {
      id: 'datetime',
      name: 'Date time',
      type: 3,
      unit: null,
    },
    precip: {
      id: 'precip',
      name: 'Precipitation',
      type: 2,
      unit: 'in',
    },
    solarradiation: {
      id: 'solarradiation',
      name: 'Solar Radiation',
      type: 2,
      unit: null,
    },
    dew: {
      id: 'dew',
      name: 'Dew Point',
      type: 2,
      unit: 'degf',
    },
    humidity: {
      id: 'humidity',
      name: 'Relative Humidity',
      type: 2,
      unit: null,
    },
    longitude: {
      id: 'longitude',
      name: 'Longitude',
      type: 2,
      unit: null,
    },
    temp: {
      id: 'temp',
      name: 'Temperature',
      type: 2,
      unit: 'degf',
    },
    address: {
      id: 'address',
      name: 'Address',
      type: 1,
      unit: null,
    },
    maxt: {
      id: 'maxt',
      name: 'Maximum Temperature',
      type: 2,
      unit: 'degF',
    },
    visibility: {
      id: 'visibility',
      name: 'Visibility',
      type: 2,
      unit: 'mi',
    },
    wspd: {
      id: 'wspd',
      name: 'Wind Speed',
      type: 2,
      unit: 'mph',
    },
    severerisk: {
      id: 'severerisk',
      name: 'weather_severerisk',
      type: 2,
      unit: null,
    },
    solarenergy: {
      id: 'solarenergy',
      name: 'Solar Energy',
      type: 2,
      unit: null,
    },
    resolvedAddress: {
      id: 'resolvedAddress',
      name: 'Resolved Address',
      type: 1,
      unit: null,
    },
    heatindex: {
      id: 'heatindex',
      name: 'Heat Index',
      type: 2,
      unit: 'degf',
    },
    snowdepth: {
      id: 'snowdepth',
      name: 'Snow Depth',
      type: 2,
      unit: 'in',
    },
    sealevelpressure: {
      id: 'sealevelpressure',
      name: 'Sea Level Pressure',
      type: 2,
      unit: 'mb',
    },
    snow: {
      id: 'snow',
      name: 'Snow',
      type: 2,
      unit: 'in',
    },
    name: {
      id: 'name',
      name: 'Name',
      type: 1,
      unit: null,
    },
    wgust: {
      id: 'wgust',
      name: 'Wind Gust',
      type: 2,
      unit: 'mph',
    },
    conditions: {
      id: 'conditions',
      name: 'Conditions',
      type: 1,
      unit: null,
    },
    windchill: {
      id: 'windchill',
      name: 'Wind Chill',
      type: 2,
      unit: 'degf',
    },
    cape: {
      id: 'cape',
      name: 'weather_cape',
      type: 2,
      unit: null,
    },
  },
  remainingCost: 0,
  queryCost: 1,
  messages: null,
  locations: {
    94061: {
      stationContributions: null,
      values: [
        {
          wdir: 305.5,
          uvindex: 4.3,
          datetimeStr: '2023-04-19T00:00:00-07:00',
          preciptype: '',
          cin: 0.0,
          cloudcover: 3.6,
          pop: 1.0,
          mint: 47.0,
          datetime: 1681862400000,
          precip: 0.0,
          solarradiation: 427.5,
          dew: 38.6,
          humidity: 54.0,
          temp: 55.6,
          maxt: 61.1,
          visibility: 10.1,
          wspd: 12.3,
          severerisk: 10.0,
          solarenergy: 1.5,
          heatindex: null,
          snowdepth: 0.0,
          sealevelpressure: 1024.4,
          snow: 0.0,
          wgust: 21.9,
          conditions: 'Clear',
          windchill: 43.1,
          cape: 0.2,
        },
        {
          wdir: 281.7,
          uvindex: 3.0,
          datetimeStr: '2023-04-20T00:00:00-07:00',
          preciptype: '',
          cin: 0.0,
          cloudcover: 14.8,
          pop: 4.0,
          mint: 43.1,
          datetime: 1681948800000,
          precip: 0.0,
          solarradiation: 305.3,
          dew: 39.0,
          humidity: 59.6,
          temp: 53.7,
          maxt: 67.0,
          visibility: 10.1,
          wspd: 7.4,
          severerisk: 10.0,
          solarenergy: 1.1,
          heatindex: null,
          snowdepth: 0.0,
          sealevelpressure: 1025.9,
          snow: 0.0,
          wgust: 16.1,
          conditions: 'Clear',
          windchill: 39.5,
          cape: 0.0,
        },
        {
          wdir: 320.0,
          uvindex: 3.3,
          datetimeStr: '2023-04-21T00:00:00-07:00',
          preciptype: '',
          cin: 0.0,
          cloudcover: 7.7,
          pop: 0.0,
          mint: 47.9,
          datetime: 1682035200000,
          precip: 0.0,
          solarradiation: 328.4,
          dew: 44.7,
          humidity: 62.3,
          temp: 59.2,
          maxt: 74.9,
          visibility: 10.1,
          wspd: 5.8,
          severerisk: 32.5,
          solarenergy: 1.2,
          heatindex: null,
          snowdepth: 0.0,
          sealevelpressure: 1024.7,
          snow: 0.0,
          wgust: 17.2,
          conditions: 'Clear',
          windchill: 46.6,
          cape: 0.1,
        },
        {
          wdir: 293.8,
          uvindex: 2.9,
          datetimeStr: '2023-04-22T00:00:00-07:00',
          preciptype: '',
          cin: 0.0,
          cloudcover: 31.0,
          pop: 0.0,
          mint: 49.5,
          datetime: 1682121600000,
          precip: 0.0,
          solarradiation: 296.1,
          dew: 48.4,
          humidity: 70.7,
          temp: 58.4,
          maxt: 71.0,
          visibility: 10.1,
          wspd: 8.3,
          severerisk: 100.0,
          solarenergy: 1.1,
          heatindex: null,
          snowdepth: 0.0,
          sealevelpressure: 1014.9,
          snow: 0.0,
          wgust: 20.4,
          conditions: 'Partially cloudy',
          windchill: 48.0,
          cape: 0.5,
        },
        {
          wdir: 290.0,
          uvindex: 2.7,
          datetimeStr: '2023-04-23T00:00:00-07:00',
          preciptype: '',
          cin: 0.0,
          cloudcover: 26.7,
          pop: 0.0,
          mint: 49.7,
          datetime: 1682208000000,
          precip: 0.0,
          solarradiation: 273.6,
          dew: 47.8,
          humidity: 75.0,
          temp: 55.9,
          maxt: 65.9,
          visibility: 13.9,
          wspd: 12.2,
          severerisk: 10.0,
          solarenergy: 1.0,
          heatindex: null,
          snowdepth: 0.0,
          sealevelpressure: 1012.0,
          snow: 0.0,
          wgust: 24.2,
          conditions: 'Partially cloudy',
          windchill: 44.8,
          cape: 0.4,
        },
      ],
      id: '94061',
      address: '94061, USA',
      name: '94061',
      index: 0,
      latitude: 37.463911,
      longitude: -122.23396,
      distance: 0.0,
      time: 0.0,
      tz: 'America/Los_Angeles',
      currentConditions: {
        wdir: 324.0,
        temp: 58.7,
        sunrise: '2023-04-19T06:28:49-07:00',
        visibility: 9.9,
        wspd: 11.6,
        icon: 'clear-day',
        stations: '',
        heatindex: null,
        cloudcover: 25.0,
        datetime: '2023-04-19T13:09:52-07:00',
        precip: 0.0,
        moonphase: 0.0,
        snowdepth: null,
        sealevelpressure: 1025.0,
        dew: 38.0,
        sunset: '2023-04-19T19:47:57-07:00',
        humidity: 45.9,
        wgust: 16.1,
        windchill: null,
      },
      alerts: null,
    },
  },
};
*/

const sampleData = {
  94061: [
    {
      wdir: 305.5,
      uvindex: 4.3,
      datetimeStr: '2023-04-19T00:00:00-07:00',
      preciptype: '',
      cin: 0.0,
      cloudcover: 3.6,
      pop: 1.0,
      mint: 47.0,
      datetime: 1681862400000,
      precip: 0.0,
      solarradiation: 427.5,
      dew: 38.6,
      humidity: 54.0,
      temp: 55.6,
      maxt: 61.1,
      visibility: 10.1,
      wspd: 12.3,
      severerisk: 10.0,
      solarenergy: 1.5,
      heatindex: null,
      snowdepth: 0.0,
      sealevelpressure: 1024.4,
      snow: 0.0,
      wgust: 21.9,
      conditions: 'Clear',
      windchill: 43.1,
      cape: 0.2,
    },
    {
      wdir: 281.7,
      uvindex: 3.0,
      datetimeStr: '2023-04-20T00:00:00-07:00',
      preciptype: '',
      cin: 0.0,
      cloudcover: 14.8,
      pop: 4.0,
      mint: 43.1,
      datetime: 1681948800000,
      precip: 0.0,
      solarradiation: 305.3,
      dew: 39.0,
      humidity: 59.6,
      temp: 53.7,
      maxt: 67.0,
      visibility: 10.1,
      wspd: 7.4,
      severerisk: 10.0,
      solarenergy: 1.1,
      heatindex: null,
      snowdepth: 0.0,
      sealevelpressure: 1025.9,
      snow: 0.0,
      wgust: 16.1,
      conditions: 'Clear',
      windchill: 39.5,
      cape: 0.0,
    },
    {
      wdir: 320.0,
      uvindex: 3.3,
      datetimeStr: '2023-04-21T00:00:00-07:00',
      preciptype: '',
      cin: 0.0,
      cloudcover: 7.7,
      pop: 0.0,
      mint: 47.9,
      datetime: 1682035200000,
      precip: 0.0,
      solarradiation: 328.4,
      dew: 44.7,
      humidity: 62.3,
      temp: 59.2,
      maxt: 74.9,
      visibility: 10.1,
      wspd: 5.8,
      severerisk: 32.5,
      solarenergy: 1.2,
      heatindex: null,
      snowdepth: 0.0,
      sealevelpressure: 1024.7,
      snow: 0.0,
      wgust: 17.2,
      conditions: 'Clear',
      windchill: 46.6,
      cape: 0.1,
    },
    {
      wdir: 293.8,
      uvindex: 2.9,
      datetimeStr: '2023-04-22T00:00:00-07:00',
      preciptype: '',
      cin: 0.0,
      cloudcover: 31.0,
      pop: 0.0,
      mint: 49.5,
      datetime: 1682121600000,
      precip: 0.0,
      solarradiation: 296.1,
      dew: 48.4,
      humidity: 70.7,
      temp: 58.4,
      maxt: 71.0,
      visibility: 10.1,
      wspd: 8.3,
      severerisk: 100.0,
      solarenergy: 1.1,
      heatindex: null,
      snowdepth: 0.0,
      sealevelpressure: 1014.9,
      snow: 0.0,
      wgust: 20.4,
      conditions: 'Partially cloudy',
      windchill: 48.0,
      cape: 0.5,
    },
    {
      wdir: 290.0,
      uvindex: 2.7,
      datetimeStr: '2023-04-23T00:00:00-07:00',
      preciptype: '',
      cin: 0.0,
      cloudcover: 26.7,
      pop: 0.0,
      mint: 49.7,
      datetime: 1682208000000,
      precip: 0.0,
      solarradiation: 273.6,
      dew: 47.8,
      humidity: 75.0,
      temp: 55.9,
      maxt: 65.9,
      visibility: 13.9,
      wspd: 12.2,
      severerisk: 10.0,
      solarenergy: 1.0,
      heatindex: null,
      snowdepth: 0.0,
      sealevelpressure: 1012.0,
      snow: 0.0,
      wgust: 24.2,
      conditions: 'Partially cloudy',
      windchill: 44.8,
      cape: 0.4,
    },
  ],
  moonphase: 0.0,
  sunrise: '2023-04-19T06:28:49-07:00',
  sunset: '2023-04-19T19:47:57-07:00',
  latitude: 37.7876511,
  longitude: -122.3966700,
};

export default sampleData;
