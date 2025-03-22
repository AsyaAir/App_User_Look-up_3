// Файл HomePage - компонент главной страницы, которыq отображаются 
// в зависимости от маршрута в App.tsx.

// Главная страница, которая будет отображать список пользователей.
// •	Загрузка списка пользователей с API.
// •	При клике на имя пользователя, переходим на страницу 
//      с его подробной информацией через ссылку <Link to={/user/${user.id}}>.

// Обновление компонента с использованием getServerSideProps
// Заменяю useEffect на серверный запрос с getServerSideProps,
// чтобы данные загружались на сервере перед рендерингом страницы.
// Это улучшает производительность и SEO, так как данные загружаются до того, 
// как страница отображается в браузере.
// Заменяю Link из react-router-dom на next/link
// В Next.js для маршрутизации нужно использовать компонент Link из next/link. 
// Он позволяет Next.js обрабатывать маршрутизацию без перезагрузки страницы.

import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Импортируем компонент Button из ShadCN UI

interface User {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
}

interface HomePageProps {
    users: User[];
}

const HomePage: React.FC<HomePageProps> = ({ users }) => {
    return (
        <div>
            <h1>Users List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <div key={user.id} className="border p-4 rounded shadow-md">
                        <h2 className="font-semibold text-lg">{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Company: {user.company.name}</p>
                        <Link href={`/user/${user.id}`} passHref>
                            <Button className="mt-4">
                                View Details
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Используем getServerSideProps для загрузки данных с сервера
export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json();

        return {
            props: {
                users: data,
            },
        };
    } catch (error) {
        console.error("Error fetching users:", error);

        return {
            props: {
                users: [],
            },
        };
    }
};

export default HomePage;