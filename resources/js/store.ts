import { create } from 'zustand'

export const useStore = create((set) => ({
    modalOpen:false,
    chooseModal:false,
    OpenModal: () => set(()=>({modalOpen:true})),
    CloseModal: () => set(()=>({modalOpen:false})),
    OpenChooseModal: () => set(()=>({chooseModal:true})),
    CloseChooseModal: () => set(()=>({chooseModal:false})),
}))
