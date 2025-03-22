import { User } from "../types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Ошибка загрузки пользователей");
    return response.json();
}

export async function fetchUserById(id: string): Promise<User> {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Ошибка загрузки пользователя");
    return response.json();
}