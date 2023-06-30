// import React from "react";
import Link from "next/link";

const navItems: Array<string> = [
  "Home",
  "galleries",
  "blog",
  "shop",
  "about",
  "contact",
];

const Navbar = () => {
  return (
    <nav className="py-10">
      <ul className="flex justify-between">
        {navItems.map((link: string, index: number) => (
          <li key={index} className="cursor-pointer uppercase">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
