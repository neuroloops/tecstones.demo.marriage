import { TService } from "@/types/types"
import Image from "next/image"
import { tinaField } from "tinacms/dist/react"
import { PageBlocksService } from "../../../tina/__generated__/types"
import Modal from "../Modal"

const CardServices = ({ service }: { service: TService }) => {
  const { title, description, button, price } = service

  const image = service.image || ""

  return (
    <section
      className="item-center flex w-64 flex-col bg-white  py-6 text-center text-black hover:shadow-xl"
      id="services"
    >
      <header className="">
        <Image
          height={224}
          width={224}
          alt={`${title} image`}
          src={image}
          className="mx-auto h-56 w-56 rounded-xl object-cover"
          data-tina-field={tinaField(service, "image")}
        />
        <h3
          className="mt-6   text-xl"
          data-tina-field={tinaField(service, "title")}
        >
          {title}
        </h3>
        <p className="mt-4 flex justify-center">
          ${" "}
          <span
            className="text-5xl"
            data-tina-field={tinaField(service, "price")}
          >
            {price}
          </span>
        </p>
      </header>
      <section>
        <div
          className="my-4"
          data-tina-field={tinaField(service, "description")}
        >
          {description}
        </div>
      </section>
      <footer>
        <Modal service={service}>
          <span data-tina-field={tinaField(service, "button")}>{button}</span>
        </Modal>
      </footer>
    </section>
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
