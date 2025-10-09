"use client"

import { logout } from "@/db/actions"
import nombreEmbalses from "@/lib/nombresEmbalses.json"
import { cn } from "@/lib/utils"
import {
  Album02Icon,
  ChatSearchIcon,
  DashboardSquare02Icon,
  Delete01Icon,
  ImageUploadIcon,
  Logout03Icon,
  MapsIcon,
  Search02Icon,
  TimeQuarterPassIcon,
  UserStoryIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Hamburger from "hamburger-react"
import { AnimatePresence, motion } from "motion/react"
import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

const links = [
  { href: "/account/dashboard", label: "Resumen", icon: DashboardSquare02Icon },
  { href: "/account/dashboard/catchmap", label: "CatchMap", icon: MapsIcon },
  { href: "/account/dashboard/catchgallery", label: "CatchGallery", icon: Album02Icon },
  { href: "/account/dashboard/account", label: "Cuenta", icon: UserStoryIcon },
]

import AutoCompleteHook from "@/hooks/AutoComplete"
import { UserData } from "@/types"

interface UpperBarCliMobProps {
  userData?: UserData
}

export default function UpperBarCliMob({ userData }: UpperBarCliMobProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [active, setActive] = useState(false)
  const { type, suggestions, handletype, handleSuggestionClick, handleSubmit, searchData, isLoading } =
    AutoCompleteHook(nombreEmbalses)

  const showSuggestions = active && suggestions.length > 0
  return (
    <div className="relative flex h-[4rem] w-full items-center justify-between gap-3 bg-[#112b27]/60 p-2">
      <Tooltip id="my-tooltip-mobile" />
      {/* Logo */}
      <img
        width={50}
        height={50}
        src="/App-icon.webp"
        alt="Acuanet icon"
      />
      {/* Search Bar */}
      <motion.div
        animate={{
          height: showSuggestions ? "auto" : "auto",
        }}
        className="relative w-[25rem]"
      >
        <form onSubmit={(e) => void handleSubmit(e)}>
          <div className="flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 p-2">
            <HugeiconsIcon icon={Search02Icon} />
            <input
              placeholder="Buscar embalse..."
              value={type}
              onChange={handletype}
              onFocus={() => setActive(true)}
              onBlur={() => setTimeout(() => setActive(false), 200)}
              className="h-fit w-full focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
              disabled={!searchData.unlimited && searchData.remaining === 0}
            />
          </div>
        </form>

        {/* Search Info for free users */}
        {!searchData.unlimited && (
          <div className="absolute top-full left-0 mt-1 flex gap-2 text-xs">
            {isLoading ? (
              <div className="flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5">
                <span className="font-medium text-emerald-700">Cargando...</span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5">
                  <HugeiconsIcon
                    icon={ChatSearchIcon}
                    size={14}
                    color="#022c22"
                    strokeWidth={1.5}
                  />
                  <span
                    className={`font-medium ${
                      searchData.remaining === 0
                        ? "text-red-700"
                        : searchData.remaining <= 2
                          ? "text-yellow-700"
                          : "text-emerald-700"
                    }`}
                  >
                    {searchData.remaining === 0 ? "0 búsquedas" : `${searchData.remaining}`}
                  </span>
                </div>
                {searchData.daysUntilReset !== undefined && (
                  <div className="flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5">
                    <HugeiconsIcon
                      icon={TimeQuarterPassIcon}
                      size={14}
                      color="#022c22"
                      strokeWidth={1.5}
                    />
                    <span className="font-medium text-emerald-700">{searchData.daysUntilReset}d</span>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* AutoComplete */}
        <AnimatePresence>
          {showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              layout
              className="absolute top-full left-0 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-emerald-200 bg-emerald-50 shadow-lg"
            >
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    void handleSuggestionClick(suggestion)
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                    }}
                    layout
                    className="cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-emerald-100"
                  >
                    {suggestion}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/* MenuIcon */}
      <div className="flex items-center justify-center rounded-full bg-emerald-700/20">
        <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          direction="right"
          size={28}
          color="#93ffb7"
        />
      </div>

      {/* Menu Expand */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-[4rem] right-0 z-50 w-[18rem] rounded-2xl bg-emerald-50 p-4 shadow-lg"
          >
            {/* User Account Section */}
            <div className="mb-4 flex items-center gap-3 border-b border-emerald-200 pb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-200">
                {userData?.avatar_url || userData?.picture ? (
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={userData?.avatar_url || userData?.picture}
                    alt="User avatar"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <HugeiconsIcon
                    icon={UserStoryIcon}
                    size={24}
                    color="#059669"
                    strokeWidth={1.5}
                  />
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-['BlackRolmer'] text-base font-semibold text-gray-800">
                    {userData?.full_name || userData?.name || "Usuario"}
                  </span>
                  <div className="w-fit rounded-full bg-gradient-to-br from-purple-300 to-purple-900 p-1 text-[8px] font-semibold text-purple-100">
                    <p className="leading-none">AN Pro</p>
                  </div>
                </div>
                <span className="font-['BlackRolmer'] text-sm text-gray-600">{userData?.email || "usuario@ejemplo.com"}</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col">
              {links.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "relative flex h-12 items-center gap-3 rounded-md px-3 text-base font-medium transition-colors",
                      pathname === link.href ? "text-emerald-700" : "text-gray-700 hover:bg-gray-100"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <HugeiconsIcon
                      icon={link.icon}
                      size={20}
                      color="currentColor"
                      strokeWidth={1.5}
                      className="relative z-10 flex-shrink-0"
                    />
                    <span className="relative z-10 font-['BlackRolmer'] text-base">{link.label}</span>
                  </Link>
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeIndicatorMobile"
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

              {/* Subir Captura Button */}
              <div className="relative">
                <button
                  data-tooltip-id="my-tooltip-mobile"
                  data-tooltip-content="En desarrollo, usa la App"
                  className="relative flex h-12 w-full items-center gap-3 rounded-md px-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100"
                >
                  <HugeiconsIcon
                    icon={ImageUploadIcon}
                    size={20}
                    color="currentColor"
                    strokeWidth={1.5}
                    className="relative z-10 flex-shrink-0"
                  />
                  <span className="relative z-10 font-['BlackRolmer'] text-base">Subir Captura</span>
                </button>
              </div>

              {/* Separator */}
              <div className="my-2 h-[1px] w-full bg-emerald-300"></div>

              {/* Action Buttons */}
              <div className="flex flex-col">
                <button
                  className="relative flex h-12 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100"
                  onClick={() => {
                    void logout()
                    setIsMenuOpen(false)
                  }}
                >
                  <HugeiconsIcon
                    icon={Logout03Icon}
                    size={20}
                    color="currentColor"
                    strokeWidth={1.5}
                    className="relative z-10 flex-shrink-0"
                  />
                  <span className="relative z-10 font-['BlackRolmer'] text-base">Cerrar sesión</span>
                </button>

                <button
                  className="relative flex h-12 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-base font-medium text-red-600 transition-colors hover:bg-red-50"
                  onClick={() => {
                    // Lógica de borrar cuenta
                    setIsMenuOpen(false)
                  }}
                >
                  <HugeiconsIcon
                    icon={Delete01Icon}
                    size={20}
                    color="currentColor"
                    strokeWidth={1.5}
                    className="relative z-10 flex-shrink-0"
                  />
                  <span className="relative z-10 font-['BlackRolmer'] text-base">Borrar cuenta</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
