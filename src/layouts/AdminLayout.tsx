interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin-layout">
      <aside>AdminSidebar</aside>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
