"use client"

import Footer from "@/components/global/Footer"
import Navbar from "@/components/global/Navbar"
import { usePathname } from "next/navigation"

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith("/account/dashboard")

  return (
    <>
      {!isDashboard && <Navbar />}
      <main className={isDashboard ? "" : "pt-[4rem]"}>{children}</main>
      {!isDashboard && <Footer />}
    </>
  )
}
