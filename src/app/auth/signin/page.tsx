"use client"

import { login, signInWithGoogle } from "@/db/actions"
import { EyeIcon, LockPasswordIcon, Mail01Icon, ViewOffIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useForm } from "@tanstack/react-form"
import { useState } from "react"

export default function Page() {
  const [pwVisible, setPwVisible] = useState(false)
  const [focused, setFocused] = useState<"email" | "password" | null>(null)

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const result = await login(value)

      if (result?.error) {
        alert(`Error: ${result.error}`)
        return
      }

      // La action ya maneja la redirección automáticamente
    },
  })

  return (
    <section className="relative flex h-svh flex-col overflow-hidden bg-[#16151a]">
      <div className="z-10 mt-[5svh] flex flex-col items-center px-6 lg:mt-[15svh]">
        <div className="w-[13rem] lg:w-[16rem]">
          <img
            className="h-full w-full object-cover"
            src="/Banner.png"
            alt="Acuanet logo white"
          />
        </div>

        <h1 className="mt-7 text-2xl font-bold text-emerald-100 lg:text-4xl">Inicia sesión</h1>
        <div className="mt-2 flex flex-row gap-2">
          <h2 className="text-sm text-emerald-100 lg:text-base">¿No tienes cuenta?</h2>
          <a
            href="/auth/signup"
            className="cursor-pointer text-sm text-emerald-300 hover:text-emerald-200 lg:text-base"
          >
            Crear cuenta
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
                      color="#047857"
                      strokeWidth={1.5}
                      className="h-5 w-5 lg:h-6 lg:w-6"
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
                      className="h-5 w-5 lg:h-6 lg:w-6"
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
                      autoComplete="current-password"
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
                          className="h-5 w-5 lg:h-6 lg:w-6"
                          color="#047857"
                          strokeWidth={1.5}
                        />
                      ) : (
                        <HugeiconsIcon
                          icon={EyeIcon}
                          className="h-5 w-5 lg:h-6 lg:w-6"
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

            <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
              {([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`mt-1 w-full cursor-pointer rounded-md border border-[#83ffc5] p-1 text-base font-semibold transition-all lg:mt-3 lg:p-2 lg:text-xl ${
                    canSubmit ? "bg-emerald-500 text-green-950 hover:bg-emerald-400" : "bg-emerald-900 text-green-100 opacity-60"
                  }`}
                >
                  {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
                </button>
              )}
            </form.Subscribe>
          </form>

          <div className="text-center">
            <p className="text-center text-sm text-green-100">¿Has olvidado la contraseña?</p>
            <a
              href="/auth/recover"
              className="cursor-pointer text-sm text-emerald-300 hover:text-emerald-200"
            >
              Pincha Aquí
            </a>
          </div>

          <div className="mt-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-emerald-700"></div>
              <span className="text-sm text-emerald-200">O inicia sesión con</span>
              <div className="h-px flex-1 bg-emerald-700"></div>
            </div>

            <form>
              <button
                formAction={signInWithGoogle}
                className="flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white p-3 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 262"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  className="mr-3"
                >
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  />
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  />
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  />
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">Continuar con Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[40rem] left-1/2 z-0 h-[50rem] w-full -translate-x-1/2 transform rounded-full bg-emerald-600 blur-[20rem] lg:-bottom-[50rem]" />
    </section>
  )
}
