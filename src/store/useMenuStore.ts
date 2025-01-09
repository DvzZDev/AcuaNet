import { create } from "zustand"

interface MenuState {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

const UseMenuStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}))

export default UseMenuStore
