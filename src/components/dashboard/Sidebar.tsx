"use client"

import { cn } from "@/lib/utils"
import {
  Album02Icon,
  ArrowLeft03Icon,
  ArrowRight03Icon,
  DashboardSquare02Icon,
  MapsIcon,
  UserStoryIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { AnimatePresence, motion } from "motion/react"
import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links = [
  { href: "/account/dashboard", label: "Resumen", icon: DashboardSquare02Icon },
  { href: "/account/dashboard/catchmap", label: "CatchMap", icon: MapsIcon },
  { href: "/account/dashboard/catchgallery", label: "CatchGallery", icon: Album02Icon },
  { href: "/account/dashboard/account", label: "Cuenta", icon: UserStoryIcon },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <aside
      className={cn(
        "flex h-screen flex-col overflow-hidden bg-emerald-50 shadow-sm transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center overflow-hidden">
        <div className="flex max-w-[5rem] border-b p-2 text-lg font-bold">
          <img
            className="object-fit h-full w-full shrink-0"
            src="/App-icon.webp"
            alt="Acuanet banner"
          />
        </div>
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0, x: -15 }}
              animate={{ opacity: 1, width: "auto", x: 0 }}
              exit={{ opacity: 0, width: 0, x: -5 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute left-21 overflow-hidden whitespace-nowrap"
            >
              <span className="font-['BlackRolmerOblique'] text-5xl text-[#113530]">Acua</span>
              <span className="font-['BlackRolmerOblique'] text-5xl text-[#0bc788]">Net</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <nav className="mx-2 flex flex-1 flex-col gap-2">
        <div className="my-3 h-[1px] w-full bg-emerald-500 px-2"></div>
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <div
              key={link.href}
              className="relative"
            >
              <Link
                href={link.href}
                className={cn(
                  "relative ml-1.5 flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors",
                  pathname === link.href ? "text-emerald-700" : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <HugeiconsIcon
                  icon={link.icon}
                  size={25}
                  color="currentColor"
                  strokeWidth={1.5}
                  className="relative z-10 flex-shrink-0"
                />
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, x: -15 }}
                      animate={{ opacity: 1, width: "auto", x: 0 }}
                      exit={{ opacity: 0, width: 0, x: -5 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="relative z-10 overflow-hidden font-['BlackRolmer'] text-lg whitespace-nowrap"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
              {pathname === link.href && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-md bg-emerald-100"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </nav>
      <div className="my-5 h-[1px] w-full bg-emerald-500 px-2"></div>

      <button
        className={cn("relative mb-5 ml-2 flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors")}
        onClick={() => {
          setIsExpanded(!isExpanded)
        }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-3"
            >
              <HugeiconsIcon
                size={25}
                color="currentColor"
                icon={ArrowLeft03Icon}
              />
              <p className="font-['BlackRolmer'] text-lg font-semibold text-gray-700">Cerrar</p>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <HugeiconsIcon
                size={25}
                color="currentColor"
                icon={ArrowRight03Icon}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </aside>
  )
}
