// import React from "react";
import Link from "next/link"

const navItems: Array<string> = [
  "Home",
  "galleries",
  "blog",
  "testimonial",
  "about",
  "contact",
  "footer",
]

const Navbar = () => {
  return (
    <nav className=" py-10">
      <ul className="flex justify-between gap-4">
        {navItems.map((link: string, index: number) => (
          <li key={index} className="cursor-pointer uppercase">
            <Link href={`#${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
