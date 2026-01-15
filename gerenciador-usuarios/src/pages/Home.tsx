import React, { useCallback } from "react";
import UserCard from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";

const Home: React.FC = () => {
    const favoriteUser = useCallback(() => {
        console.log("Usuario favoritado")
    }, []);

    const { users } = useUsers();

    return (
        <div>
            <h1>Home - Usuários</h1>

            <ul>
                {users.map((user) => (
                    <UserCard 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        onFavorite={favoriteUser} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default Home;