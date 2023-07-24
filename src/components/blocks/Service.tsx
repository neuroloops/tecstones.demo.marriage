import { iService } from "@/types/types"
import Image from "next/image"
import { tinaField } from "tinacms/dist/react"
import { PageBlocksService } from "../../../tina/__generated__/types"
import Buttons from "../Buttons"

const CardServices = ({ service }: { service: iService }) => {
  const { title, description, image, button } = service
  return (
    <div className="flex w-64 flex-col content-center bg-white p-4 text-center text-black hover:shadow-xl">
      <Image
        height={224}
        width={224}
        alt={image?.alt}
        src={image?.src}
        className="h-56 w-56 rounded-xl object-cover"
        data-tina-field={tinaField(service, "image")}
      />

      <div
        className="mt-2  text-xl"
        data-tina-field={tinaField(service, "title")}
      >
        {title}
      </div>
      <div className="my-4" data-tina-field={tinaField(service, "description")}>
        {description}
      </div>
      <Buttons className="px-4 py-2 text-xs">
        <span data-tina-field={tinaField(service, "button")}>{button}</span>
      </Buttons>
    </div>
  )
}

const Service = ({ data: { services } }: { data: PageBlocksService }) => {
  return (
    <section className="body-font text-gray-600" id="testimonial">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 ">
          <h2 className={`text-center font-heading text-5xl`}>Weddings</h2>

          {services.map((service: iService, key: number) => {
            return <CardServices key={key} service={service} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Service
