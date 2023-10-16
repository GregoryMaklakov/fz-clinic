import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from 'react';
import { CursorContext, ThemeContext } from '../lib/context';
import HeroArtDark from "../../public/images/profile/heroDark.webp";
import DentalHero from "../../public/images/articles/article-01.webp";
import HeroArtLight from "../../public/images/profile/heroLight.webp";
import {
  Layout,
  AnimatedText,
  Icon,
  BooksyButton,
  TransitionPageEffect,
} from "../components";

export default function Home() {
  const { setHoveringLink } = useContext(CursorContext);

  const { mode } = useContext(ThemeContext);
  const [heroArtSource, setHeroArtSource] = useState(HeroArtDark);

  const handleMouseEnter = () => {
    setHoveringLink(true);
  };
  const handleMouseLeave = () => {
    setHoveringLink(false);
  };

  useEffect(() => {
    setHeroArtSource(mode === 'dark' ? HeroArtDark : HeroArtLight);
  }, [mode])

  return (
    <>
      <Head>
        <title>FZ Clinic</title>
        <meta name="description" content="Краса та здоров'я разом в FZ Clinic" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="FZ Clinic" />
        <meta property="og:url" content="https://ginger-beauty-zone.com" />
        <meta property="og:image" content="https://d375139ucebi94.cloudfront.net/region2/pl/162702/logo/87abe39eef5d4f5cb4968854db35be-ginger-beauty-zone-logo-0b4580ef172240329bb5c6e7f314b3-booksy.jpeg" />
        <meta property="og:description" content="Краса та здоров'я разом в FZ Clinic" />
        <meta property="business:contact_data:street_address" content="Першотравнева вулиця, 51, Кременчук, Полтавська область, Украина, 39600" />
        <meta property="business:contact_data:locality" content="Kremenchug" />
        <meta property="business:contact_data:postal_code" content="39600" />
        <meta property="business:contact_data:country_name" content="Ukraine" />
      </Head>

      <TransitionPageEffect />
      <main className="">
        <section className="flex w-full flex-col items-center justify-center min-h-[80vh]">
          <Layout className="pt-0 pb-16 md:pt-16 sm:pt-0 sm:pb-16">
            <div className="w-full flex items-center justify-between lg:flex-col">
              <div className="w-1/2 -top-[30px] p-14 lg:p-0  md:w-full md:mb-6">
                {/* <Image
                  src={heroArtSource}
                  alt="Beauty woman in the shadow"
                  loading="lazy"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                  className="flex items-center justify-center rounded-md lg:hidden z-10 md:inline-block md:w-full "
                /> */}
                <Image
                  src={DentalHero}
                  alt="Beauty woman in the shadow"
                  loading="lazy"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                  className="flex items-center justify-center rounded-md lg:hidden z-10 md:inline-block md:w-full "
                />
              </div>
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
                <AnimatedText
                  text="Краса та здоров'я разом з FZ Clinic"
                  className="!text-6xl text-left xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
                <p className="my-4 text-base font-medium lg:text-center text-dark dark:text-light">
                  FZ Clinic - особливий заклад, що створений для того, щоб задовольнити потреби своїх клієнтів у якісній медичній допомозі. Наша команда професіоналів пропонує послуги з стоматології та косметології на високому рівні.
                </p>
                <div className="flex items-center self-start mt-2 lg:self-center sm:flex-col">
                  <Link
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4"
                    href="/dummy.pdf"
                    target="_blank"
                    download
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Отримай знижку 20%
                    <Icon name="linkArrow" size={24} className="ml-2" />
                  </Link>
                  <Link
                    className="flex items-center text-dark ml-4 font-medium capitalize underline text-lg dark:text-light"
                    href="tel:380987775580"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Зателефонувати
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
        </section>
        <BooksyButton className="fixed left-4 bottom-2 lg:bottom-0 lg:left-0" />
      </main>
    </>
  );
}
