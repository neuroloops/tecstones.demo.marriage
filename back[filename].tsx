// import { client } from "../../tina/__generated__/client"
// import Home from "./index"

// const BlogPage = (props: JSX.Element) => {
//   return <Home {...props} />
// }

// export const getStaticProps = async ({ params }: { params: any }) => {
//   let data = {}
//   let query = {}
//   let variables = { relativePath: `${params.filename}.mdx` }

//   try {
//     const res = await client.queries.page(variables)
//     query = res.query
//     data = res.data
//     variables = res.variables
//   } catch {
//     // swallow errors related to document creation
//   }

//   return {
//     props: {
//       variables: variables,
//       data: data,
//       query: query,
//       //myOtherProp: 'some-other-data',
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const pageListData = await client.queries.pageConnection()

//   return {
//     paths: pageListData.data.pageConnection.edges!.map((page) => ({
//       params: { filename: page?.node!._sys.filename },
//     })),
//     fallback: false,
//   }
// }

// export default BlogPage
