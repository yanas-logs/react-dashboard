import React from "react";

interface GuestLayoutProps {
  children: React.ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <div className="guest-layout">
      GuestLayout
      <main>{children}</main>
    </div>
  );
};

export default GuestLayout;
