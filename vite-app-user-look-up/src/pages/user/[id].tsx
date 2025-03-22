// UserPage: эта страница будет показывать подробную информацию 
// о конкретном пользователе, используя его id.
// •	Страница с подробной информацией о пользователе, используя id из URL.
// •	Данные для пользователя загружаются по API 
//      с динамическим id в URL (/user/:id).

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const UserPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Получаем параметр id из URL
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await response.json();
                setUser(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching user:", error);
                setIsLoading(false);
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <div>User not found</div>
            )}
        </div>
    );
};

export default UserPage;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchUserById } from "@/api/users";
// import { User } from "@/types/user";

// export default function UserPage() {
//     const { id } = useParams<{ id: string }>();
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         if (!id) return;
//         fetchUserById(id)
//             .then(setUser)
//             .catch(() => setError("Ошибка загрузки пользователя"))
//             .finally(() => setLoading(false));
//     }, [id]);

//     if (loading) return <p>Загрузка...</p>;
//     if (error) return <p className="text-red-500">{error}</p>;
//     if (!user) return <p>Пользователь не найден</p>;

//     return (
//         <div className="p-6 max-w-lg mx-auto">
//             <h1 className="text-2xl font-bold">{user.name}</h1>
//             <p>Username: {user.username}</p>
//             <p>Email: {user.email}</p>
//             <p>Адрес: {user.address.street}, {user.address.city}</p>
//             <p>Телефон: {user.phone}</p>
//             <p>Вебсайт: <a href={`http://${user.website}`} className="text-blue-500 hover:underline">{user.website}</a></p>
//             <p>Компания: {user.company.name}</p>
//         </div>
//     );
// }