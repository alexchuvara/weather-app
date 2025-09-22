import React from "react";
import { motion } from "framer-motion";

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
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/30 shadow-2xl text-white transition-all duration-300"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-4xl font-bold">{data.city}</h2>
                    <p className="text-lg capitalize opacity-90 mt-1 text-white dark:text-gray-200">{data.description}</p>
                </div>
                <img
                src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                alt="weather icon"
                className="w-24 h-24"
                />
            </div>
            <div className="mt-4 text-center">
                <p className="text-7xl font-bold">{data.temperature}°C</p>
            </div>
        </motion.div>
    );
};

export default WeatherCard;