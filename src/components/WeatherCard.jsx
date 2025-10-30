import InfoCard from "./InfoCard";
import { TiWeatherCloudy } from "react-icons/ti";

function WeatherCard({ weatherInfo, city }) {
  console.log(weatherInfo);
  const unixTimestamp = weatherInfo.dt;
  const dateObject = new Date(unixTimestamp * 1000);
  const formattedPST = dateObject.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="weather-card">
      <div className="weather-icon">
        <TiWeatherCloudy className="icons" />
      </div>
      <h3 className="city-time">{formattedPST}</h3>
      <h1 className="city-name">{city}</h1>
      {/* <InfoCard weatherInfo={weatherInfo} /> */}
    </div>
  );
}

export default WeatherCard;
