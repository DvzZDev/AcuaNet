"use client"

import { logout } from "@/db/actions"
import { cn } from "@/lib/utils"
import useSidebarStore from "@/store/useSidebarStore"
import {
  Album02Icon,
  ArrowLeft03Icon,
  ArrowRight03Icon,
  DashboardSquare02Icon,
  Delete01Icon,
  Logout03Icon,
  MapsIcon,
  UserStoryIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { AnimatePresence, motion } from "motion/react"
import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

const links = [
  { href: "/account/dashboard", label: "Resumen", icon: DashboardSquare02Icon },
  { href: "/account/dashboard/catchmap", label: "CatchMap", icon: MapsIcon },
  { href: "/account/dashboard/catchgallery", label: "CatchGallery", icon: Album02Icon },
  { href: "/account/dashboard/account", label: "Cuenta", icon: UserStoryIcon },
]

export default function SidebarWide() {
  const pathname = usePathname()
  const { isExpanded, toggleSidebar } = useSidebarStore()

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 flex h-screen shrink-0 grow-0 flex-col overflow-hidden bg-emerald-50 shadow-sm transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-20"
      )}
    >
      <Link
        href="/account/dashboard"
        className="flex items-center overflow-hidden"
      >
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
      </Link>
      <nav className="mx-2 mt-7 flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <div
              key={link.href}
              className="relative"
            >
              <Link
                href={link.href}
                className={cn(
                  "relative ml-1.5 flex h-10 items-center gap-3 rounded-md px-3 text-base font-medium transition-colors",
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
        <div className="h-[1px] w-full bg-emerald-500 px-2"></div>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <button
              className="relative ml-1.5 flex h-10 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100"
              onClick={() => {
                void logout()
              }}
            >
              <HugeiconsIcon
                icon={Logout03Icon}
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
                    Cerrar sesión
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div className="relative">
            <button
              className="relative ml-1.5 flex h-10 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-base font-medium text-red-600 transition-colors hover:bg-red-50"
              onClick={() => {
                // Lógica de borrar cuenta
              }}
            >
              <HugeiconsIcon
                icon={Delete01Icon}
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
                    Borrar cuenta
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>
      <div className="my-5 h-[1px] w-full bg-emerald-500 px-2"></div>

      <button
        className={cn(
          "relative mb-5 ml-2 flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors"
        )}
        onClick={toggleSidebar}
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
