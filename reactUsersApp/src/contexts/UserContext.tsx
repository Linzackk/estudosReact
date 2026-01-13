import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../types/User";
import { getUsers } from "../services/userService";

type UserContextType = {
    users: User[];
    loading: boolean;
    error: string | null;
    reloadUsers: () => Promise<void>;
};

export const UserContext = createContext<UserContextType>({
    users: [],
    loading: false,
    error: null,
    reloadUsers: async () => {}
})

type Props = {
    children: ReactNode;
};

export function UserProvider({ children }: Props) {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

async function loadUsers() {
    try {
        const data = await getUsers();
        setUsers(data)
    } catch {
        setError("Erro ao carregar usuários");
    } finally {
        setLoading(false);
    }
}

useEffect(() => {
    async function fetch() {
        await loadUsers();
    }
    fetch();
}, []);

    async function reloadUsers() {
        await loadUsers()
}

    return (
        <UserContext.Provider value={{users, loading, error, reloadUsers}}>
            {children}
        </UserContext.Provider>
    );
}