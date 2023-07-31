export type TService = {
  title: string
  description: string
  button: string
  image: string
  price: number
}


export type TTestimonial = {
  author: string
  image: { src: string; url: string }
  quote: string
}


export type TClassName = {
  className?: string
}