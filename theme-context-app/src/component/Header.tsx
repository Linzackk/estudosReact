import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeHeader() {
    const {themeColor} = useContext(ThemeContext);
    const headerText = themeColor === "light" ? "Theme Color Light": "Theme Color Dark";
    const textColor = themeColor === "light" ? "#F8F8F8": "#000000"
    const headerBackground = themeColor  === "light" ? "#fff4ff": "#0e0e0e"

    return (
        <header style={{backgroundColor: headerBackground}}>
            <h2 style={{color: textColor}}>{headerText}</h2>
        </header>
    )
}