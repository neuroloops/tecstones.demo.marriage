import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import React, { useEffect } from "react"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { client } from "../../tina/__generated__/client"
import { Blocks } from "@/components/blocks-renderer"
import divDebug from "@/utils/divDebug"
// import { useStore } from "zustand"
import useStore from "@/zustand"

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  useEffect(() => {
    updateMessage(props.paypal.successMessage)
  }, [])

  const { title, src } = data.page

  const updateMessage = useStore((state) => state.updateMessage)

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
        className=" h-[70vh] min-h-[150px] w-screen min-w-full object-cover"
      />

      <Blocks {...data.page} className={`${divDebug} md:w-11/12`} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  })
  const global = await client.queries.global({
    relativePath: "index.json",
  })

  return {
    props: {
      paypal: global.data.global.PayPal,
      data,
      query,
      variables,
    },
  }
}
