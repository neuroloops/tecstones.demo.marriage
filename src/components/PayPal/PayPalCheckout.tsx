import React, { useRef, useEffect, useState } from "react"
import PaymentFailure from "./PaymentFailure"
import PaymentSuccess from "./PaymentSuccess"

function PayPalCheckout({ data }) {
  const { product, amount, currency } = data
  const paypal = useRef()
  const [transactionStatus, setTransactionStatus] = useState(null)
  const [order, setOrder] = useState(null)

  //use paypal sdk to create buttons

  useEffect(() => {
    // window.paypal
    //   .Buttons({
    //     createOrder: (data, actions, err) => {
    //       return actions.order.create({
    //         intent: "CAPTURE",
    //         purchase_units: [
    //           {
    //             description: product,
    //             amount: {
    //               currency_code: currency,
    //               value: amount,
    //             },
    //           },
    //         ],
    //       })
    //     },
    //     style: {
    //       layout: "horizontal",
    //       color: "white",
    //       shape: "pill",
    //       label: "paypal",
    //       tagline: true,
    //     },
    //     onApprove: async (data, actions) => {
    //       setOrder(await actions.order.capture())
    //       console.log("success", order)
    //       setTransactionStatus("success")
    //     },
    //     onError: (err) => {
    //       console.log(err)
    //       setTransactionStatus("failure")
    //     },
    //   })
    //   .render(paypal.current)
  }, [product, amount, currency, order])

  if (transactionStatus === "success") {
    console.log("order", order)
    return <PaymentSuccess order={order} />
  }

  if (transactionStatus === "failure") {
    // return <PaymentFailure order={order} />
  }

  return (
    <div>
      <script
        src="https://www.paypal.com/sdk/js?client-id=AXnN0xf_pKOsECC4t9d5FobWPFyDoTRV2ppzR-9IDa6j_BBKUpV9Axa-HKLvHbKYMPlj3mIDZWrha-eB&currency=CAD"
        async
      ></script>
      <div ref={paypal}></div>
    </div>
  )
}

export default PayPalCheckout
