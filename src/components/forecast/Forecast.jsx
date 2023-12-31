import React from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Forecast = ({ data }) => {
  console.log(data);
  const week_days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const currentDay = new Date().getDay();

  const forecastDays = week_days
    .splice(currentDay, week_days.length)
    .concat(week_days.splice(0, currentDay));

  console.log(forecastDays);
  return (
    <div>
      <label>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily--item">
                  <img
                    className="small--icon"
                    src={`icons/${item.weather[0].icon}.png`}
                    alt=""
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="temp">{Math.round(item.main.temp)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily--details--grid">
                <div className="daily--details--grid--item">
                  <label>Pressure: </label>
                  <label>{item.main.pressure} hPa</label>
                </div>

                <div className="daily--details--grid--item">
                  <label>Humidity: </label>
                  <label>{item.main.humidity} %</label>
                </div>

                <div className="daily--details--grid--item">
                  <label>Clouds: </label>
                  <label>{item.clouds.all} %</label>
                </div>

                <div className="daily--details--grid--item">
                  <label>Wind Speed: </label>
                  <label>{item.wind.speed} m/s</label>
                </div>

                <div className="daily--details--grid--item">
                  <label>Sea Level: </label>
                  <label>{item.main.sea_level} m</label>
                </div>

                <div className="daily--details--grid--item">
                  <label>Feels Like: </label>
                  <label>{Math.round(item.main.feels_like)}°</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
