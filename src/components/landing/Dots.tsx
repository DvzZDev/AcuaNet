export default function Dots({
  onClick,
  ...rest
}: {
  onClick: () => void
  active: boolean
}) {
  const { active } = rest

  const activeStyle = "h-2 w-2 bg-[#FFD700] rounded-full"
  const inactiveStyle = "h-2 w-2 bg-gray-400 rounded-full"

  return (
    <li>
      <button
        type="button"
        aria-label="Dot"
        onClick={onClick}
        style={{
          display: "inline-block",
          margin: "0 8px",
        }}
      >
        <div className={`${active ? activeStyle : inactiveStyle} `}></div>
      </button>
    </li>
  )
}
