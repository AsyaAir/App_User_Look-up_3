// Компонент, который управляет маршрутизацией с помощью React Router, 
// такие как главная страница HomePage и страница с пользователем UserPage.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/index'; // Импорт главной страницы
import UserPage from '@/pages/user/[id]'; // Импорт страницы пользователя

const App: React.FC = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Главная страница */}
        <Route path="/user/:id" element={<UserPage />} /> {/* Страница пользователя по id */}
      </Routes>
    </div>
  </Router>
);

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "@/index";
// import UserPage from "@/pages/user/[id]";
// import UserSearch from "@/components/ui/UserSeach"; // Импорт компонента поиска пользователей

// const App = () => (
//   <Router>
//     <div>
//       <UserSearch /> {/* Добавляем компонент поиска */}
//       <Routes>
//         <Route path="/" element={<h1>Page 1</h1>} />
//         <Route path="/page2" element={<h1>Page 2</h1>} />
//       </Routes>
//     </div>
//   </Router>
// );

// export default App;




