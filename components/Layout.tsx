import Link from "next/link";
import Head from "next/head";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        margin: "3rem",
      }}
    >
      <Head>
        <title>Afg marriage</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/posts">Posts</Link>
      </header>
      <main>{children}</main>
    </div>
  );
};
