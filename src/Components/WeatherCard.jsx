/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,

  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className="card w-22rem h-30rem p-4 my-3">
      <div className="d-flex justify-content-center align-items-center gap-4 mt-8 mb-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-weight-bold fs-5 d-flex justify-content-center align-items-center">
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-weight-bold text-center fs-4">{place}</div>
      <div className="w-100 d-flex justify-content-between align-items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>
      <div className="w-100 d-flex justify-content-between align-items-center mt-4 gap-4">
        <div className="flex-1 text-center p-2 font-weight-bold bg-primary shadow rounded">
          Wind Speed{" "}
          <span className="font-weight-normal">{windspeed} km/h</span>
        </div>
        <div className="flex-1 text-center p-2 font-weight-bold rounded bg-success">
          Humidity{" "}
          <span className="font-weight-normal">{humidity} gm/m&#179;</span>
        </div>
      </div>
      <div className="w-100 p-3 mt-4 d-flex justify-content-between align-items-center">
        <p className="font-weight-semibold fs-5">Heat Index</p>
        <p className="fs-5">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className="bg-slate" />
      <div className="w-100 p-4 d-flex justify-content-center align-items-center fs-3 font-weight-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
