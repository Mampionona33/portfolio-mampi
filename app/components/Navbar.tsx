import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "../../public/logo_portfolio.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="">
      <nav className="bg-gray-100 dark:bg-gray-800 shadow-sm flex pl-4">
        <Image src={logo} alt="Logo" width={40} height={40} className="p-2" />
        <ul className="w-full flex flex-row items-center gap-6 justify-end p-4 dark:text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <ThemeSwitcher />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
