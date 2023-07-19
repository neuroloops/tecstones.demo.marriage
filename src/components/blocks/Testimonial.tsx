// import { gwendolyn, roboto, cardo } from "@/utils/fonts"
import Image from "next/image"
import { Template } from "tinacms"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { PageBlocksTestimonial } from "../../../tina/__generated__/types"

type iTestimonial = {
  author: string
  image: { src: string; url: string }
  quote: string
}

const Testimonial = ({ data }: { data: PageBlocksTestimonial }) => {
  const { testimonials } = data

  return (
    <section className="body-font text-gray-600" id="testimonial">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap">
          {testimonials.map((testimonial: iTestimonial, key: number) => {
            const { author, image, quote } = testimonial

            const imgSrc =
              image?.src ||
              image?.url ||
              "https://i.pravatar.cc/150?u=fake@" + author

            return (
              <div
                className="mb-6 w-full p-4 sm:w-1/2 lg:mb-0 lg:w-1/3"
                key={key}
              >
                <div
                  className="h-full text-center"
                  data-tina-field={tinaField(testimonial, "image")}
                >
                  <Image
                    // fill={true}
                    height={150}
                    width={150}
                    alt="testimonial"
                    className="mb-8 inline-block h-36 w-36 rounded-full border-2 border-gray-200 bg-gray-100 object-center"
                    src={imgSrc}
                  />
                  {quote && (
                    <>
                      <div
                        className="leading-relaxed"
                        data-tina-field={tinaField(testimonial, "quote")}
                      >
                        <TinaMarkdown
                          content={{
                            type: "",
                            children: [],
                          }}
                        />
                        {quote}
                      </div>
                      <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
                    </>
                  )}
                  <h2
                    className="title-font text-sm font-medium tracking-wider text-gray-900"
                    data-tina-field={tinaField(testimonial, "author")}
                  >
                    {author}
                  </h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonial

export const TestimonialBlockSchema: Template = {
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
