import { gwendolyn, roboto, cardo } from "../../utils/fonts"
import { Template } from "tinacms"

const Hero = () => {
  return (
    <div className={`${cardo.className} text-center`}>
      <span className="text-base">A marriage Ceremony</span>
      <h1 className="text-5xl">Best Life Partner</h1>
      <button className="border border-solid border-black bg-white px-4 py-2 text-xxs uppercase">
        Read More
      </button>
    </div>
  )
}

export default Hero

export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
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
      label: "Text",
      name: "text",
      type: "rich-text",
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
}
