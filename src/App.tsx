import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";
import ThemeToggle from "./components/ThemeToggle";
import Forecast from "./components/Forecast";
import { getWeather } from "./api/getWeather";
import { getWeatherByCoords } from "./api/getWeatherByCoords";
import { getForecast } from "./api/getForecast";
import { getForecastByCoords } from "./api/getForecastByCoords";



const App = () => {
  const [weather, setWeather] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            setIsLoading(true);
            const data = await getWeatherByCoords(
              position.coords.latitude,
              position.coords.longitude
            );
            const forecastData = await getForecastByCoords(
              position.coords.latitude,
              position.coords.longitude
            );
            setWeather(data);
            setForecast(forecastData);
          } catch (err) {
            console.error("Error retrieving weather by coordinates", err);
          } finally {
            setIsLoading(false);
          }
        },
        (error) => {
          console.warn("The user has disabled geolocation:", error.message);
        }
      );
    }
  }, []);

  const handleSearch = async (city: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getWeather(city);
      const forecastData = await getForecast(city);
      setWeather(data);
      setForecast(forecastData);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
      setForecast([]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="relative min-h-dvh overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-800 dark:from-gray-900 dark:to-black flex items-center justify-center py-6">
      <ThemeToggle />
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none bg-white/10 dark:bg-white/5">
        <div className="absolute w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] -top-24 -left-24 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -bottom-28 -right-28 animate-pulse delay-500" />
        <div className="absolute w-[300px] h-[300px] bg-white/15 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-1000" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 max-w-screen-lg mx-auto z-10">
        <div className="flex flex-col items-center">
          <div className="mt-12 xs:mt-0 sm:mt-0 w-full">
            <Search onSearch={handleSearch} />
          </div>
          {error && <p className="text-red-200 mb-4">{error}</p>}
          {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
          ) : weather ? (
            <>
              <div className="w-full flex justify-center">
                <WeatherCard data={weather} />
              </div>
                <Forecast forecast={forecast} />
            </>
          ) : null}
        </div>  
      </div>
    </div>
  );
};


export default App;