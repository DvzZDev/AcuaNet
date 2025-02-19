"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "@justinribeiro/lite-youtube"

export default function Instructor() {
  const [step, setStep] = useState(0)

  return (
    <AnimatePresence mode="wait">
      {step < 2 && (
        <motion.section
          key="modal"
          exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
          className="absolute z-20 flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-black/50 px-4 font-[Inter] text-sm text-emerald-950 backdrop-blur-sm lg:text-base"
        >
          {step === 0 ? (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-md space-y-4 rounded-lg border border-green-50/30 bg-emerald-700/25 px-4 py-4 text-green-100 shadow-lg"
            >
              <h1 className="text-3xl font-semibold text-green-300 lg:text-4xl">AcuaVisor</h1>
              <p className="leading-relaxed">
                Gracias al excelente trabajo realizado por el{" "}
                <a
                  href="https://www.ign.es/web/ign/portal/inicio"
                  target="_blank"
                  className="text-green-300"
                >
                  IGN
                </a>{" "}
                en el desarrollo de esta herramienta, ahora podemos utilizarla directamente en AcuaNet gracias a su API.
              </p>
              <h2 className="text-2xl font-semibold text-green-300">¿Qué se puede hacer?</h2>
              <ul className="space-y-1">
                {[
                  "Investigación de accesos a la zona de pesca.",
                  "Localización de estructuras gracias a las ortofotos proporcionadas por iberpix.",
                  "Visualización de imágenes satélite de muy alta calidad (mejores que Google Maps).",
                  "Medición de distancias y superficies.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#84edab"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="glow2 overflow-visible"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      />
                      <path d="M7 12l5 5l10 -10" />
                      <path d="M2 12l5 5m5 -5l5 -5" />
                    </svg>
                    {item}
                  </li>
                ))}
                <li className="mt-2 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7bf1a8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-spin-clockwise animate-duration-[3000ms] animate-iteration-count-infinite"
                  >
                    <path
                      stroke="none"
                      d="M0 0h24v24H0z"
                      fill="none"
                    />
                    <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
                    <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
                    <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
                    <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
                    <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
                    <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
                    <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
                  </svg>
                  <p className="">Y mucho mas...</p>
                </li>
              </ul>
              <div className="flex justify-end">
                <button
                  onClick={() => setStep(1)}
                  className="cursor-pointer rounded-sm border border-green-300 p-1 text-xs text-green-300 transition-colors hover:bg-green-300/10 focus:!border-0 focus:outline-0"
                >
                  Siguiente
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-lg space-y-4 rounded-lg border border-green-50/30 bg-emerald-700/25 px-4 py-4 text-green-100 shadow-lg"
            >
              <div className="flex items-center justify-center gap-3">
                <img
                  draggable="false"
                  src="/LogoH.webp"
                  alt="Logo AcuaNet"
                  className="h-12 w-auto"
                />
                <img
                  draggable="false"
                  src="/AGRLogo.webp"
                  alt="Logo AcuaNet"
                  className="h-12 w-auto"
                />
              </div>
              <p className="leading-relaxed">
                Aprende con AGR Baits, nuestro patrocinador y colaborador, a utilizar esta herramienta de manera eficiente y
                rápida.
              </p>
              {/* @ts-expect-error LiteYoutube player don't have types */}
              <lite-youtube
                className="rounded-xl"
                videoid="ID3_pYFMmec"
                autoplay="true"
              />
              <div className="flex justify-end">
                <button
                  onClick={() => (setStep(2), window.localStorage.setItem("tutorial", "true"))}
                  className="cursor-pointer rounded-sm border border-green-300 p-1 text-xs text-green-300 transition-colors hover:bg-green-300/10 focus:!border-0 focus:outline-0"
                >
                  Terminar Tutorial
                </button>
              </div>
            </motion.div>
          )}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
