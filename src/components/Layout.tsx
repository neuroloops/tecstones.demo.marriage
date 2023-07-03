// import Head from "next/head";
import { cardo, gwendolyn, roboto } from "@/utils/fonts"
import Head from "next/head"
import { useTina } from "tinacms/dist/react"
import layoutData from "../../content/global/index.json"
import { client } from "../../tina/__generated__/client"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = (props: any) => {
  const { children, head } = props

  const data = layoutData
  const { NODE_ENV } = process.env
  const debug = NODE_ENV === "development" ? "debug-screens" : ""
  return (
    <>
      <Head>
        <meta name="description" content={data.title} />
        <link rel="icon" href="/favicon.ico" />
        <title>{head}</title>
      </Head>
      <div
        className={`${roboto.className}  flex min-h-screen flex-col items-center justify-between bg-white`}
      >
        <header className="text-emerald-700">
          <h1 className={`${gwendolyn.className} pt-5 text-8xl`}>
            {data.title}
          </h1>
          <Navbar />
        </header>

        <main className={`${debug} w-screen`}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "global/index.json",
  })

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  }
}
