import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { client } from "../../tina/__generated__/client"
import { Blocks } from "../components/blocks-renderer"

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  //tailwind debug
  const debug: string = process.env.NODE_ENV === "development" ? "debug" : ""

  const { title, src } = data.page

  return (
    <Layout head={title}>
      <Head data-tina-field={tinaField(data.page, "title")}>
        <TinaMarkdown content={title} />
      </Head>

      <Image
        src={src}
        width={904}
        height={296}
        alt="hero image"
        className=" h-[70vh] min-h-[150px] w-screen object-cover"
      />

      <div className="App">
        <div className="App-header"></div>
      </div>

      <Blocks {...data.page} className={`${debug} md:w-11/12`} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
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
