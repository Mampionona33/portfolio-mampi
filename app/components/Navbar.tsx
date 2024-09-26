"use client";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "../../public/logo_portfolio.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 text-gray-700 dark:bg-gray-800 shadow-sm fixed w-full top-0 z-50 flex items-center justify-between px-4 py-2">
      <div className="rounded-full bg-gray-900 p-2">
        <Image src={logo} alt="Logo" className="w-12" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row items-center gap-6 dark:text-white">
        <li>
          <div className="flex items-center justify-between">
            <label htmlFor="lang" className="font-bold mr-2 dark:text-white">
              Langue:
            </label>
            <select
              id="lang"
              name="lang"
              className="border rounded-md p-1 dark:bg-gray-700 dark:text-white"
            >
              <option>En</option>
              <option>Fr</option>
            </select>
          </div>
        </li>

        <li>
          <a href="/#accueil">Accueil</a>
        </li>
        <li>
          <a href="/#a_propos">À propos</a>
        </li>
        <li>
          <a href="/#projects">Projets</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>

        <ThemeSwitcher />
      </ul>

      {/* Hamburger Icon for small screens */}
      <div className="flex md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl cursor-pointer dark:text-white"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu (shown when icon is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-100 dark:bg-gray-800 text-center shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-6 py-4 dark:text-white">
            <li>
              <a href="#accueil" onClick={toggleMenu}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#a_propos" onClick={toggleMenu}>
                À propos
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
            <ThemeSwitcher />
            <div className="mt-4">
              <label htmlFor="lang" className="font-bold mr-2 dark:text-white">
                Langue:
              </label>
              <select
                id="lang"
                name="lang"
                className="border rounded-md p-1 dark:bg-gray-700 dark:text-white"
              >
                <option>En</option>
                <option>Fr</option>
              </select>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
