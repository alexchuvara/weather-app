import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 
             p-2 sm:p-2.5 bg-white/20 text-white rounded-full 
             hover:scale-110 active:scale-95 backdrop-blur-md transition"
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;