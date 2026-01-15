import { useState } from "react";
import { User } from "./useUsers";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<User[]>([]);

    const addFavorite = (user: User) => {
        setFavorites((prev) => {
            if (prev.find((u) => u.id === user.id)) return prev;
            return [...prev, user];
        });
    };

    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((u) => u.id !== id));
    };

    return {favorites, addFavorite, removeFavorite}
}