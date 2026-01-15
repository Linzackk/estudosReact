import React, { useCallback } from "react";
import UserCard from "../components/UserCard";
import { useUsers, User } from "../hooks/useUsers";
import { useFavorites } from "../hooks/useFavorites";

const Home: React.FC = () => {
    const { users } = useUsers();
    const { addFavorite, favorites, removeFavorite } = useFavorites();

    const favoriteUser = useCallback(() => {
        console.log("Usuario favoritado")
    }, []);

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
                    />
                ))}
            </ul>
        </div>
    );
};

export default Home;