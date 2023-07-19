
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/current-weather';
import { useState } from 'react';

import Forecast from './components/forecast/Forecast.jsx' 
import { weatherApiUrl , weatherApiKey} from './Api.js'

function App() {
//  const currentweatherApi = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'
  const [currentWeatherForecastData , setCurrentWeatherForecastData] = useState(null)

  const [dailyWeatherForecastData , setDailyWeatherForecastData] = useState(null)


  const handleOnSearchChange =(searchData)=>{

    console.log(searchData.value.split(" "))

    const [lat , lon] = searchData.value.split(" ");
    console.log(lat)
    console.log(lon)
    const currentWeatherFetch = fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`);
    const dailyWeatherFetch = fetch(`${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`);


    Promise.all([currentWeatherFetch,dailyWeatherFetch])
       .then(async (response)=>{
           const currentWeatherForecastResponse = await response[0].json();
           const dailyWeatherForecastResponse = await response[1].json();

           setCurrentWeatherForecastData({city: searchData.label , ...currentWeatherForecastResponse})
           setDailyWeatherForecastData({city:searchData.label, ...dailyWeatherForecastResponse})
       })
       .catch((err)=>console.log(err))

  }
console.log(currentWeatherForecastData)
console.log(dailyWeatherForecastData)
  
  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
      {currentWeatherForecastData && < CurrentWeather data={currentWeatherForecastData}/>} 
      {dailyWeatherForecastData &&  <Forecast data={dailyWeatherForecastData}/>} 
    </div>
  );
}

export default App;
