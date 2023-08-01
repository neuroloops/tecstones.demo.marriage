import Head from "next/head"
import Image from "next/image"
import React, { useEffect } from "react"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { client } from "../../tina/__generated__/client"

import Layout from "@/components/Layout"
import { Blocks } from "@/components/blocks-renderer"
import useStore from "@/zustand"

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const { title, src } = data.page
  const setGlobals = useStore((state) => state.setGlobals)

  useEffect(() => {
    const globals = {
      paypalMessage: props.global.PayPal.successMessage,
      siteName: props.global.title,
      logo: props.global.logo,
      socials: {
        facebook: props.global.facebook,
        instagram: props.global.instagram,
        twitter: props.global.twitter,
        email: props.global.email,
      },
    }

    setGlobals(globals)
  }, [""])

  return (
    <Layout head={title}>
      <Head data-tina-field={tinaField(data.page, "title")}>
        <TinaMarkdown content={title} />
      </Head>
      <Image
        id="home"
        src={src}
        width={904}
        height={296}
        alt="hero image"
        className=" h-[70vh] min-h-[150px] w-screen object-cover "
      />

      <Blocks {...data.page} className={` w-screen md:w-11/12`} />
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
      global: global.data.global,
      data,
      query,
      variables,
    },
  }
}
