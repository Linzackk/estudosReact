import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export function UsersPage() {
    const {users, loading, error, reloadUsers} = useContext(UserContext);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState<"asc" | "desc">("asc");

    function toggleOrder() {
        setOrder((prev) => (prev === "asc" ? "desc": "asc"));
    }

    if (loading) {
        return <h2>Carregando Usuários...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <button onClick={reloadUsers} disabled={loading}>
                {loading ? "Recarregando..." : "Recarregar Usuários"}
            </button>
            <h1>Lista de Usuários</h1>
            <input 
                type="text"
                placeholder="Buscar por nome..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={toggleOrder}>
                Ordenar: {order === "asc" ? "A - Z": "Z - A"}
            </button>

            <ul>
                {users.filter((user) =>
                        user.name.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) =>
                    order === "asc"
                        ? a.name.localeCompare(b.name)
                        : b.name.localeCompare(a.name)
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