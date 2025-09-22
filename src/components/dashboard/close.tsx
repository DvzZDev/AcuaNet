"use client"

import { logout } from "@/db/actions"
import React from "react"

export default function Close() {
  return (
    <button
      className="cursor-pointer"
      onClick={logout}
    >
      Cerrar sesión
    </button>
  )
}
