import { Template } from "tinacms"

const heroTemplate: Template = {
  name: "hero",
  label: "Hero",
  fields: [
    {
      type: "object",
      label: "hero cards",
      name: "HeroCards",
      list: true,
      ui: {
        defaultItem: {
          tagline: "Here's some text above the other text",
          headline: "This Big Text is Totally Awesome",
        },
        itemProps: (item) => {
          return { label: item?.headline }
        },
      },
      fields: [
        {
          type: "string",
          label: "Tagline",
          name: "tagline",
        },
        {
          type: "string",
          label: "Headline",
          name: "headline",
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

export default heroTemplate
