import React from 'react'
import './current-weather.css'
const CurrentWeather = ({data}) => {

  function roundToOneDecimal(number) {
    return Number(number.toFixed(1));
  }
  
  return (
    <div className="weather">
      <div className="top">
        <div className="details">
          <div className="city--name">{data.city}</div>
          <div className="weather--condition">
            {data.weather[0].description}
          </div>
        </div>
        <div className="img">
          <img
            src={`icons/${data.weather[0].icon}.png`}
            className="weather-icon"
            alt="weather description"
          />
        </div>
      </div>

      <div className="bottom">
        <div className="temperature">{roundToOneDecimal(data.main.temp)}°C</div>

        <div className="temp--details">
          <div className="temp--parameters">
            <div className="temp--parameter">Feels Like</div>
            <div className="temp--parameter--value">
              {roundToOneDecimal(data.main.feels_like)}°C
            </div>
          </div>

          <div className="temp--parameters">
            <div className="temp--parameter">Wind</div>
            <div className="temp--parameter--value">{data.wind.speed} m/s</div>
          </div>

          <div className="temp--parameters">
            <div className="temp--parameter">Humidity</div>
            <div className="temp--parameter--value">{data.main.humidity}%</div>
          </div>

          <div className="temp--parameters">
            <div className="temp--parameter">Pressure</div>
            <div className="temp--parameter--value">{data.main.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather