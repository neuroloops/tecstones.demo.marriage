import { Inter, Gwendolyn, Roboto, Cardo } from "next/font/google"

export const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["700"] })

export const inter = Inter({ subsets: ["latin"] })

export const roboto = Roboto({ weight: ["400"], subsets: ["latin"] })

export const cardo = Cardo({ subsets: ["latin"], weight: ["400"] })

export const fonts = { gwendolyn: gwendolyn.className, inter: inter.className, roboto: roboto.className, cardo: cardo.className }