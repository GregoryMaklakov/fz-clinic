/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { motion, useScroll } from 'framer-motion';
import { useContext } from 'react';
import { CursorContext } from '../../lib/context';
import {
  AnimatedText,
  BooksyButton,
  FrameWhiteBlack,
  GingerButton,
  Layout,
  TransitionPageEffect,
  PriceList,
} from '../../components';
import HeroPrice from '../../../public/images/price/hero.jpg';

export default function Price() {
  const { setHoveringText } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setHoveringText(true);
  };
  const handleMouseLeave = () => {
    setHoveringText(false);
  };

  return (
    <>
      <Head>
        <title>FZ Clinic | Прайс</title>
        <meta name="description" content="Краса та здоров'я разом в FZ Clinic" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Прайс | FZ Clinic" />
        <meta property="og:url" content="https://ginger-beauty-zone.com" />
        <meta property="og:image" content="https://d375139ucebi94.cloudfront.net/region2/pl/162702/logo/87abe39eef5d4f5cb4968854db35be-ginger-beauty-zone-logo-0b4580ef172240329bb5c6e7f314b3-booksy.jpeg" />
        <meta property="og:description" content="Краса та здоров'я разом в FZ Clinic" />
        <meta property="business:contact_data:street_address" content="Першотравнева вулиця, 51, Кременчук, Полтавська область, Украина, 39600" />
        <meta property="business:contact_data:locality" content="Kremenchug" />
        <meta property="business:contact_data:postal_code" content="39600" />
        <meta property="business:contact_data:country_name" content="Ukraine" />
      </Head>
      <TransitionPageEffect />
      <section className="flex w-full flex-col items-center justify-center">
        <Layout className="py-10">
          <FrameWhiteBlack className="flex min-h-full p-16 items-center justify-between mb-16 bg-cover relative overflow-hidden lg:flex-col lg:p-0">
            <Image
              src={HeroPrice}
              alt="beauty HeroPrice"
              style={{ objectFit: 'cover' }}
              fill
              className="absolute -z-1 p-2 rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
            <div className="w-1/3 lg:w-full">
              <GingerButton
                href="/"
                size={240}
                className="z-10"
                color="white"
              />
            </div>
            <div className="flex flex-col w-2/3 p-8 lg:w-full lg:text-center lg:pt-0">
              <CursorContext.Consumer>
                {({ isHoveringText }) => (
                  <AnimatedText
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`${isHoveringText ? "text-dark bg-transparent dark:bg-transparent dark:text-light" : "text-dark dark:bg-transparent dark:text-light"
                      } !text-4xl pt-8 text-left z-10 text-light lg:text-center lg:pt-0 md:!text-2xl sm:!text-lg xs:!text-sm`}
                    text={`Отримайте ${10}% знижку на наші послуги під час вашого першого візиту до нашої клініки!`}
                  />
                )}
              </CursorContext.Consumer>
            </div>
          </FrameWhiteBlack>
          <h2
            className="inline-block w-full font-bold capitalize text-8xl text-dark dark:bg-dark dark:text-light text-center xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          >Наші ціни</h2>
          <PriceList />
          <BooksyButton className="fixed left-4 bottom-2 lg:bottom-0 lg:left-0" />
        </Layout>
      </section >
    </>
  );
}


export function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
    layoutEffect: false,
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light sm:-left-5">
      <svg className="-rotate-45" width="75" height="75" viewBox="0 0 100 50">
        <circle
          cx="75"
          cv="50"
          r="20"
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cv="50"
          r="20"
          className=" stroke-[5px] fill-light dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cv="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
}

LiIcon.propTypes = {
  reference: PropTypes.shape({
    prop1: PropTypes.string,
    prop2: PropTypes.number,
  }).isRequired,
};
