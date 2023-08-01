import { TClassName } from "@/types/types"
import goToLink from "@/utils/goToLink"

import { twMerge } from "tailwind-merge"
import Image from "next/image"
import { useState } from "react"
import useStore from "@/zustand"

const navItems: { name: string; link: string }[] = [
  { name: "home", link: "home" },
  { name: "services", link: "services" },
  { name: "videos", link: "videos" },
  { name: "testimonials", link: "testimonials" },
  { name: "about us", link: "footer" },
]

const NavLink = ({ setBurger }: { className?: string; setBurger: any }) => {
  return (
    <>
      {navItems.map((item, index: number) => {
        return (
          <li
            className="cursor-pointer uppercase"
            key={index}
            onClick={() => {
              goToLink(item.link)
              if (setBurger) {
                setBurger(false)
              }
            }}
          >
            {item.name}
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
  const logo = useStore((state) => state.globals.logo)

  return (
    <div
      className={` mx-auto flex  max-w-7xl items-center justify-around py-4 text-center`}
    >
      <Image
        src={logo}
        width={904}
        height={296}
        alt="logo"
        className={`w-60 pr-4 max-[300px]:hidden  ${showHide}`}
      />
      <BurgerIcon
        className={`max-[299px]:mx-auto min-[300px]:ml-6 md:hidden ${showHide}`}
        {...{ burgerOpen, setBurger }}
      />
      <nav className={twMerge("backdrop-opacity-60 ", className)}>
        <ul className="hidden justify-center gap-4 md:flex">
          <NavLink {...{ setBurger }} />
        </ul>
      </nav>
      {burgerOpen ? <BurgerMenu {...{ burgerOpen, setBurger }} /> : null}
    </div>
  )
}

export default Navbar
