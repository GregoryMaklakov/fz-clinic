import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AnimatedText,
  AnimatedValue,
  Layout,
  FrameWhiteBlack,
  TransitionPageEffect,
  Employee
} from "../../components";
import AboutAbout from "../../../public/images/about/about-about.jpeg";
import { employeeData } from "../../lib";

export default function About() {
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const decemberSecond = new Date("January 08, 2021");
    const today = new Date();
    const timeDiff = Math.abs(today.getTime() - decemberSecond.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysSince(daysDiff);
  }, []);

  const motionSettings = {
    initial: { y: 50 },
    whileInView: { y: 0 },
    transition: { duration: 1, type: "spring", delay: 0.1 },
    viewport: { once: true },
  };

  return (
    <>
      <Head>
        <title>FZ Clinic | Про нас</title>
        <meta
          name="description"
          content="Краса та здоров'я разом в FZ Clinic"
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Про нас | FZ Clinic" />
        <meta property="og:url" content="https://ginger-beauty-zone.com" />
        <meta
          property="og:image"
          content="https://d375139ucebi94.cloudfront.net/region2/pl/162702/logo/87abe39eef5d4f5cb4968854db35be-ginger-beauty-zone-logo-0b4580ef172240329bb5c6e7f314b3-booksy.jpeg"
        />
        <meta
          property="og:description"
          content="Краса та здоров'я разом в FZ Clinic"
        />
        <meta
          property="business:contact_data:street_address"
          content="Першотравнева вулиця, 51, Кременчук, Полтавська область, Украина, 39600"
        />
        <meta property="business:contact_data:locality" content="Kremenchug" />
        <meta property="business:contact_data:postal_code" content="39600" />
        <meta property="business:contact_data:country_name" content="Ukraine" />
      </Head>
      <TransitionPageEffect />
      <section className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-8">
          <AnimatedText
            text="Дізнайтеся більше про нас"
            className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 items-center">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Про нас
              </h2>
              <p className="font-medium">
                FZ Clinic - особливий заклад, що створений для того, щоб
                задовольнити потреби своїх клієнтів у якісній медичній допомозі.
                Наша команда професіоналів пропонує послуги з стоматології та
                косметології на високому рівні.
              </p>
              <p className="my-4 font-medium">
                Наші стоматологи володіють сучасними методиками лікування та
                забезпечують максимальний комфорт для своїх пацієнтів. Ми
                пропонуємо широкий спектр послуг - від профілактики та зняття
                зубного каменю до складних відновлювальних робіт. Крім того,
                наші косметологи здатні створити ідеальний образ для кожної
                жінки. Ми пропонуємо процедури, що допоможуть зберегти молодість
                та красу шкіри, такі як чистка обличчя, пілінг, масаж та багато
                інших.
              </p>
              <p className="font-medium">
                Ми знаходимось в самому серці Кременчука за адресою вулиця
                Першотравнева, 51. Для наших клієнтів ми підготували затишні
                кабінети з сучасним обладнанням, що допоможе забезпечити
                максимальний комфорт та безпеку в процесі лікування та процедур.
                Заходьте до нас в гості та довірте своє здоров'я професіоналам!
                FZ Clinic - ваш надійний партнер у справах здоров'я та краси.
              </p>
            </div>

            <FrameWhiteBlack className="col-span-3 xl:col-span-4 min-h-full md:order-1 md:col-span-8 md:min-h-[450px]">
              <Image
                src={AboutAbout}
                alt="BlackLady"
                className="absolurte -z-1 p-2 rounded-2xl w-full h-auto"
                style={{ objectFit: "cover" }}
                fill
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </FrameWhiteBlack>
            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between h-full md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold dark:text-light/75 lg:text-4xl xs:text-2xl">
                  <AnimatedValue value={1280} className="dark:text-light/75 " />
                  +
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  задоволених клієнтів
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light/75 lg:text-4xl xs:text-2xl">
                  <AnimatedValue
                    value={daysSince}
                    className="dark:text-light/75"
                  />
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  днів працюемо для вас
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light/75 lg:text-4xl xs:text-2xl">
                  <AnimatedValue value={12} className="dark:text-light/75" /> +
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  років досвіду нашої команди
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full my-16 mx-auto">
            <motion.h3
              {...motionSettings}
              className="text-8xl font-bold text-center lg:text-5xl xs:text-3xl "
            >
              Наші Експерти
            </motion.h3>
            <div className="flex flex-wrap gap-16 items-center justify-center w-full my-16">
              {employeeData.map((employee) => (
                <Employee
                  key={employee.id}
                  name={employee.name}
                  position={employee.position}
                  imageSrc={employee.imageSrc}
                  instaLink={employee.instaLink}
                />
              ))}
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
}

