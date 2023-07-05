import { cardo } from "@/utils/fonts"

export const Footer = () => {
  const h3 = "text-2xl pb-4 " + cardo.className

  return (
    <footer id="footer" className="p-4">
      <div className="flex justify-between gap-4 pr-24 text-sm text-gray-500">
        <div className="basis-1/3">
          <h3 className={h3}>Afg Marriage</h3>
          <p>
            We&apos;re Tilia, a team of photographers & videographers. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium. Est sale definitiones id. Ut quo quem harum
            munere, eu labore voluptatum mei.
          </p>
        </div>
        <div>
          <h3 className={`${h3}`}>Contact Us</h3>
          <p>
            Address: <br />
            60 29th Street San Francisco
          </p>
          <p>
            Call us now: <br /> 0123-456-789
          </p>
          <p>
            Email: <br />
            mail@exemple.com
          </p>
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
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
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