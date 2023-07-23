import { Inter, Gwendolyn, Roboto, Cardo } from "next/font/google"



export const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["700"], variable: "--font-heading", display: 'swap' })


export const roboto = Roboto({ weight: ["400"], subsets: ["latin"], variable: "--font-main", display: 'swap' })

export const inter = Inter({ subsets: ["latin"], variable: "--font-main", display: 'swap' })



export const fonts = { heading: gwendolyn.variable, main: inter.variable }


