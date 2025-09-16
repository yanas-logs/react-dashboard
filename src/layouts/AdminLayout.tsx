import React from "react";
import AdminSidebar from "../components/AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin-layout" style={{ display: "flex" }}>
      <AdminSidebar />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
};

export default AdminLayout;
