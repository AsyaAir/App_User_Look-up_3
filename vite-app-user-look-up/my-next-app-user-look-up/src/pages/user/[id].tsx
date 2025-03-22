// UserPage: эта страница будет показывать подробную информацию 
// о конкретном пользователе, используя его id.
// •	Страница с подробной информацией о пользователе, используя id из URL.
// •	Данные для пользователя загружаются по API 
//      с динамическим id в URL (/user/:id).

// При использовании getServerSideProps, 
// состояние загрузки данных уже обрабатывается на сервере, 
// поскольку данные загружаются до рендеринга страницы.
// Для добавления клиентской обработки состояния загрузки, 
// использую хук useState и useEffect, 
// чтобы обновить состояние страницы после загрузки данных.

// Использование getServerSideProps
// Вместо использования useEffect, перенесла логику получения данных 
// на сервер с помощью getServerSideProps. 
// Это позволяет получить данные до рендеринга страницы, 
// что улучшает производительность и SEO.

// Обработка ошибок и загрузки
// Добавляю обработку ошибок в getServerSideProps. 
// Если запрос не удается, возвращается ошибка “Failed to fetch user data”, 
// которая отображается на странице.
// Если пользователь не найден, возвращается сообщение “User not found”.

// Работа с параметром маршрута в Next.js
// Использую context.params для получения id пользователя из динамического маршрута. 
// В Next.js для динамических маршрутов используется файл с именем [id].tsx.

// Отображение данных
// На странице отображаются все данные пользователя, такие как имя, email, адрес, 
// телефон и другие. Если данные отсутствуют, выводится сообщение об ошибке.


import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"; // Импортирую компонент Button из ShadCN UI

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
    };
    phone: string;
    website: string;
    company: {
        name: string;
    };
}

interface UserPageProps {
    user: User | null;
    error: string | null;
}

const UserPage: React.FC<UserPageProps> = ({ user, error }) => {
    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <Button>Go Back</Button>
        </div>
    );
};

// Серверный запрос для получения данных пользователя
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("User not found");
        }
        const user: User = await response.json();

        return {
            props: { user, error: null },
        };
    } catch (error) {
        console.error(error);
        return {
            props: { user: null, error: "Failed to fetch user data" },
        };
    }
};

export default UserPage;