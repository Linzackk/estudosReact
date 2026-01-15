import React, {createContext, useState, ReactNode, useCallback } from "react";
import { User } from "../hooks/useUsers";

interface FavoritesContextProp {
    favorites: User[];
    addFavorite: (user: User) => void;
    removeFavorite: (id: string) => void;
}

interface FavoritesProviderProp {
    children: ReactNode;
}

export const FavoritesContext = createContext<FavoritesContextProp>({} as FavoritesContextProp)

export const FavoritesProvider: React.FC<FavoritesProviderProp> = ({ children }) => {
    const [favorites, setFavorites] = useState<User[]>([]);

    const addFavorite = useCallback((user: User) => {
        setFavorites((prev) => {
            if (prev.find((u) => u.id === user.id)) return prev;
            return [...prev, user];
        });
    }, []);

    const removeFavorite = useCallback((id: string) => {
        setFavorites((prev) => prev.filter((u) => u.id !== id));
    }, []);
    
    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}