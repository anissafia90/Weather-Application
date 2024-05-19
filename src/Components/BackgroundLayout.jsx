import { useEffect, useState } from "react";
import { useStateContext } from "../Context";
//images
import Clear from "../assets/Clear.jpg";
import Fog from "../assets/fog.png";
import Cloudy from "../assets/Cloudy.jpg";
import Rainy from "../assets/Rainy.jpg";
import Snow from "../assets/snow.jpg";
import Stormy from "../assets/Stormy.jpg";
// import Sunny from "../assets/Sunny.jpg";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
      } else if (
        imageString.toLowerCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes("snow")) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes("fog")) {
        setImage(Fog);
      } else if (
        imageString.toLowerCase().includes("thunder") ||
        imageString.toLowerCase().includes("storm")
      ) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  return (
    <img
      src={image}
      alt="weather_image"
      className="position-fixed start-0 top-0 w-100 h-100"
      style={{ zIndex: -10 }}
    />
  );
};

export default BackgroundLayout;
