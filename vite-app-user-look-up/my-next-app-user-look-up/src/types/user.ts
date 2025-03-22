// Экспортирую тип User, чтобы другие файлы могли его импортировать.

export interface User {
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
