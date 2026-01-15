import React, { useContext } from "react";
import UserCard from "../components/UserCard";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites: React.FC = () => {
    const { favorites, removeFavorite } = useContext(FavoritesContext);

    return (
        <div>
            <h1>Usuários Favoritados</h1>
            {favorites.length === 0 ? (
                <p>Nenhum usuário favoritado.</p>
            ) : (
                <ul>
                    {favorites.map((user) => (
                        <UserCard
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        isFavorite={true}
                        onFavorite={() => removeFavorite(user.id)}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
};

export default Favorites