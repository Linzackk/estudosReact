import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { backgroundDark, backgroundLight, textColorDark, textColorLight } from "../utils/backgroundColors";

export function ThemeHeader() {
    const {themeColor} = useContext(ThemeContext);
    const headerText = themeColor === "light" ? "Theme Color Light": "Theme Color Dark";
    const textColor = themeColor === "light" ? textColorDark: textColorLight;
    const headerBackground = themeColor  === "light" ? backgroundLight: backgroundDark;

    return (
        <header style={{display: "flex", backgroundColor: headerBackground, height: 150, justifyContent: "center", alignItems: "center"}}>
            <h1 style={{color: textColor}}>{headerText}</h1>
        </header>
    )
}