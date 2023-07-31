import { Template } from "tinacms"

const serviceTemplate: Template = {
  name: "service",
  label: "Service",
  fields: [
    {
      type: "object",
      label: "Services",
      name: "services",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title }
        },
        defaultItem: {
          title: "Service title",
          description: "Service description",
          alt: "service picture",
          button: "Inquire now",
        },
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "number",
          label: "Price",
          name: "price",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
        },
        {
          type: "string",
          label: "Button",
          name: "button",
        },
        {
          type: "image",
          label: "Image",
          name: "image",
          ui: {
            label: "Image",
          },
        },
      ],
    },
  ],
}

export default serviceTemplate
