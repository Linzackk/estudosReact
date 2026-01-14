import { ThemeContent } from "../component/Content";
import { ThemeFooter } from "../component/Footer";
import { ThemeHeader } from "../component/Header";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { backgroundLight, backgroundDark } from "../utils/backgroundColors";

export function ThemePages() {
    const {themeColor} = useContext(ThemeContext);
    const contentBackground = themeColor  === "light" ? backgroundLight: backgroundDark;

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh", backgroundColor: contentBackground}}>
            <ThemeHeader />
            <ThemeContent />
            <ThemeFooter  />
        </div>
    )
}