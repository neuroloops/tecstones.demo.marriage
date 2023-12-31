import React, { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paypal: any
  }
}

import PaymentSuccess from "./PaymentSuccess"

function PayPalCheckout({ data }) {
  const { product, price } = data
  const currency = "CAD"

  const paypal = useRef()
  const [transactionStatus, setTransactionStatus] = useState(null)
  const [order, setOrder] = useState(null)

  //use paypal sdk to create buttons

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: product,
                amount: {
                  currency_code: currency,
                  value: price,
                },
              },
            ],
          })
        },
        style: {
          layout: "vertical",
          color: "white",
          shape: "pill",
          label: "paypal",
          tagline: false,
        },
        onApprove: async (data, actions) => {
          setOrder(await actions.order.capture())

          setTransactionStatus("success")
        },
        onError: (err) => {
          setTransactionStatus("failure")
        },
      })
      .render(paypal.current)
  }, [order, price, product])

  if (transactionStatus === "success") {
    return <PaymentSuccess order={order} />
  }

  if (transactionStatus === "failure") {
    // return <PaymentFailure order={order} />
  }

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}

export default PayPalCheckout
