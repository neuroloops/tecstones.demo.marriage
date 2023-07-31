import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons"
import Image from "next/image"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import useStore from "@/zustand"
import { PageBlocksFooter } from "../../../tina/__generated__/types"

const Footer = ({ data }: { data: PageBlocksFooter }) => {
  const h3 = "text-2xl pb-4 "

  const siteName = useStore((state) => state.siteName)
  const socials = useStore((state) => state.socials)

  return (
    <footer id="footer" className=" p-4">
      <div className="flex justify-between gap-4 pr-24 text-sm text-gray-500">
        <div className="basis-1/3">
          <h3 className={h3}>{siteName}</h3>
          <p data-tina-field={tinaField(data, "outro")}>
            <TinaMarkdown content={data.outro} />
          </p>
        </div>
        <div>
          <h3 className={`${h3}`}>Contact Us</h3>

          <div data-tina-field={tinaField(data, "contactUs")}>
            <TinaMarkdown content={data.contactUs} />
            <a
              className="flex items-center gap-2 "
              href={`mailto:${socials.email}`}
            >
              <EnvelopeClosedIcon /> {socials.email}
            </a>
          </div>
        </div>
        <div>
          <h3 className={`${h3}`}>Information</h3>
          <ul>
            <li>Product Support</li>
            <li>Checkout</li>
            <li>Licence Policy</li>
            <li>Affiliate</li>
            <li>Locality</li>
          </ul>
        </div>
        <div>
          <h3 className={`${h3}`}>Follow</h3>
          <ul>
            {socials.facebook.length > 1 && (
              <li>
                <a href={socials.facebook} className="flex items-center gap-2 ">
                  <Image
                    src="/logo-facebook.svg"
                    alt="facebook icon"
                    height={16}
                    width={16}
                  />
                  Facebook{" "}
                </a>
              </li>
            )}
            {socials.twitter.length > 1 && (
              <li>
                <a href={socials.twitter} className="flex items-center gap-2 ">
                  <TwitterLogoIcon /> twitter
                </a>
              </li>
            )}
            {socials.instagram.length > 1 && (
              <li>
                <a
                  href={socials.instagram}
                  className="flex items-center gap-2 "
                >
                  <InstagramLogoIcon /> Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <p className="mt-20 pb-6 text-center text-gray-500">
        ©{new Date().getFullYear()} All Rights Reserved. Developed By TecsTones
      </p>
    </footer>
  )
}

export default Footer
