"use client"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown"
import { Button } from "@nextui-org/button"
import Whatsapp from "./Whatsapp"
import { shareOnWhatsApp, shareOnTwitter } from "@/services/Services"
import Twitter from "./Twitter"

function WidgetShareGlob(props) {
  const iconClasses = "w-5 h-5 text-xl text-default-500 pointer-events-none flex-shrink-0"
  const page = `${props.page}`
  return (
    <div className="fixed bottom-4 right-4">
      <Dropdown
        classNames={{
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-slate-950",
        }}
      >
        <DropdownTrigger>
          <Button
            type="button"
            aria-label="Desplegar menu"
            variant="bordered"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              width={40}
              height={40}
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
              ></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.2141 7.39294L8.68387 10.6581M8.68387 10.6581C8.19134 9.67492 7.17449 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C7.17449 15 8.19134 14.3251 8.68387 13.3419M8.68387 10.6581C8.88616 11.0619 9 11.5176 9 12C9 12.4824 8.88616 12.9381 8.68387 13.3419M15.2141 16.6071L8.68387 13.3419M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                  stroke="#ffd700"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownSection title={"Compartir"}>
            <DropdownItem
              key={Whatsapp}
              startContent={<Whatsapp className={iconClasses} />}
              onClick={() => shareOnWhatsApp(`https://acuanet.es/${page}`)}
            >
              WhatsApp
            </DropdownItem>
            <DropdownItem
              key={Twitter}
              startContent={<Twitter className={iconClasses} />}
              onClick={() => shareOnTwitter(`https://acuanet.es/${page}`)}
            >
              Twitter
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default WidgetShareGlob
