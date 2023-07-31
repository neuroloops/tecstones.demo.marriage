import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"
import Image from "next/image"
import { useState } from "react"

import useStore from "@/zustand"
import Navbar from "./Navbar"

const Header = () => {
  const bgMain = "bg-main-500"

  const email = useStore((state) => state.globals.socials.email)

  const bgTransparent =
    "md:bg-gradient-to-b from-gray-500/80 to-transparent md:bg-transparent bg-main-500"

  const [bgColor, setBgColor] = useState(bgTransparent)
  const [visible, setVisible] = useState("flex")

  const socials = useStore((state) => state.globals.socials)

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
      <div className="mx-auto w-screen">
        <div
          className={`md:${visible}  w hidden justify-between px-32 pt-2 transition-all duration-1000`}
        >
          <ul className="flex gap-4">
            {socials.facebook.length > 1 && (
              <li>
                <a href={socials.facebook} className="flex items-center gap-2 ">
                  <Image
                    src="/logoW-facebook.svg"
                    alt="facebook icon"
                    height={16}
                    width={16}
                  />
                  Facebook{" "}
                </a>
              </li>
            )}
            {socials.twitter.length > 1 && (
              <li>
                <a href={socials.twitter} className="flex items-center gap-2 ">
                  <TwitterLogoIcon /> twitter
                </a>
              </li>
            )}
            {socials.instagram.length > 1 && (
              <li>
                <a
                  href={socials.instagram}
                  className="flex items-center gap-2 "
                >
                  <InstagramLogoIcon /> Instagram
                </a>
              </li>
            )}
          </ul>

          <div className="w-fill">
            <p className="flex items-center gap-2 ">
              <EnvelopeClosedIcon />
              {email}
            </p>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
