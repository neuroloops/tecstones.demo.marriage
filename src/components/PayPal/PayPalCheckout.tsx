import React, { useRef, useEffect, useState } from "react"

import PaymentSuccess from "./PaymentSuccess"

function PayPalCheckout({ data }) {
  console.log(data)
  const { title, price } = data
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
                description: title,
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
          console.log("success", order)
          setTransactionStatus("success")
        },
        onError: (err) => {
          console.log(err)
          setTransactionStatus("failure")
        },
      })
      .render(paypal.current)
  }, [""])

  if (transactionStatus === "success") {
    console.log("order", order)
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
