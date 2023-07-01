// import Head from "next/head";
import { cardo, gwendolyn, roboto } from "@/utils/fonts"
import { Metadata } from "next"
import Head from "next/head"

import { client } from "../../tina/__generated__/client"
import Footer from "./Footer"
import Navbar from "./Navbar"

export const metadata: Metadata = {
  title: "title Afg Marriage",
  description: "welcome to afg marriage",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${roboto.className}  flex min-h-screen flex-col items-center justify-between `}
    >
      <Head>
        <meta name="description" content="afg marriage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-emerald-700">
        <h1 className={`${gwendolyn.className} pt-5 text-8xl`}>Afg Marriage</h1>
        <Navbar />
      </header>
      <main className="h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
