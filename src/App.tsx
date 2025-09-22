import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";
import { getWeather } from "./api/getWeather";
import ThemeToggle from "./components/ThemeToggle";

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
    <div className="relative min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 dark:from-gray-900 dark:to-black flex items-center justify-center p-6 overflow-hidden">
      <ThemeToggle />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none bg-white/10 dark:bg-white/5">
        <div className="absolute w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] bottom-[-120px] right-[-120px] animate-pulse delay-500" />
        <div className="absolute w-[300px] h-[300px] bg-white/15 rounded-full blur-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-1000" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto z-10">
        <div className="flex flex-col items-center">
          <Search onSearch={handleSearch} />
          {error && <p className="text-red-200 mb-4">{error}</p>}
          {weather && (
            <div className="w-full flex justify-center">
              <WeatherCard data={weather} />
            </div>
          )}
        </div>  
      </div>
    </div>
  );
};


export default App;