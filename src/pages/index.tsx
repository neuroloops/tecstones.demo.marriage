import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Head from "next/head"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { client } from "../../tina/__generated__/client"

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const { title, body } = data.page

  return (
    <Layout head={title}>
      <Head data-tina-field={tinaField(data.page, "title")}>
        <TinaMarkdown content={title} />
      </Head>
      <Hero />

      <h2 data-tina-field={tinaField(data.page, "title")}>
        <TinaMarkdown content={title} />
        {title}
      </h2>

      <div data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={body} />
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum cum
        quaerat fugiat ullam mollitia dolores deleniti voluptatem debitis
        laborum aspernatur.
      </p>
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
