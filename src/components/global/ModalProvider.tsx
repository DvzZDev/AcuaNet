"use client"

import useModalStore from "@/store/useModalStore"
import { AnimatePresence } from "motion/react"
import { useEffect } from "react"
import SearchLimitModal from "./SearchLimitModal"

const ModalProvider = () => {
  const { modalType, isModalVisible } = useModalStore()

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isModalVisible])

  const renderModal = () => {
    switch (modalType) {
      case "searchLimit":
        return <SearchLimitModal />
      case "info":
        return null
      default:
        return null
    }
  }

  return <AnimatePresence mode="wait">{isModalVisible && renderModal()}</AnimatePresence>
}

export default ModalProvider
