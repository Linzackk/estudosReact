import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export function UsersPage() {
    const {users, loading, error} = useContext(UserContext);
    const [search, setSearch] = useState("");

    if (loading) {
        return <h2>Carregando Usuários...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <input 
                type="text"
                placeholder="Buscar por nome..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {users.filter((user) =>
                        user.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}