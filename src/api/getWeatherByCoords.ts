const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeatherByCoords(lat: number, lon: number) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather by coordinates");
    }

    const data = await response.json();

    return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
    };
}