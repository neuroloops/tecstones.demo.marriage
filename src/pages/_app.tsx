import "@/styles/global.css"
import React from "react"
import { gwendolyn } from "@/utils/fonts"

//display debug screens if in development

const debug = process.env.NODE_ENV === "development" ? "debug-screens" : ""

const App = ({ Component, pageProps }) => {
  return (
    <div className={`${gwendolyn.variable} ${debug}`}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
