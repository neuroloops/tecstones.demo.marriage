import { twMerge } from "tailwind-merge"

const Buttons = ({
  children,
  className = "",
}: {
  children: JSX.Element
  className?: string
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        "mx-auto w-fit rounded-3xl border-2 border-main-500 bg-main-500 px-6 py-3 text-base text-white transition duration-300 hover:border-main-800 hover:bg-main-800",
        className
      )}
    >
      {children}
    </button>
  )
}

export default Buttons

//   rounded-3xl border-2
//  border-main-500 bg-main-500 px-6 py-3 text-base text-white transition duration-300 hover:border-main-800 hover:bg-main-800
