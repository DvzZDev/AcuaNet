"use client"

import { supabase } from "@/db/client"
import { EyeIcon, LockPasswordIcon, Mail01Icon, UserIcon, ViewOffIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useForm } from "@tanstack/react-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Bounce, toast } from "react-toastify"

async function emailVerification(email: string): Promise<boolean> {
  const { data, error } = await supabase.rpc("check_profile_email_exists", {
    input_email: email,
  })

  if (error) {
    console.error("Error verificando email:", error)
    return false
  }

  return data === true
}

export default function SignUpPage() {
  const router = useRouter()
  const [pwVisible, setPwVisible] = useState(false)
  const [focused, setFocused] = useState<"name" | "lastName" | "email" | "password" | "acceptTerms" | null>(null)

  const form = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
    onSubmit: async ({ value }) => {
      const emailDuplicate = await emailVerification(value.email)

      console.log("Email", value.email)
      console.log("Email duplicate:", emailDuplicate)

      if (emailDuplicate) {
        toast.error("El email ya esta en uso", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
          theme: "light",
          transition: Bounce,
        })
        return
      }

      if (!value.acceptTerms) {
        alert("Debes aceptar los términos y condiciones")
        return
      }

      const { error } = await supabase.auth.signUp({
        email: value.email,
        password: value.password,
        options: {
          data: {
            name: value.name,
            lastName: value.lastName,
          },
        },
      })

      if (error) {
        console.error("Error al registrar:", error.message)
        alert("Error al registrar: " + error.message)
        return
      }

      router.push("/auth/signin")
    },
  })

  return (
    <section className="relative flex h-svh flex-col overflow-hidden bg-[#16151a]">
      <div className="z-10 mt-[5svh] flex flex-col items-center px-6 lg:mt-[15svh]">
        <div className="w-[13rem] lg:w-[16rem]">
          <img
            className="h-full w-full object-cover"
            src="/bannerwhite.webp"
            alt="Acuanet logo white"
          />
        </div>

        <h1 className="mt-7 text-2xl font-bold text-emerald-100 lg:text-4xl">Crea tu cuenta</h1>
        <div className="mt-2 flex flex-row gap-2">
          <h2 className="text-sm text-emerald-100 lg:text-base">¿Ya tienes cuenta?</h2>
          <a
            href="/auth/signin"
            className="cursor-pointer text-sm text-emerald-300 hover:text-emerald-200 lg:text-base"
          >
            Inicia sesión
          </a>
        </div>

        <div className="z-40 w-full max-w-md gap-4 rounded-3xl pb-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              void form.handleSubmit()
            }}
            className="my-6 space-y-4 lg:my-7"
          >
            {/* Name and Last Name Row */}
            <div className="flex gap-1 lg:gap-2">
              <form.Field
                name="name"
                validators={{
                  onSubmit: ({ value }) => (!value ? "El nombre es requerido" : undefined),
                }}
              >
                {(field) => (
                  <div className="flex w-1/2 flex-col">
                    <div
                      className="flex items-center gap-2 rounded-full bg-green-100 px-3"
                      style={{
                        borderWidth: 2,
                        borderStyle: "solid",
                        borderColor:
                          field.state.meta.errors.length > 0 ? "#ef4444" : focused === "name" ? "#10b981" : "transparent",
                      }}
                    >
                      <HugeiconsIcon
                        icon={UserIcon}
                        size={20}
                        color="#047857"
                        strokeWidth={1.5}
                      />
                      <input
                        className="h-10 w-[7rem] bg-transparent text-sm font-medium text-emerald-900 outline-none placeholder:text-emerald-700 lg:h-12 lg:w-[10rem] lg:text-base"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onFocus={() => setFocused("name")}
                        onBlur={() => {
                          setFocused(null)
                          field.handleBlur()
                        }}
                        type="text"
                        placeholder="Nombre"
                      />
                    </div>
                    {field.state.meta.errors.length > 0 && (
                      <p className="mt-1 px-4 text-sm text-red-500">{field.state.meta.errors[0]}</p>
                    )}
                  </div>
                )}
              </form.Field>

              <form.Field
                name="lastName"
                validators={{
                  onSubmit: ({ value }) => (!value ? "Los apellidos son requeridos" : undefined),
                }}
              >
                {(field) => (
                  <div className="flex w-1/2 flex-1 flex-col">
                    <div
                      className="flex items-center gap-2 rounded-full bg-green-100 px-3"
                      style={{
                        borderWidth: 2,
                        borderStyle: "solid",
                        borderColor:
                          field.state.meta.errors.length > 0 ? "#ef4444" : focused === "lastName" ? "#10b981" : "transparent",
                      }}
                    >
                      <HugeiconsIcon
                        icon={UserIcon}
                        size={20}
                        color="#047857"
                        strokeWidth={1.5}
                      />
                      <input
                        className="h-10 w-[7rem] self-center bg-transparent text-sm font-medium text-emerald-900 outline-none placeholder:text-emerald-700 lg:h-12 lg:w-[10rem] lg:text-base"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onFocus={() => setFocused("lastName")}
                        onBlur={() => {
                          setFocused(null)
                          field.handleBlur()
                        }}
                        type="text"
                        placeholder="Apellidos"
                      />
                    </div>
                    {field.state.meta.errors.length > 0 && (
                      <p className="mt-1 px-4 text-sm text-red-500">{field.state.meta.errors[0]}</p>
                    )}
                  </div>
                )}
              </form.Field>
            </div>

            <form.Field
              name="email"
              validators={{
                onSubmit: ({ value }) => {
                  if (!value) return "El email es requerido"
                  if (!/\S+@\S+\.\S+/.test(value)) return "Email inválido"
                  return undefined
                },
              }}
            >
              {(field) => (
                <div className="flex-col">
                  <div
                    className="flex items-center gap-2 rounded-full bg-green-100 px-3"
                    style={{
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor:
                        field.state.meta.errors.length > 0 ? "#ef4444" : focused === "email" ? "#10b981" : "transparent",
                    }}
                  >
                    <HugeiconsIcon
                      icon={Mail01Icon}
                      size={20}
                      color="#047857"
                      strokeWidth={1.5}
                    />
                    <input
                      className="h-10 flex-1 bg-transparent text-sm font-medium text-emerald-900 outline-none placeholder:text-emerald-700 lg:h-12 lg:text-base"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onFocus={() => setFocused("email")}
                      onBlur={() => {
                        setFocused(null)
                        field.handleBlur()
                      }}
                      type="email"
                      autoComplete="email"
                      placeholder="Ingresa tu email"
                    />
                  </div>
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 px-4 text-sm text-red-500">{field.state.meta.errors[0]}</p>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field
              name="password"
              validators={{
                onSubmit: ({ value }) => {
                  if (!value) return "La contraseña es requerida"
                  if (value.length < 6) return "La contraseña debe tener al menos 6 caracteres"
                  return undefined
                },
              }}
            >
              {(field) => (
                <div className="flex-col">
                  <div
                    className="flex items-center gap-2 rounded-full bg-green-100 px-3"
                    style={{
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor:
                        field.state.meta.errors.length > 0 ? "#ef4444" : focused === "password" ? "#10b981" : "transparent",
                    }}
                  >
                    <HugeiconsIcon
                      icon={LockPasswordIcon}
                      size={20}
                      color="#047857"
                      strokeWidth={1.5}
                    />
                    <input
                      className="h-10 w-[10rem] bg-transparent text-sm font-medium text-emerald-900 outline-none placeholder:text-emerald-700 lg:h-12 lg:w-full lg:text-base"
                      type={pwVisible ? "text" : "password"}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onFocus={() => setFocused("password")}
                      onBlur={() => {
                        setFocused(null)
                        field.handleBlur()
                      }}
                      autoComplete="new-password"
                      placeholder="Ingresa tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setPwVisible(!pwVisible)}
                      className="ml-auto cursor-pointer"
                    >
                      {pwVisible ? (
                        <HugeiconsIcon
                          icon={ViewOffIcon}
                          size={20}
                          color="#047857"
                          strokeWidth={1.5}
                        />
                      ) : (
                        <HugeiconsIcon
                          icon={EyeIcon}
                          size={20}
                          color="#047857"
                          strokeWidth={1.5}
                        />
                      )}
                    </button>
                  </div>
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 px-4 text-sm text-red-500">{field.state.meta.errors[0]}</p>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field
              name="acceptTerms"
              validators={{
                onSubmit: ({ value }) => (!value ? "Debes aceptar los términos y condiciones" : undefined),
              }}
            >
              {(field) => (
                <div className="flex-col">
                  <div className="flex items-center gap-3 px-2">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      checked={field.state.value}
                      onChange={(e) => field.handleChange(e.target.checked)}
                      className="h-5 w-5 rounded border-2 border-green-300 text-emerald-500 focus:ring-2 focus:ring-emerald-500"
                    />
                    <label
                      htmlFor="acceptTerms"
                      className="text-sm text-emerald-100 lg:text-base"
                    >
                      Acepto los{" "}
                      <a
                        href="https://acuanet.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-300 transition-colors hover:text-emerald-200"
                      >
                        términos y condiciones
                      </a>
                    </label>
                  </div>
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 px-4 text-sm text-red-500">{field.state.meta.errors[0]}</p>
                  )}
                </div>
              )}
            </form.Field>

            <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
              {([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`mt-1 w-full cursor-pointer rounded-md border border-[#83ffc5] p-1 text-base font-semibold transition-all lg:mt-3 lg:p-2 lg:text-xl ${
                    canSubmit ? "bg-emerald-500 text-green-950 hover:bg-emerald-400" : "bg-emerald-900 text-green-100 opacity-60"
                  }`}
                >
                  {isSubmitting ? "Registrando..." : "Registrarse"}
                </button>
              )}
            </form.Subscribe>
          </form>
        </div>
      </div>

      <div className="absolute -bottom-[40rem] left-1/2 z-0 h-[50rem] w-full -translate-x-1/2 transform rounded-full bg-emerald-600 blur-[20rem] lg:-bottom-[50rem]" />
    </section>
  )
}
