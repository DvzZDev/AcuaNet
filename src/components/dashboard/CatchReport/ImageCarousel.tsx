"use client"

import { GooglePhotosIcon, MinimizeScreenIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { AnimatePresence, motion } from "motion/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ChipTitle from "./ChipTitle"

interface ImageCarouselProps {
  images: string[]
  onImageClick: (imageUrl: string) => void
  selectedImage: string | null
  setSelectedImage: (imageUrl: string | null) => void
}

export default function ImageCarousel({ images, onImageClick, selectedImage, setSelectedImage }: ImageCarouselProps) {
  return (
    <div className="flex h-full flex-col gap-3">
      <ChipTitle
        icon={GooglePhotosIcon}
        title="Galeria"
        bg="bg-[#064e3b]"
        borderColor="border-emerald-400"
        iconColor="#5ee9aa"
        textColor="text-emerald-300"
      />
      <div className="aspect-square w-full overflow-hidden rounded-2xl">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper h-full w-full"
        >
          {images.map((imgUrl, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full"
            >
              <motion.img
                src={imgUrl}
                alt={`Image ${index + 1}`}
                className="h-full w-full cursor-pointer object-cover"
                onClick={() => onImageClick(imgUrl)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                draggable={false}
                alt="Imagen ampliada"
                className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-all hover:scale-110 active:scale-70"
              >
                <HugeiconsIcon
                  icon={MinimizeScreenIcon}
                  size={24}
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
