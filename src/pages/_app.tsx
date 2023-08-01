import "@/styles/global.css"
import React from "react"
import { fonts } from "@/utils/fonts"

const debugScreen =
  process.env.NODE_ENV === "development" ? "debug-screens" : ""

const App = ({ Component, pageProps }) => {
  return (
    <div className={`${fonts.main} ${fonts.heading} w-screen `}>
      <script
        src="https://www.paypal.com/sdk/js?client-id=AXnN0xf_pKOsECC4t9d5FobWPFyDoTRV2ppzR-9IDa6j_BBKUpV9Axa-HKLvHbKYMPlj3mIDZWrha-eB&currency=CAD"
        async
      ></script>
      <Component {...pageProps} />
    </div>
  )
}

export default App
