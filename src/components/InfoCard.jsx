import React from "react";

function InfoCard({ weatherInfo }) {
  let [curTempetureType, setCurTempetureType] = React.useState(0);
  let [windSpeedType, setWindSpeedType] = React.useState(0);

  function tempertureFlipper() {
    if (curTempetureType == 0) {
      setCurTempetureType(1);
    } else {
      setCurTempetureType(0);
    }
  }

  function windSpeedFlipper() {
    if (windSpeedType == 0) {
      setWindSpeedType(1);
    } else {
      setWindSpeedType(0);
    }
  }

  return (
    <div className="smallerInfo">
      <div onClick={tempertureFlipper} id="curTempeture">
        {weatherInfo}
      </div>
      <div onClick={windSpeedFlipper} id="windSpeed"></div>
      <div id="humidity">{weatherInfo.current.humidity}</div>
      <div id="pressure">{weatherInfo.current.pressure}</div>
    </div>
  );
}

export default InfoCard;
