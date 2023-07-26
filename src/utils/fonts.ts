import { Inter, Gwendolyn } from "next/font/google"

const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["700"], variable: "--font-heading", display: 'swap' })

const inter = Inter({ subsets: ["latin"], variable: "--font-main", display: 'swap' })


export const fonts = { heading: gwendolyn.variable, main: inter.variable }
