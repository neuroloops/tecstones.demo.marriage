import useStore from "@/zustand"
import { client } from "../../../tina/__generated__/client"

type iProps = {
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

const PaymentSuccess = ({ order }: iProps) => {
  const paypalMessage = useStore((state) => state.paypalMessage)

  return (
    <div>
      <p>
        {order.payer.name.given_name} {order.payer.name.surname},{" "}
        {paypalMessage} <br />
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
