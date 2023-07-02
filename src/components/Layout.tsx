// import Head from "next/head";
import { cardo, gwendolyn, roboto } from "@/utils/fonts"

import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Hero from "./blocks/Hero"

const Layout = ({
  children,
  head,
}: {
  children: React.ReactNode
  head: string
}) => {
  return (
    <div
      className={`${roboto.className}  flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <Head>
        <meta name="description" content="afg marriage" />
        <link rel="icon" href="/favicon.ico" />
        <title>{head}</title>
      </Head>
      <header className="text-emerald-700">
        <h1 className={`${gwendolyn.className} pt-5 text-8xl`}>Afg Marriage</h1>
        <Navbar />
      </header>
      <Hero />
      <main className="h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
