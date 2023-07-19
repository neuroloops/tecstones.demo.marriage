import Navbar from "./Navbar"
import Image from "next/image"
import { fonts } from "@/utils/fonts"

const Header = ({ data }) => {
  console.log(data)
  return (
    <header className="w-screen bg-main  text-white">
      <div className="mx-auto ">
        <div className="flex w-full justify-between px-32 pt-2">
          <div>social medias</div>
          <div>email</div>
        </div>
        <div className="mx-auto flex w-full max-w-7xl pt-8">
          <Image
            src="/logo.webp"
            width={904}
            height={296}
            alt="logo"
            className="w-60 pr-4"
          />
          {/* <h1 className={`${fonts.inter} pt-5 text-8xl`}>{title}</h1> */}
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
