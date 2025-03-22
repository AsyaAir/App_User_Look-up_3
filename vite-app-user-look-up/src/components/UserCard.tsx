import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types/user";
import { Link } from "react-router-dom";

interface UserCardProps {
    user: User;
}

export function UserCard({ user }: UserCardProps) {
    return (
        <Card className="p-4 shadow-lg">
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Email: {user.email}</p>
                <p>Компания: {user.company.name}</p>
                <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline">
                    Подробнее
                </Link>
            </CardContent>
        </Card>
    );
}