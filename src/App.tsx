import WeatherCard from "./components/WeatherCard";

const mockWeather = {
    city: "Glasgow",
    temperature: 18,
    description: "Cloudy",
    icon: "04d",
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 flex items-center justify-center p-6">
      <WeatherCard data={mockWeather} />
    </div>
  );
}

export default App;