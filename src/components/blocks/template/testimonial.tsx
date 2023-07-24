import { Template } from "tinacms"

const testimonialTemplate: Template = {
  name: "testimonial",
  label: "Testimonial",
  fields: [
    {
      type: "object",
      label: "Testimonials",
      name: "testimonials",
      list: true,
      ui: {
        previewSrc: "https://i.pravatar.cc/150?u=fake@",
        itemProps: (item) => {
          return { label: item?.author }
        },
      },
      fields: [
        {
          type: "string",
          label: "Author",
          name: "author",
        },
        {
          type: "string",
          label: "Quote",
          name: "quote",
          ui: {},
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

export default testimonialTemplate
