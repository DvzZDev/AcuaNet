function Dot({ onClick, ...rest }) {
  const { active } = rest

  // Estilos para el dot activo e inactivo
  const activeStyle = 'h-2 w-2 bg-[#FFD700] rounded-full'
  const inactiveStyle = 'h-2 w-2 bg-gray-400 rounded-full'

  return (
    <button
      type="button"
      aria-label="Dot"
      onClick={onClick}
      style={{
        display: 'inline-block',
        margin: '0 8px',
      }}
    >
      <div className={active ? activeStyle : inactiveStyle}></div>
    </button>
  )
}
