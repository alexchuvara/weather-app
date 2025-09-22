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
            className="w-full max-w-md sm:max-w-lg md:max-w-xl xl:max-w-2xl
                bg-white/10 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl 
                border border-white/30 shadow-2xl text-white transition-all duration-300"
        >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{data.city}</h2>
                    <p className="text-base sm:text-lg capitalize opacity-90 mt-1 text-white dark:text-gray-200">{data.description}</p>
                </div>
                <img
                src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                alt="weather icon"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                />
            </div>
            <div className="mt-6 text-center">
                <p className="text-5xl sm:text-6xl md:text-7xl font-semibold">{data.temperature}°C</p>
            </div>
        </motion.div>
    );
};

export default WeatherCard;