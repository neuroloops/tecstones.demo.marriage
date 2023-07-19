import { Template } from "tinacms"
import { useState } from "react"
import {
  PageBlocksHero,
  PageBlocksHeroHeroCards,
} from "../../../tina/__generated__/types"

const Hero = ({ data }: { data: PageBlocksHero }) => {
  const [index, setIndex] = useState(0)

  const changeIndex = (index: number) => {
    const maxLength = data.HeroCards.length
    setIndex(index)
    if (index === maxLength) setIndex(0)
    if (index < 0) setIndex(maxLength - 1)
  }

  return (
    <div className="carousel w-full">
      {data?.HeroCards?.map((card: PageBlocksHeroHeroCards, key: number) => {
        return (
          <div
            key={key}
            id={`slide${key}`}
            className="carousel-item hero relative min-h-screen w-full "
            style={{ backgroundImage: `url(${card.image?.src})` }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <p className="mb-5">
                  {card.tagline} {`#slide${index + 1}`}
                </p>
                <h1 className="mb-5 text-5xl font-bold">{card.headline}</h1>
                <button className="glass btn text-white">Get Started</button>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${index}`}
                onClick={() => changeIndex(index - 1)}
                className="btn-circle btn"
              >
                ❮
              </a>
              <a
                href={`#slide${index}`}
                onClick={() => changeIndex(index + 1)}
                className="btn-circle btn"
              >
                ❯
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Hero

export const HeroBlockSchema: Template = {
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
