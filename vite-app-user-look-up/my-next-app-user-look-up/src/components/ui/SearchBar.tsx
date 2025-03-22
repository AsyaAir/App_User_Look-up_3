// При использовать SearchBar в серверных компонентах Next.js
// переношу его в клиентский компонент - добавляю 'use client'; сверху.
// (В Next.js все компоненты по умолчанию серверные. Если используются
//  useState и useEffect, то обязательно добавляется 'use client')

'use client';
import React from 'react';

interface SearchBarProps {
    query: string;
    onSearchChange: (newQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search..."
                className="p-2 border rounded-md"
            />
        </div>
    );
};

// Экспорт по умолчанию
export default SearchBar;