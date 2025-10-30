import Footer from "./components/Footer";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lon, setLon] = useState(122.3328);
  const [lat, setLat] = useState(47.6061);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [city, setCity] = useState("Seattle");

  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    async function getWeather(lat, lon, API_KEY) {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );

        return res.data;
      } catch (error) {
        console.error("Failed to load weather:", error);
        return null;
      }
    }

    async function fetchWeather() {
      const data = await getWeather(lat, lon, API_KEY);

      if (data) setWeatherInfo(data);
    }

    fetchWeather();
  }, [lat, lon, API_KEY]);

  const handleClick = async (e) => {
    e.preventDefault();

    const city = e.target.id;

    if (city === "seattle") {
      setLon(122);
      setLat(47);
      setCity("Seattle");
    } else if (city === "new-york") {
      setLon(74);
      setLat(40);
      setCity("New York");
    } else if (city === "paris") {
      setLon(2);
      setLat(48);
      setCity("Paris");
    } else if (city === "london") {
      setLon(0);
      setLat(51);
      setCity("London");
    } else if (city === "moscow") {
      setLon(37);
      setLat(55);
      setCity("Moscow");
    } else {
      setLon(114);
      setLat(22);
      setCity("Hong Kong");
    }
  };
  return (
    <>
      <Header />
      <div className="btn-container">
        <button
          type="submit"
          className="btn"
          id="seattle"
          onClick={handleClick}
        >
          Seattle
        </button>
        <button
          type="submit"
          className="btn"
          id="new-york"
          onClick={handleClick}
        >
          New York
        </button>
        <button type="submit" className="btn" id="paris" onClick={handleClick}>
          Paris
        </button>
        <button type="submit" className="btn" id="london" onClick={handleClick}>
          London
        </button>
        <button type="submit" className="btn" id="moscow" onClick={handleClick}>
          Moscow
        </button>
        <button
          type="submit"
          className="btn"
          id="hong-kong"
          onClick={handleClick}
        >
          Hong Kong
        </button>
      </div>
      <WeatherCard weatherInfo={weatherInfo} city={city} />
      <Footer />
    </>
  );
}

export default App;
