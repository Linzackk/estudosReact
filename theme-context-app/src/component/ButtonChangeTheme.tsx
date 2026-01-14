import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { backgroundDark, backgroundLight, textColorDark, textColorLight, backgroundButtonLight, backgroundButtonDark } from "../utils/backgroundColors";

export function ButtonChangeTheme() {
    const {themeColor, changeThemeColor} = useContext(ThemeContext);
    const buttonBackgroundColor = themeColor  === "light" ? backgroundButtonDark : backgroundButtonLight;
    const backgroundColor = themeColor === "light" ? backgroundLight: backgroundDark
    const buttonTextColor = themeColor === "light" ? textColorLight : textColorDark;
    const buttonText = themeColor === "light" ? "Alterar para Escuro": "Alterar para Claro"
    const buttonOutlineColor = buttonTextColor;

    return (
        <div style={{display: "flex", justifyContent: "center", backgroundColor: backgroundColor}}>
            <button onClick={changeThemeColor}
                    style={{fontSize: 30, color: buttonTextColor, backgroundColor: buttonBackgroundColor, padding: 30, borderRadius: 15, width: 350}}
            >
                {buttonText}
            </button>
        </div>
    )
}