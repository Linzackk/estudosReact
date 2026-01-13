import { User } from "../types/User";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers(): Promise<User[]> {
    // await sleep(2000);
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
    }

    const data: User[] = await response.json();
    return data;
}