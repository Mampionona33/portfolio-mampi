import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "../../public/logo_portfolio.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 text-gray-700 dark:bg-gray-800 shadow-sm fixed w-full top-0 z-50 flex items-center justify-between px-4 py-2">
      <div className="rounded-full bg-gray-900  p-2">
        <Image src={logo} alt="Logo" className="w-12" />
      </div>
      <ul className="flex flex-row items-center gap-6 dark:text-white">
        <li>
          <a href="#accueil">Accueil</a>{" "}
        </li>
        <li>
          <a href="#a_propos">À propos</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <ThemeSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;
