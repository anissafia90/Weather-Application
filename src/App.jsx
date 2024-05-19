// import { useState } from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {
  const { weather, Location, values } = useStateContext();

  // console.log(weather);

  return (
    <div className="w-100 h-100 px-5">
      <NavBar />
      <BackgroundLayout></BackgroundLayout>
      <main className="container-fluid d-flex flex-wrap py-3 px-5 align-items-center justify-content-center">
        <WeatherCard
          place={Location}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className="d-flex justify-content-center gap-4 flex-wrap w-60">
          {values?.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
