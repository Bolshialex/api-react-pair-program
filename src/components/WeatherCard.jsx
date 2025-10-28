import InfoCard from "./InfoCard";
import { TiWeatherCloudy } from "react-icons/ti";

function WeatherCard({ weatherInfo, city }) {
  return (
    <div className="weather-card">
      <div className="weather-icon">
        <TiWeatherCloudy className="icons" />
      </div>
      <h3 className="city-time"></h3>
      <h1 className="city-name"></h1>
      {/* <InfoCard weatherInfo={weatherInfo} /> */}
    </div>
  );
}

export default WeatherCard;
