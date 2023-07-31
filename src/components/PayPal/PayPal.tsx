import {
  PayPalScriptProvider,
  BraintreePayPalButtons,
} from "@paypal/react-paypal-js"

const PayPal = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AXnN0xf_pKOsECC4t9d5FobWPFyDoTRV2ppzR-9IDa6j_BBKUpV9Axa-HKLvHbKYMPlj3mIDZWrha-eB",
        dataClientToken:
          "AXnN0xf_pKOsECC4t9d5FobWPFyDoTRV2ppzR-9IDa6j_BBKUpV9Axa-HKLvHbKYMPlj3mIDZWrha-eB",
      }}
    >
      <BraintreePayPalButtons
        createOrder={(data, actions) => {
          return actions.braintree.createPayment({
            flow: "checkout",
            amount: "10.0",
            currency: "USD",
            intent: "capture",
          })
        }}
        onApprove={(data, actions) => {
          return actions.braintree.tokenizePayment(data).then((payload) => {
            // call server-side endpoint to finish the sale
          })
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PayPal


service #2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, pariatur!