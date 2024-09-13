import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "../../public/logo_portfolio.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-sm sticky top-0 z-50 flex items-center justify-between px-4 py-2">
      <div className="rounded-full bg-gray-900  p-2">
        <Image src={logo} alt="Logo" className="w-12" />
      </div>
      <ul className="flex flex-row items-center gap-6 dark:text-white">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <ThemeSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;
