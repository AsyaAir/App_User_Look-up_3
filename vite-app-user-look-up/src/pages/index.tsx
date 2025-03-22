// Файл HomePage - компонент главной страницы, которыq отображаются 
// в зависимости от маршрута в App.tsx.

// Главная страница, которая будет отображать список пользователей.
// •	Загрузка списка пользователей с API.
// •	При клике на имя пользователя, переходим на страницу 
//      с его подробной информацией через ссылку <Link to={/user/${user.id}}>.

// Добавила состояние query, чтобы отслеживать текст поискового запроса.
// Компонент SearchBar теперь находится внутри HomePage и передается пропс query 
// для отображения текущего значения поиска. Также, через пропс onSearchChange, 
// обновляется состояние query при изменении текста в поле ввода.
// В переменную filteredUsers записывается результат фильтрации пользователей. 
// Используется метод filter(), чтобы отфильтровать пользователей по имени на основе введенного поискового запроса

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"; // Импортируем компонент Button из ShadCN UI
import SearchBar from '@/components/ui/SearchBar'; // Импортируем компонент поиска

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
    const [query, setQuery] = useState<string>(''); // Состояние для запроса поиска

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

    // Фильтрация пользователей по поисковому запросу
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h1>Users List</h1>
            {/* Добавляем компонент SearchBar */}
            <SearchBar query={query} onSearchChange={setQuery} />

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredUsers.map((user) => (
                        <div key={user.id} className="border p-4 rounded shadow-md">
                            <h2 className="font-semibold text-lg">{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Company: {user.company.name}</p>
                            <Link to={`/user/${user.id}`}>
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