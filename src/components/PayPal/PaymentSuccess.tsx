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
  return (
    <div>
      <p>{message}</p>
      <p>
        {order.payer.name.given_name} {order.payer.name.surname}, Thank you for
        your purchase! <br />
        your order is now {order.status.toLowerCase()} !
        <p>
          Email: {order.payer.email_address} {""}
          transaction id: {order.id}
        </p>
      </p>
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
