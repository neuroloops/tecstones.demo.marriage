import { TClassName } from "@/types/types"
import goToLink from "@/utils/goToLink"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import Image from "next/image"
import { useState } from "react"

const navItems: string[] = [
  "services",
  "about us",
  "why us",
  "gallery",
  "videos",
  "testimonials",
  "contact us",
]

const NavLink = ({
  setBurger,
  className = "",
}: {
  className?: string
  setBurger: any
}) => {
  return (
    <>
      {navItems.map((item: string, index: number) => {
        return (
          <li
            className={(twMerge("cursor-pointer "), className)}
            key={index}
            onClick={() => {
              goToLink(item)
              if (setBurger) {
                setBurger(false)
              }
            }}
          >
            {item}
          </li>
        )
      })}
    </>
  )
}

const BurgerMenu = ({ setBurger }) => {
  return (
    <ul className="flex h-screen w-full flex-col flex-wrap items-center justify-center  pt-5 [&>li]:p-4">
      <NavLink {...{ setBurger }} />
    </ul>
  )
}

const BurgerIcon = ({ setBurger, burgerOpen, className }) => {
  return (
    <div className={(twMerge("ml-6 cursor-pointer"), className)}>
      <div className="space-y-2 " onClick={() => setBurger(!burgerOpen)}>
        <div className="h-0.5 w-8 bg-white"></div>
        <div className="h-0.5 w-8 bg-white"></div>
        <div className="h-0.5 w-8 bg-white"></div>
      </div>
    </div>
  )
}

const Navbar = ({ className = "" }: TClassName) => {
  const [burgerOpen, setBurger] = useState<boolean>(false)
  const showHide = burgerOpen ? "hidden" : "block"
  return (
    <div
      className={` flex w-full max-w-7xl items-center  justify-between py-4 text-center`}
    >
      <Image
        src="/logo.webp"
        width={904}
        height={296}
        alt="logo"
        className={`w-60 pr-4 ${showHide}`}
      />
      <BurgerIcon
        className={`ml-6 md:hidden ${showHide}`}
        {...{ burgerOpen, setBurger }}
      />
      <nav
        className={twMerge(
          "w-full self-center backdrop-opacity-60 ",
          className
        )}
      >
        <ul className="hidden justify-center gap-4 md:flex">
          <li className="cursor-pointer uppercase">
            <Link href={`/`}>Home</Link>
          </li>
          <NavLink {...{ setBurger }} />
        </ul>
      </nav>
      {burgerOpen ? <BurgerMenu {...{ burgerOpen, setBurger }} /> : null}
    </div>
  )
}

export default Navbar
