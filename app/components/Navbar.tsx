import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "../../public/logo_portfolio.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-sm sticky top-0 z-50 flex items-center justify-between px-4 py-2">
      <Image src={logo} alt="Logo" width={40} height={40} className="p-2" />
      <ul className="flex flex-row items-center gap-6 dark:text-white">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <ThemeSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;
