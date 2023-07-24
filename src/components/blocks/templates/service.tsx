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
          type: "object",
          label: "Image",
          name: "image",
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

export default serviceTemplate
