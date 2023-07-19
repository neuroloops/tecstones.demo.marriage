// import React from "react";
import Link from "next/link"

const navItems: Array<string> = [
  "services",
  "about us",
  "why us",
  "gallery",
  "videos",
  "testimonials",
  "contact us",
]

const Navbar = () => {
  return (
    <nav className=" py-10">
      <ul className="flex justify-between gap-4">
        <li className="cursor-pointer uppercase">
          <Link href={`/`}>Home</Link>
        </li>

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
