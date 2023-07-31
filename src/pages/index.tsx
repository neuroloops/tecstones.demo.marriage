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

  const setMessage = useStore((state) => state.setMessage)
  const setSiteName = useStore((state) => state.setSiteName)
  const setSocials = useStore((state) => state.setSocials)

  useEffect(() => {
    const socials = {
      facebook: props.global.facebook,
      instagram: props.global.instagram,
      twitter: props.global.twitter,
      email: props.global.email,
    }

    setSiteName(props.global.title)
    setMessage(props.global.PayPal.successMessage)
    setSocials(socials)
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
        className=" h-[70vh] min-h-[150px] w-screen min-w-full object-cover"
      />

      <Blocks {...data.page} className={` md:w-11/12`} />
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
