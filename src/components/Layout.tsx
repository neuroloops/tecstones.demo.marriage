import Head from "next/head"
import layoutData from "../../content/global/index.json"
import { client } from "../../tina/__generated__/client"

import Footer from "./Footer"
import Header from "./Header"

const Layout = ({
  children,
  head,
}: {
  children: JSX.Element[] | JSX.Element
  head?: string
}) => {
  const data = layoutData

  return (
    <>
      <Head>
        <meta name="description" content={data.title} />
        <link rel="icon" href="/favicon.ico" />
        <title>{head}</title>
      </Head>
      <div
        className={`flex min-h-screen w-screen flex-col items-center justify-between bg-white font-main`}
      >
        <Header data={data} />

        <main className={`w-screen`}>{children}</main>
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
    },
  }
}
