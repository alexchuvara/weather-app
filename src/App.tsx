import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";
import { getWeather } from "./api/getWeather";

const App = () => {
  const [weather, setWeather] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleSearch = async (city: string) => {
    try {
      setError(null);
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Search onSearch={handleSearch} />
        {error && <p className="text-red-200 mb-4">{error}</p>}
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
};


export default App;