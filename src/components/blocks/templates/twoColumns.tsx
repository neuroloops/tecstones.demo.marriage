import { Template } from "tinacms"

const twoColumnsTemplate: Template = {
  name: "twoColumns",
  label: "two Columns",
  ui: {
    itemProps: (item) => {
      return { label: item?.title }
    },
  },
  fields: [
    { type: "string", label: "Title", name: "title" },
    {
      type: "rich-text",
      label: "content",
      name: "text",
    },
    {
      name: "src",
      label: "Image Source",
      type: "image",
    },
  ],
}

export default twoColumnsTemplate
