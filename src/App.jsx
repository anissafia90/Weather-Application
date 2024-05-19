import "./App.css";
import NavBar from "./Components/NavBar";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {
  const { weather, location, values } = useStateContext(); // Note: location is used instead of Location

  console.log(weather);

  return (
    <div className="w-100 h-100 text-white px-3">
      <NavBar />
      <BackgroundLayout />
      <main className="container-fluid d-flex flex-wrap py-4 px-5 align-items-center justify-content-center">
        <WeatherCard
          place={location} // Changed to location
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
