import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row items-center justify-between dark:text-white dark:bg-gray-800">
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
