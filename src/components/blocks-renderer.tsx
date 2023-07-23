import type { Page, PageBlocks } from "../../tina/__generated__/types"
import Hero from "./blocks/Hero"
import Testimonial from "./blocks/Testimonial"
import Footer from "./blocks/Footer"
import Service from "./blocks/Service"
import { tinaField } from "tinacms/dist/react"

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block: PageBlocks, i: number) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            )
          })
        : null}
    </>
  )
}

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksHero":
      return <Hero data={block} />
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />
    case "PageBlocksService":
      return <Service data={block} />
    // case "PageBlocksFooter":
    //   return <Footer data={block} />
    default:
      return null
  }
}
