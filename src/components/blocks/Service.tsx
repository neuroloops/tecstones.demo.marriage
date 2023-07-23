import { Template } from "tinacms"
// import { tinaField } from "tinacms/dist/react"
// import { TinaMarkdown } from "tinacms/dist/rich-text"
import { PageBlocksService } from "../../../tina/__generated__/types"
import CardServices from "../CardServices"

type iService = {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
}

const Service = ({ data: { services } }: { data: PageBlocksService }) => {
  return (
    <section className="body-font text-gray-600" id="testimonial">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 ">
          <h2 className={`text-center font-heading text-5xl`}>Weddings</h2>

          {services.map((service: iService, key: number) => {
            return <CardServices key={key} data={service} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Service

export const ServiceBlockSchema: Template = {
  name: "service",
  label: "Service",
  fields: [
    {
      type: "object",
      label: "Services",
      name: "services",
      list: true,

      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
        },
        {
          type: "object",
          label: "Image",
          name: "image",
          ui: {
            visualSelector: true,
            previewSrc: "https://i.pravatar.cc/150?u=fake@",
            defaultItem: {
              alt: "profile picture",
            },
          },
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image",
            },
            {
              name: "url",
              label: "url",
              type: "string",
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
}
