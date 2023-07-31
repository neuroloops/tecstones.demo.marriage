import useStore from "@/zustand"

type TProps = {
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

const PaymentSuccess = ({ order }: TProps) => {
  const paypalMessage = useStore((state) => state.globals.paypalMessage)

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
