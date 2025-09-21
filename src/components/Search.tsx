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
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city..."
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition"
            >
                Search
            </button>
        </form>
    );
};

export default Search;