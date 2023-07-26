import Image from "next/image"
import { useState } from "react"
import Navbar from "./Navbar"

import { EnvelopeClosedIcon } from "@radix-ui/react-icons"

const Header = ({ data }) => {
  const bgMain = "bg-main-500"

  const bgTransparent = "bg-gradient-to-b from-gray-500/80 to-transparent "
  // const bgTransparent = "bg-blend-darken"

  const [bgColor, setBgColor] = useState(bgTransparent)

  const [visible, setVisible] = useState("flex")

  if (typeof window !== `undefined`) {
    const changeBackground = () => {
      if (window.scrollY != 0) {
        setBgColor(bgMain)
        setVisible("hidden")
      } else {
        setBgColor(bgTransparent)
        setVisible("flex")
      }
    }

    window.addEventListener("scroll", changeBackground)
  }

  return (
    <header
      className={`fixed flex w-screen text-white transition-all duration-1000 ${bgColor}`}
    >
      <div className=" mx-auto">
        <div
          className={`${visible} w-full justify-between px-32 pt-2 transition-all duration-1000`}
        >
          <div>social medias</div>
          <div className="w-fill">
            <p className="flex items-center gap-2 ">
              <EnvelopeClosedIcon />
              name@email.com
            </p>
          </div>
        </div>
        <div className={`mx-auto flex w-full max-w-7xl py-4`}>
          <Image
            src="/logo.webp"
            width={904}
            height={296}
            alt="logo"
            className="w-60 pr-4"
          />
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
