// Файл HomePage - компонент главной страницы, которыq отображаются 
// в зависимости от маршрута в App.tsx.

// Главная страница, которая будет отображать список пользователей.
// •	Загрузка списка пользователей с API.
// •	При клике на имя пользователя, переходим на страницу 
//      с его подробной информацией через ссылку <Link to={/user/${user.id}}>.

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"; // Импортируем компонент Button из ShadCN UI

interface User {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <div key={user.id} className="border p-4 rounded shadow-md">
                            <h2 className="font-semibold text-lg">{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Company: {user.company.name}</p>
                            <Link to={`/user/${user.id}`}>
                                {/* Кнопка ShadCN UI. Внутри карточки, мы заменяем ссылку на кнопку ShadCN UI, обернув ее в компонент Link для маршрутизации.*/}
                                <Button className="mt-4">
                                    View Details
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;