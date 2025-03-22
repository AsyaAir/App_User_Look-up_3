import { User } from '@/types/user'; // Импортирую User из user.ts

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Получение списка пользователей, который будет отображаться 
// на главной странице в виде карточек
export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Ошибка загрузки пользователей");
    return response.json();
}

// Получение данных конкретного пользователя по ID для страницы пользователя
export async function fetchUserById(id: string): Promise<User> {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Ошибка загрузки пользователя");
    return response.json();
}