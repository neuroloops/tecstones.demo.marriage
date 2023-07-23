// import Head from "next/head";
import { fonts } from "@/utils/fonts"
import Head from "next/head"
import Image from "next/image"
import { useTina } from "tinacms/dist/react"
import layoutData from "../../content/global/index.json"
import { client } from "../../tina/__generated__/client"
import Footer from "./Footer"
import { Gwendolyn } from "next/font/google"
import Header from "./Header"
import Buttons from "./Buttons"
import CardServices from "./CardServices"

const Layout = (props: any) => {
  const { children, head } = props

  const data = layoutData

  return (
    <>
      <Head>
        <meta name="description" content={data.title} />
        <link rel="icon" href="/favicon.ico" />
        <title>{head}</title>
      </Head>
      <div
        className={`flex min-h-screen w-screen flex-col items-center justify-between bg-green-400 font-main `}
      >
        <Header data={data} />
        <Image
          src="/uploads/pexels-hebert-santos-6514287.jpg"
          width={904}
          height={296}
          alt="background image"
          className="w-screen "
        />
        <div>
          <main className={`w-screen`}>{children}</main>
        </div>

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
