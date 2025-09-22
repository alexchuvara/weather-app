import React, { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!city.trim()) return;
        onSearch(city.trim());
        setCity("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-300"
        >
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city..."
                className="w-full sm:w-[240px] h-12 px-5 rounded-xl text-base bg-white/20 text-white 
               placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
            />
            <button
                type="submit"
                className="w-full sm:w-[120px] h-12 text-base bg-white/20 text-white rounded-xl 
               backdrop-blur-md hover:bg-white/30 hover:scale-105 active:scale-95 transition-all"
            >
                Search
            </button>
        </form>
    );
};

export default Search;