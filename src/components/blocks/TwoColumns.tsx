import Image from "next/image"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { PageBlocksTwoColumns } from "../../../tina/__generated__/types"

const twoColumns = ({ data }: { data: PageBlocksTwoColumns }) => {
  return (
    <section id="whyUs">
      <div className="mx-auto px-5 py-24">
        <h2 data-tina-field={tinaField(data, "title")}>{data.title}</h2>
        <div className="flex max-w-full flex-row flex-wrap justify-around gap-2">
          <div className="w-full lg:w-1/3">
            <TinaMarkdown content={data.text} />
          </div>
          <Image
            height={300}
            width={500}
            alt="testimonial"
            className="mb-8 inline-block object-cover "
            src={data.src}
          />
        </div>
      </div>
    </section>
  )
}

export default twoColumns
