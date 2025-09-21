import React from "react";

interface WeatherData {
    city: string;
    temperature: number;
    description: string;
    icon: string;
};

interface Props {
    data: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-xl text-white w-80">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">{data.city}</h2>
                    <p className="text-sm capitalize">{data.description}</p>
                </div>
                <img
                    src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                    alt="weather icon"
                    className="w-16 h-16"
                />
            </div>
            <div className="mt-4 text-center">
                <p className="text-5xl font-semibold">{data.temperature}°C</p>
            </div>
        </div>
    );
};

export default WeatherCard;