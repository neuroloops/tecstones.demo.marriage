// import Head from "next/head";
import { gwendolyn, inter } from "@/utils/fonts";
import Navbar from "./Navbar";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "title Afg Marriage",
  description: "welcome to afg marriage",
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${inter.className}  flex min-h-screen flex-col items-center justify-between `}
    >
      {/* <Head>
        <title>Afg marriage</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <header className="text-emerald-700">
        <h1 className={`${gwendolyn.className} pt-5 text-8xl`}>Afg Marriage</h1>
        <Navbar />
      </header>
      <main className="max-w-xl">{children}</main>
    </div>
  );
};
