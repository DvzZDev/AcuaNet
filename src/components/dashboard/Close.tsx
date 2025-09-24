"use client"

import { logout } from "@/db/actions"

export default function Close() {
  return (
    <button
      className="cursor-pointer"
      onClick={void logout}
    >
      Cerrar sesión
    </button>
  )
}
