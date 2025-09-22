const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const lang = navigator.language.slice(0, 2);

export async function getForecastByCoords(lat: number, lon: number) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch forecast by coordinates");
    }

    const data = await response.json();

    const daily = data.list.filter((entry: any) =>
        entry.dt_txt.includes("12:00:00")
    ).slice(0, 3);

    return daily.map((item: any) => ({
        date: item.dt_txt,
        temperature: Math.round(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
    }));
}