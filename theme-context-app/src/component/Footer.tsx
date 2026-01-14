import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { backgroundDark, backgroundLight } from "../utils/backgroundColors";

export function ThemeFooter() {
    const {themeColor} = useContext(ThemeContext);
    const footerBackground = themeColor  === "light" ? backgroundLight: backgroundDark;

    return (
        <footer style={{display: "flex", backgroundColor: footerBackground, height: 150, justifyContent: "center", alignItems: "center"}}>
        </footer>
    )
}