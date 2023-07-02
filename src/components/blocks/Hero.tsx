// import { gwendolyn, roboto, cardo } from "@/utils/fonts"
import Image from "next/image"
import { Template } from "tinacms"

//  ${cardo.className}

const Hero = ({ data }: any) => {
  const { tagline, headline, image } = data

  return (
    <div
      className="hero min-h-screen w-full "
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <p className="mb-5">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold">{headline}</h1>
          <button className="glass btn text-white">Get Started</button>
        </div>
      </div>
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
}
