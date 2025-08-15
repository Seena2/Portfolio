import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background effects  */}
      <StarBackground />
      {/* Navbar  */}
      <Navbar />

      {/* Main Content  */}
      <main>
        <Hero />
      </main>
      {/* Footer  */}
    </div>
  );
}

export default HomePage;
