// import Head from "next/head";
import { gwendolyn, roboto, cardo } from "@/utils/fonts";
import Navbar from "./Navbar";
import Head from "next/head";
import { Metadata } from "next";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "title Afg Marriage",
  description: "welcome to afg marriage",
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
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
      <main className="max-w-xl">{children}</main>
      <Footer />
    </div>
  );
};
