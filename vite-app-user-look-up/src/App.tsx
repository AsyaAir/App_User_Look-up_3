import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/index";
import UserPage from "@/pages/user/[id]";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </Router>
  );
}


