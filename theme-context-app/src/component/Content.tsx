import { ButtonChangeTheme } from "./ButtonChangeTheme";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { backgroundLight, backgroundDark } from "../utils/backgroundColors";

export function ThemeContent() {
    const {themeColor} = useContext(ThemeContext);
    const contentBackground = themeColor  === "light" ? backgroundLight: backgroundDark;

    return (
        <div style={{backgroundColor: contentBackground}}>
            <ButtonChangeTheme />
        </div>        
    ) 
}