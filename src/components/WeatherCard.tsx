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
         <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-xl text-white">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">{data.city}</h2>
          <p className="text-base capitalize">{data.description}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="weather icon"
          className="w-20 h-20"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-6xl font-semibold">{data.temperature}°C</p>
      </div>
    </div>
    );
};

export default WeatherCard;