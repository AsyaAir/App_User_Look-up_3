import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const UserSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Загружаем пользователей из API
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

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search users..."
                className="p-2 border rounded-md mb-4"
            />

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {filteredUsers.map(user => (
                        <li key={user.id}>{user.name} ({user.username})</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserSearch;