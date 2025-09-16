import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";
import Users from "../pages/Admin/Users";
import Settings from "../pages/Admin/Settings";
import HomePage from "../pages/Home/HomePage";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
