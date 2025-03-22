import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "@/api/users";
import { User } from "@/types/user";

export default function UserPage() {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;
        fetchUserById(id)
            .then(setUser)
            .catch(() => setError("Ошибка загрузки пользователя"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!user) return <p>Пользователь не найден</p>;

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Адрес: {user.address.street}, {user.address.city}</p>
            <p>Телефон: {user.phone}</p>
            <p>Вебсайт: <a href={`http://${user.website}`} className="text-blue-500 hover:underline">{user.website}</a></p>
            <p>Компания: {user.company.name}</p>
        </div>
    );
}