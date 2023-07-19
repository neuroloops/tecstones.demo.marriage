// import Head from "next/head";
import { fonts } from "@/utils/fonts"
import Head from "next/head"
import { useTina } from "tinacms/dist/react"
import layoutData from "../../content/global/index.json"
import { client } from "../../tina/__generated__/client"
import Footer from "./Footer"

import Header from "./Header"

const Layout = (props: any) => {
  const { children, head } = props

  const data = layoutData
  const { NODE_ENV } = process.env

  //display debug screens if in development
  const debug = NODE_ENV === "development" ? "debug-screens" : ""
  return (
    <>
      <Head>
        <meta name="description" content={data.title} />
        <link rel="icon" href="/favicon.ico" />
        <title>{head}</title>
      </Head>
      <div
        className={`${fonts.roboto} flex min-h-screen w-screen flex-col items-center justify-between bg-white ${debug}`}
      >
        <Header data={data} />

        {/* <main className={`${debug} w-screen`}>{children}</main> */}
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
