import React from 'react'
import './weather.css'
const CurrentWeather = ({data}) => {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{data.city}</p>
          <p className='description'>{data.weather[0].description}</p>
        </div>
        <img src={`./images/${data.weather[0].icon}.png`} alt='' className='weather-icon' />
      </div>
      <div className='bottom'>
        <p className='temperature'>{Math.round(data.main.temp)}°C</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Details</span>
          </div>
          <div className='parameter-row '>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value pre1'>{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>{data.wind.speed} m/s</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>{data.main.humidity}%</span>
          </div>
          <div className='parameter-row pre'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>{data.main.pressure}hPa</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CurrentWeather