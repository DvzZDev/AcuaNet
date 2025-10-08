import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface SidebarState {
  isExpanded: boolean
  toggleSidebar: () => void
  setSidebar: (isExpanded: boolean) => void
}

const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isExpanded: true,
      toggleSidebar: () => set((state) => ({ isExpanded: !state.isExpanded })),
      setSidebar: (isExpanded) => set({ isExpanded }),
    }),
    {
      name: "sidebar-storage", // nombre de la clave en localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useSidebarStore
