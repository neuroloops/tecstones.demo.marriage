import Head from "next/head"
import layoutData from "../../content/global/index.json"
import { client } from "../../tina/__generated__/client"

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
        className={`flex min-h-screen flex-col flex-wrap items-center justify-between bg-white font-main`}
      >
        <Header />

        <main>{children}</main>
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
