const Buttons = ({ children }) => {
  return (
    <button
      className="rounded-3xl border-2
     border-main-500 bg-main-500 px-6 py-3 text-base text-white transition duration-300 hover:border-main-800 hover:bg-main-800
     "
    >
      {children}
    </button>
  )
}

export default Buttons
