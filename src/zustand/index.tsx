import { create } from "zustand"

type State = {
  paypalMessage: string
}

type Action = {
  updateMessage: (paypalMessage: State["paypalMessage"]) => void
}

const useStore = create<State & Action>((set) => ({
  paypalMessage: "",
  updateMessage: (paypalMessage) =>
    set(() => ({ paypalMessage: paypalMessage })),
}))

export default useStore
