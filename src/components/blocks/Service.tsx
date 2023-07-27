import { TService } from "@/types/types"
import Image from "next/image"
import { tinaField } from "tinacms/dist/react"
import { PageBlocksService } from "../../../tina/__generated__/types"
import Modal from "../Modal"

const CardServices = ({ service }: { service: TService }) => {
  const { title, description, button } = service
  const image = service.image || ""

  return (
    <div
      className="item-center flex w-64 flex-col bg-white  py-6 text-center text-black hover:shadow-xl"
      id="services"
    >
      <Image
        height={224}
        width={224}
        alt={`${title} image`}
        src={image}
        className="mx-auto h-56 w-56 rounded-xl object-cover"
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
      <Modal service={service}>
        <span data-tina-field={tinaField(service, "button")}>{button}</span>
      </Modal>
    </div>
  )
}

const Service = ({ data: { services } }: { data: PageBlocksService }) => {
  return (
    <section id="services">
      <div className="mx-auto px-5 py-24">
        <h2>Weddings</h2>
        <div className="flex flex-wrap justify-around">
          {services.map((service: TService, key: number) => {
            return <CardServices key={key} service={service} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Service
