import { useState } from "react";

export interface User {
    id: string;
    name: string;
}

export const useUsers = () => {
    const [users] = useState<User[]>([
        { id: "1", name: "Isaac" },
        { id: "2", name: "Maria" },
        { id: "3", name: "João" },
    ]);

    return { users } ;
}