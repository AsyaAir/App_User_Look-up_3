import { useEffect, useState } from "react";
import { fetchUsers } from "@/api/users";
import { User } from "@/types/user";
import { UserCard } from "@/components/UserCard";

export default function HomePage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUsers()
            .then(setUsers)
            .catch(() => setError("Ошибка загрузки данных"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}