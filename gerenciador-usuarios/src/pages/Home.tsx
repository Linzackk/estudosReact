import React from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";

const Home: React.FC = () => {
    const usuarios = [
        { id: "1", name: "Isaac" },
        { id: "2", name: "Maria" },
        { id: "3", name: "João" },
    ];

    return (
        <div>
            <h1>Home - Usuários</h1>

            <ul>
                {usuarios.map((user) => (
                    <UserCard key={user.id} id={user.id} name={user.name} />
                ))}
            </ul>
        </div>
    );
};

export default Home;