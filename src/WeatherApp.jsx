import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){

  let [weatherInfo, setWeatherInfo] = useState({
    city : "Delhi",
    feelsLike: 26.1,
    humidity : 21,
    temp: 26.98,
    tempMax : 26.98,
    tempMin : 26.98,
    weather : "haze"
  });

  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign : "center" }}>
      <h2>Weather App by Nikhil</h2>
      <SearchBox updateInfo = {updateInfo}/>
      <InfoBox info = {weatherInfo}/>
    </div>
  )
}