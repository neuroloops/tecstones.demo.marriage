import "@/styles/global.css"
import React from "react"
import { fonts } from "@/utils/fonts"

const debug = process.env.NODE_ENV === "development" ? "debug-screens" : ""

const App = ({ Component, pageProps }) => {
  return (
    <div className={`${fonts.main} ${fonts.heading} ${debug}`}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
