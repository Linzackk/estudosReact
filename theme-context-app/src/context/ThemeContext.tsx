import { createContext, ReactNode, useState } from "react";

type ThemeContextType = {
    themeColor: "light" | "dark";
    changeThemeColor: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    themeColor: "light",
    changeThemeColor: () => {}
});

type Props = {
    children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
    const [themeColor, setThemeColor] = useState<"light" | "dark">("light");

    function changeThemeColor() {
        setThemeColor(
            themeColor === "light" ? "dark": "light"
        )
    }

    return (
        <ThemeContext.Provider value={{themeColor, changeThemeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}