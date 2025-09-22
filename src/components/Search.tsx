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
            className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center transition-all duration-300"
        >
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city..."
                className="px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg rounded-xl bg-white/20 
               text-white placeholder-white/70 focus:outline-none focus:ring-2 
               focus:ring-white/40 backdrop-blur-md w-full sm:max-w-xs transition"
            />
            <button
                type="submit"
                className="px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg bg-white/20 text-white 
               rounded-xl backdrop-blur-md hover:bg-white/30 hover:scale-105 active:scale-95 
               transition w-full sm:w-auto"
            >
                Search
            </button>
        </form>
    );
};

export default Search;