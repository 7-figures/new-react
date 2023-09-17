import  './App.css';
import CurrentWeather from './Components/Current-weather/Current-weather';
import Search from "./Components/Search/Search";
import { useState } from 'react';
import { WEATHER_API_URL, WEATHER_API_kEY } from './Api'
import Forcast from './Components/Forcast/Forcast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForcast] = useState(null);
  const handleOnSearchChange = (searchData)=>{
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=${WEATHER_API_kEY}&units=metric`);
    const WeatherForcast = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&exclude={part}&appid=${WEATHER_API_kEY}&units=metric`);
  Promise.all([currentWeatherFetch, WeatherForcast])
  .then(async (response) =>{
    const weatherResponse = await response[0].json();
    const forecastResponse = await response[1].json();
    setCurrentWeather({city: searchData.label, ...weatherResponse});
    setForcast({city: searchData.label, ...forecastResponse});
  })
  .catch((err) =>console.log(err));
  }
  console.log(currentWeather);
  console.log(forcast);
  return (
    <div className="container">
<Search onSearchChange = {handleOnSearchChange}/>
{currentWeather && <CurrentWeather data={currentWeather}/>}
    {forcast && < Forcast data={forcast}/>}
    </div>
  );
}

export default App;
