import './globals.css'

export const metadata = {
  title: 'AcuaEs',
  description: 'En AcuaEs nos importa el agua y el medio ambiente',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

