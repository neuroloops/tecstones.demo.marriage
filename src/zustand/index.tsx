import { create } from "zustand"

type State = {
  globals: {
    paypalMessage: string
    siteName: string
    logo: string
    socials: {
      facebook: string
      instagram: string
      twitter: string
      email: string
    }
  }
}

type Action = {
  setGlobals: (socials: State["globals"]) => void
}

const useStore = create<State & Action>((set) => ({
  globals: {
    paypalMessage: "",
    siteName: "",
    logo: "",
    socials: {
      facebook: "",
      instagram: "",
      twitter: "",
      email: "",
    },
  },

  setGlobals: (globals: State["globals"]) => set(() => ({ globals: globals })),
}))

export default useStore
