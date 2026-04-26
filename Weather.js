import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Weather() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [chartData, setChartData] = useState(null);

  const API_KEY = "YOUR_API_KEY";

  const getWeather = async () => {
    try {
      // Current weather
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city + 
        "&appid=" + API_KEY + 
        "&units=metric"
      );

      setTemp(res.data.main.temp);

      // Forecast for chart
      const forecast = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" 
        + city + 
        "&appid=" + API_KEY + 
        "&units=metric"
      );

      const temps = forecast.data.list.slice(0, 5).map(item => item.main.temp);
      const labels = forecast.data.list.slice(0, 5).map(item => item.dt_txt);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Temperature",
            data: temps
          }
        ]
      });

    } catch {
      alert("City not found");
    }
  };

  return (
    <div>
      <input
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {/* Current Weather */}
      {temp && <h2>Temperature: {temp} °C</h2>}

      {/* Graph */}
      {chartData && <Line data={chartData} />}
    </div>
  );
}

export default Weather;