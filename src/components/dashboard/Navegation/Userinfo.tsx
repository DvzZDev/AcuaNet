import { UserData } from "@/types"

export default function Userinfo({ data }: { data?: UserData }) {
  return (
    <div className="flex items-center">
      <div className="flex w-[5.5rem] border-b p-4 text-lg font-bold">
        <img
          className="object-fit h-full w-full"
          src="/App-icon.webp"
          alt="Acuanet banner"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-bold">
          {data?.full_name ? `${data.full_name.split(" ")[0]} ${data.full_name.split(" ")[1]?.charAt(0)?.toUpperCase()}.` : ""}
        </p>
        <p className="text-base text-gray-700 ">AN Pro</p>
      </div>
    </div>
  )
}
