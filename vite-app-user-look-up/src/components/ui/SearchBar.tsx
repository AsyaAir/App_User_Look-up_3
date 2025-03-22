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
