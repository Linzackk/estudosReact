import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../types/User";
import { getUsers } from "../services/userService";

type UserContextType = {
    users: User[];
    loading: boolean;
    error: string | null;
};

export const UserContext = createContext<UserContextType>({
    users: [],
    loading: false,
    error: null,
});

type Props = {
    children: ReactNode;
};

export function UserProvider({ children }: Props) {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
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

        loadUsers();
    }, []);

    return (
        <UserContext.Provider value={{users, loading, error}}>
            {children}
        </UserContext.Provider>
    );
}