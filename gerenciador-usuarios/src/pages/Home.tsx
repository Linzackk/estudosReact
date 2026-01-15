import React, { useCallback, useContext, useMemo } from "react";
import UserCard from "../components/UserCard";
import { useUsers, User } from "../hooks/useUsers";
import { FavoritesContext } from "../context/FavoritesContext";

const Home: React.FC = () => {
    const { users } = useUsers();
    const { addFavorite, favorites, removeFavorite } = useContext(FavoritesContext);

    const toggleFavorite = useCallback(
        (user: User) => {
            if (favorites.find((u) => u.id === user.id)) {
                removeFavorite(user.id)
            } else {
                addFavorite(user);
            }
        },
        [favorites, addFavorite, removeFavorite]
    );

    const favoritesIds = useMemo(() => {
        return new Set(favorites.map((u) => u.id));
    }, [favorites]);

    return (
        <div>
            <h1>Home - Usuários</h1>
            <ul>
                {users.map((user) => (
                    <UserCard 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        onFavorite={() => toggleFavorite(user)}
                        isFavorite={favoritesIds.has(user.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Home;