import React from "react";
import GuestLayout from "../../layouts/GuestLayout";

const HomePage: React.FC = () => {
  return (
    <GuestLayout>
      <section className="hero">
        <h1>Welcome to React Dashboard</h1>
        <p>This is the home page for visitors.</p>
      </section>
    </GuestLayout>
  );
};

export default HomePage;
