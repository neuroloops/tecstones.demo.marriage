import { useState } from "react"
import Navbar from "./Navbar"

import { EnvelopeClosedIcon } from "@radix-ui/react-icons"

const Header = ({ data }) => {
  const bgMain = "bg-main-500"

  const bgTransparent =
    "md:bg-gradient-to-b from-gray-500/80 to-transparent md:bg-transparent bg-main-500"

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
      className={`fixed flex w-screen text-white transition-none duration-1000 md:transition-all ${bgColor} `}
    >
      <div className="mx-auto">
        <div
          className={`${visible} hidden w-full justify-between px-32 pt-2 transition-all duration-1000 md:flex`}
        >
          <div>social medias</div>
          <div className="w-fill">
            <p className="flex items-center gap-2 ">
              <EnvelopeClosedIcon />
              name@email.com
            </p>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
