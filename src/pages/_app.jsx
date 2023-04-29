import "../styles/globals.css";
import PropTypes from 'prop-types';
import Head from "next/head";
import { Montserrat } from 'next/font/google';
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { useMemo, useState } from "react";
import { CustomCursor, Footer, Navigation } from "../components";
import { CursorContext } from '../lib/context';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps, }) {
  const router = useRouter();
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const contextValue = useMemo(
    () => ({
      isHoveringLink,
      setHoveringLink: setIsHoveringLink,
      isHoveringText,
      setHoveringText: setIsHoveringText,
      isHoveringLogo,
      setHoveringLogo: setIsHoveringLogo,
      isHoveringImage,
      setHoveringImage: setIsHoveringImage,
    }),
    [isHoveringLink, isHoveringText, isHoveringLogo, isHoveringImage]
  );
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CursorContext.Provider value={contextValue}>
        <CustomCursor />
        <main
          className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
        >
          <Navigation />
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </main>

      </CursorContext.Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    prop1: PropTypes.string,
    prop2: PropTypes.number,
    prop3: PropTypes.func,
    prop4: PropTypes.node,
    prop5: PropTypes.elementType,
  }).isRequired,
};
