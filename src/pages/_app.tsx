import "@/styles/global.css"
import React from "react"
import { fonts } from "@/utils/fonts"

const debugScreen =
  process.env.NODE_ENV === "development" ? "debug-screens" : ""

const App = ({ Component, pageProps }) => {
  return (
    <div className={`${fonts.main} ${fonts.heading} ${debugScreen}`}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
