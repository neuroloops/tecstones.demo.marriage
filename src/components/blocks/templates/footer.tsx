import { Template } from "tinacms"

const footerTemplate: Template = {
  name: "footer",
  label: "Footer",
  fields: [
    {
      type: "rich-text",
      label: "Outro",
      name: "outro",
    },
    {
      type: "rich-text",
      label: "Contact Us",
      name: "contactUs",
    },
  ],
}

export default footerTemplate
