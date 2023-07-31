import { create } from "zustand"

type State = {
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

type Action = {
  setMessage: (paypalMessage: State["paypalMessage"]) => void
  setSiteName: (siteName: State["siteName"]) => void
  setSocials: (socials: State["socials"]) => void
  setLogo: (socials: State["logo"]) => void
}

const useStore = create<State & Action>((set) => ({
  paypalMessage: "",
  siteName: "",
  logo: "",
  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
    email: "",
  },

  setMessage: (paypalMessage: string) =>
    set(() => ({ paypalMessage: paypalMessage })),
  setSiteName: (siteName: string) => set(() => ({ siteName: siteName })),
  setSocials: (socials: State["socials"]) => set(() => ({ socials: socials })),
  setLogo: (logo: State["logo"]) => set(() => ({ logo: logo })),
}))

export default useStore
