import React from "react";

interface ForecastItem {
    date: string;
    temperature: number;
    description: string;
    icon: string;
}

interface Props {
    forecast: ForecastItem[];
}

const Forecast: React.FC<Props> = ({ forecast }) => {
    const getWeekday = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(undefined, { weekday: "short" });
    };

    return (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            {forecast.map((day, index) => (
                <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg text-center"
                >
                    <p className="text-lg font-semibold">{getWeekday(day.date)}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt="icon"
                        className="w-16 h-16 mx-auto"
                    />
                    <p className="text-2xl font-bold">{day.temperature}°C</p>
                    <p className="text-sm capitalize">{day.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Forecast;