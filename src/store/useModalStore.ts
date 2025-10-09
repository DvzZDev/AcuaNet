import { create } from "zustand"

export type ModalType = "upgradePlan" | "searchLimit" | "info" | null

interface ModalData {
  [key: string]: unknown
}

interface ModalState {
  modalType: ModalType
  isModalVisible: boolean
  modalData?: ModalData
  openModal: (type: ModalType, data?: ModalData) => void
  closeModal: () => void
}

const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  isModalVisible: false,
  modalData: undefined,
  openModal: (type: ModalType, data?: ModalData) => set({ modalType: type, isModalVisible: true, modalData: data }),
  closeModal: () => set({ modalType: null, isModalVisible: false, modalData: undefined }),
}))

export default useModalStore
