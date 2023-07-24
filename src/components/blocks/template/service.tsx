import { Template } from "tinacms"

export const serviceTemplate: Template = {
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
          type: "string",
          label: "Button",
          name: "button",
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

export default serviceTemplate
