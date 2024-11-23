export async function generateMetadata(props: { params: Promise<{ cuencaid: string }> }) {
  const params = await props.params
  return {
    title: `${params.cuencaid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.cuencaid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
    description: `Conulta las mediciones hidrográficas de la cuenca del ${params.cuencaid}`,
    openGraph: {
      title: `${params.cuencaid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.cuencaid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
      description: `Conulta las mediciones hidrográficas de la cuenca del ${params.cuencaid}`,
      url: "https://acuanet.es/cuencas",
      siteName: "AcuaNet",
      images: [
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 1800,
          height: 1600,
          alt: "Og image from AcuaNet",
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${params.cuencaid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.cuencaid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
      description: `Conulta las mediciones hidrográficas de la cuenca del ${params.cuencaid}`,
      creator: "@_DvzZ_",
      images: ["https://i.imgur.com/LQvr7AX.png"],
    },
  }
}

async function Page(props: { params: Promise<{ cuencaid: string }> }) {
  const params = await props.params
  return <p>{params.cuencaid} </p>
}

export default Page
