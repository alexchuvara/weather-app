const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city: string) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();

    return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
    };
}