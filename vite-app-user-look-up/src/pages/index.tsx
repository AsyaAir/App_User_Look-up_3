// Файл HomePage - компонент главной страницы, которыq отображаются 
// в зависимости от маршрута в App.tsx.

// Главная страница, которая будет отображать список пользователей.
// •	Загрузка списка пользователей с API.
// •	При клике на имя пользователя, переходим на страницу 
//      с его подробной информацией через ссылку <Link to={/user/${user.id}}>.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const HomePage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link> {/* Ссылка на страницу пользователя */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomePage;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App'; // Импортирую App.tsx

// // Это точка входа, где рендерится приложение
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <React.StrictMode>
//         <App /> {/* Рендерю App.tsx */}
//     </React.StrictMode>
// );

// import { useEffect, useState } from "react";
// import { fetchUsers } from "@/api/users";
// import { User } from "@/types/user";
// import { UserCard } from "@/components/UserCard";

// export default function HomePage() {
//     const [users, setUsers] = useState<User[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         fetchUsers()
//             .then(setUsers)
//             .catch(() => setError("Ошибка загрузки данных"))
//             .finally(() => setLoading(false));
//     }, []);

//     if (loading) return <p>Загрузка...</p>;
//     if (error) return <p className="text-red-500">{error}</p>;

//     return (
//         <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {users.map((user) => (
//                 <UserCard key={user.id} user={user} />
//             ))}
//         </div>
//     );
// }