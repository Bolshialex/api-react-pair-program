import InfoCard from "./InfoCard";
import { TiWeatherCloudy } from "react-icons/ti";

function WeatherCard({ weatherInfo, buttonInfo }) {
  return (
    <div className="weather-card">
      <div className="weather-icon">
        <TiWeatherCloudy className="icons" />
      </div>
      <h3 className="city-time">{new Date(weatherInfo.current.dt * 1000)}</h3>
      <h1 className="city-name">{buttonInfo.city}</h1>
      <InfoCard />
    </div>
  );
}

export default WeatherCard;
