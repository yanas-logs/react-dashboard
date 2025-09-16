import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar: React.FC = () => {
  const linkStyle = (isActive: boolean) =>
    isActive
      ? "block py-2 px-4 bg-blue-500 text-white rounded"
      : "block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded";

  return (
    <aside
      className="admin-sidebar"
      style={{
        width: "200px",
        background: "#f0f0f0",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav>
        <NavLink to="/admin" className={linkStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/users" className={linkStyle}>
          Users
        </NavLink>
        <NavLink to="/admin/settings" className={linkStyle}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
