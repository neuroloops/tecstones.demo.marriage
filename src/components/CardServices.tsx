import Buttons from "./Buttons"
import Image from "next/image"

type iService = {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
}
const CardServices = ({ data }: { data: iService }) => {
  const { title, description, image } = data
  return (
    <div className="flex w-64 flex-col content-center bg-white p-4 text-center text-black hover:shadow-xl">
      <Image
        height={224}
        width={224}
        alt={image.alt}
        src={image.src}
        className="h-56 w-56 rounded-xl"
      />
      {/* <div className="h-56 w-56  bg-red-700">image</div> */}

      <div className="mt-2  text-xl">{title}</div>
      <div className="my-4">{description}</div>
      <Buttons className="px-4 py-2 text-xs">Enquire now</Buttons>
    </div>
  )
}

export default CardServices
