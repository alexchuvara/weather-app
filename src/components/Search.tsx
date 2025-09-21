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
            className="flex items-center justify-center gap-4 mb-8 transition-all duration-300"
        >
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city..."
                className="px-6 py-3 w-full max-w-xs rounded-xl bg-white/20 text-white text-lg placeholder-white/70 
                   focus:outline-none focus:ring-4 focus:ring-white/40 backdrop-blur-md transition-all duration-300"
            />
            <button
                type="submit"
                className="px-6 py-3 text-lg bg-white/20 text-white rounded-xl backdrop-blur-md 
                   hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
                Search
            </button>
        </form>
    );
};

export default Search;