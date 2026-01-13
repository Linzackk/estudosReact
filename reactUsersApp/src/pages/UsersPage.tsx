import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { ReloadUsersButton } from "../components/ReloadUserButton";
import { SearchInput } from "../components/SearchInput";
import { OrderToggleButton } from "../components/OrderToggleButton";
import { UserTitle } from "../components/UserTitle";
import { ListUsers } from "../components/ListUsers";

export function UsersPage() {
    const {users, loading, error} = useContext(UserContext);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState<"asc" | "desc">("asc");
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    const sortedUsers = filteredUsers.sort((a, b) => 
                    order === "asc"
                        ? a.name.localeCompare(b.name)
                        : b.name.localeCompare(a.name)
                )

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
            <ReloadUsersButton />
            <UserTitle />
            <SearchInput searchValue={search} setSearch={setSearch} />
            <OrderToggleButton order={order} toggleOrder={toggleOrder}/>
            <ListUsers users={sortedUsers}/>
        </div>
    );
}