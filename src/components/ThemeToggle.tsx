import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="absolute top-6 right-6 z-20 p-2 bg-white/20 text-white rounded-full 
                 hover:scale-110 active:scale-95 backdrop-blur-md transition"
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;