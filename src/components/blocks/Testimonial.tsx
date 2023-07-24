import Image from "next/image"

import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { PageBlocksTestimonial } from "../../../tina/__generated__/types"
import { iTestimonial } from "@/types/types"

const Testimonial = ({ data }: { data: PageBlocksTestimonial }) => {
  const { testimonials } = data

  return (
    <section id="testimonials">
      <div className="container mx-auto px-5 py-24">
        <h2> Testimonials</h2>
        <div className="-m-4 flex flex-wrap justify-around">
          {testimonials.map((testimonial: iTestimonial, key: number) => {
            const { author, image, quote } = testimonial

            const imgSrc =
              image?.src ||
              image?.url ||
              "https://i.pravatar.cc/150?u=fake@" + author

            return (
              <div className="mb-6 w-72  p-4  lg:mb-0  " key={key}>
                <div
                  className="h-full text-center"
                  data-tina-field={tinaField(testimonial, "image")}
                >
                  <Image
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
                  <h3
                    className="title-font text-sm font-medium tracking-wider text-gray-900"
                    data-tina-field={tinaField(testimonial, "author")}
                  >
                    {author}
                  </h3>
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
