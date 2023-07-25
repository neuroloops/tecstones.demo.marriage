import { client } from "../../../tina/__generated__/client"
type iProps = {
  message?: string
  order: {
    id: string
    status: string
    payer: {
      email_address: string
      name: {
        given_name: string
        surname: string
      }
    }
  }
}

const PaymentSuccess = ({ message, order }: iProps) => {
  console.log(message, order)
  console.log(order.id)
  return (
    <div>
      <p>transaction id: {order.id}</p>
      <p>
        email: {order.payer.email_address} {""}
        name:{order.payer.name.given_name}
        {""}
        surname: {order.payer.name.surname}
      </p>
      <p>status: {order.status}</p>

      <p>{message}</p>
    </div>
  )
}

export default PaymentSuccess

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
