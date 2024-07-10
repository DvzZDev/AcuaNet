import Head from 'next/head';
import Footer from '@/components/global/Footer';
import NavBarData from '@/components/global/NavBarData';
import { Providers } from './providers';
import ModalCookies from '@/components/landing/ModalCookies';

export const metadata = {
  title: 'AcuaNet - Monitorización Hidrográfica de España',
  description:
    'Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. En AcuaNet, te ofrecemos datos precisos y actualizados cada seis horas para una gestión eficiente de los recursos hídricos.',
  url: 'https://acuanet.es',
  image: 'https://i.imgur.com/Jpt5ENb.png',
  twitterCreator: '@_DvzZ_'
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* OpenGraph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="AcuaNet" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:creator" content={metadata.twitterCreator} />
      </Head>
      <body>
        <Providers>
          <header className="h-[3.6rem]">
            <NavBarData />
          </header>
          {children}
          <ModalCookies />
          <Footer />
        </Providers>
      </body>
    </>
  );
}
