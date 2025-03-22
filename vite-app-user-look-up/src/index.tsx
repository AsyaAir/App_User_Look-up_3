// Файл - точка входа, которая рендерит 
// приложение App.tsx (который в свою очередь управляет маршрутизацией) в root элемент.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Импортируем App.tsx

// Это точка входа, где рендерится приложение
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App /> {/* Рендерим App.tsx */}
    </React.StrictMode>
);