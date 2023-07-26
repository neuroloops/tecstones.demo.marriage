import { client } from "../../../tina/__generated__/client"

const PaymentFailure = (props: JSX.Element) => {
  console.log(props)

  return (
    <div className="App">
      <header className="App-header">
        <p> Payment Failed</p>
      </header>
    </div>
  )
}

export default PaymentFailure

export const getStaticProps = async () => {
  const data = await client.queries.global({
    relativePath: "index.json",
  })
  console.log("data", data)
  return {
    props: {
      data,
    },
  }
}
