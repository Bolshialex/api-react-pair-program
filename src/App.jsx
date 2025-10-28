import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lon, setLon] = useState(122.3328);
  const [lat, setLat] = useState(47.6061);
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [city, setCity] = useState("Seattle");

  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    async function getWeather(lat, lon, APIkey) {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`
        );

        return res.data;
      } catch (error) {
        console.error("Failed to load weather:", error);
      }
    }

    setWeatherInfo(getWeather(lat, lon, API_KEY));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.id;
    if (city === "seattle") {
      setLon(122.3328);
      setLat(47.6061);
      setCity("Seattle");
    } else if (city === "new-york") {
      setLon(74.006);
      setLat(40.7128);
      setCity("New York");
    } else if (city === "paris") {
      setLon(2.3514);
      setLat(48.8575);
      setCity("Paris");
    } else if (city === "london") {
      setLon(0.1276);
      setLat(51.5072);
      setCity("London");
    } else if (city === "moscow") {
      setLon(37.6151);
      setLat(55.7569);
      setCity("Moscow");
    } else {
      setLon(114.1694);
      setLat(22.3193);
      setCity("Hong Kong");
    }
  };
  return (
    <>
      <Header />
      <div className="btn-container">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn" id="seattle">
            Seattle
          </button>
          <button type="submit" className="btn" id="new-york">
            New York
          </button>
          <button type="submit" className="btn" id="paris">
            Paris
          </button>
          <button type="submit" className="btn" id="london">
            London
          </button>
          <button type="submit" className="btn" id="moscow">
            Moscow
          </button>
          <button type="submit" className="btn" id="hong-kong">
            Hong Kong
          </button>
        </form>
      </div>
      <WeatherCard weatherInfo={(weatherInfo, city)} />
      <Footer />
    </>
  );
}

export default App;
