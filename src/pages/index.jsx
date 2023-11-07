import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { CursorContext, ThemeContext } from "../lib/context";
import {
  Icon,
  BooksyButton,
  TransitionPageEffect,
  FlippedText,
} from "../components";


export default function Home() {
  const { setHoveringLink } = useContext(CursorContext);
  const { mode } = useContext(ThemeContext);

  const handleMouseEnter = () => {
    setHoveringLink(true);
  };
  const handleMouseLeave = () => {
    setHoveringLink(false);
  };

  const { setHoveringText } = useContext(CursorContext);
  const handleMouseEnterText = () => {
    setHoveringText(true);
  };
  const handleMouseLeaveText = () => {
    setHoveringText(false);
  };

  const flippedTextHero = ["Усмішку", "красу", "шкіру"];
  const flippedTextHeroSecond = ["впевненість", "турботу", "ніжність"];

  return (
    <>
      <Head>
        <title>FZ Clinic</title>
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="FZ Clinic" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://i.ibb.co/7jSCrpk/Xnip2023-10-28-14-42-45-1.jpg" />
        <meta property="og:description" content="Краса та здоров'я разом в FZ Clinic! Косметологія і стоматологія - Кременчуг" />
        <meta property="business:contact_data:street_address" content="Першотравнева вулиця, 51, Кременчук, Полтавська область, Украина, 39600" />
        <meta property="business:contact_data:locality" content="Kremenchuk" />
        <meta property="business:contact_data:region" content="Poltava" />
        <meta property="business:contact_data:postal_code" content="39600" />
        <meta property="business:contact_data:country_name" content="Ukraine" />
      </Head>

      <TransitionPageEffect />
      <main className="main-home">
        <section className={`flex w-full flex-col items-center justify-center min-h-[100vh] bg-cover bg-center bg-no-repeat ${mode === 'light' ? '' : 'bg-[url("../../public/images/home/hero03.webp")] md:bg-[url("../../public/images/home/hero03-md.webp")]'
          }`}>
          <div className="w-full max-w-[1920px] mx-auto h-full inline-block z-0 p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6 pt-0 pb-16 md:pt-16 sm:pt-0 sm:pb-16">
            <div className="w-full flex items-center justify-between lg:flex-col sm:mt-6">
              <div className="w-full flex flex-col items-center self-center lg:w-full">
                <CursorContext.Consumer>
                  {({ isHoveringText }) => (
                    <div
                      className={`inline-flex flex-col gap-2 w-full font-bold capitalize text-left text-8xl 2xl:text-6xl xl:text-4xl ${isHoveringText
                        ? "text-dark bg-inherit dark:bg-inherit dark:text-light"
                        : "text-dark dark:bg-inherit dark:text-light"
                        } md:text-4xl dark:bg-inherit text-dark dark:text-light`}
                      onMouseEnter={handleMouseEnterText}
                      onMouseLeave={handleMouseLeaveText}
                    >
                      <div>
                        <div className="inline sm:block sm:mb-3">
                          Подбай про свою
                        </div>{" "}
                        <FlippedText textVariants={flippedTextHero} />
                      </div>
                      <div>
                        <div className="inline sm:block sm:mb-3">Tа відчуй</div>{" "}
                        <FlippedText textVariants={flippedTextHeroSecond} />
                      </div>
                      <div>разом з FZ CLINIC</div>
                    </div>
                  )}
                </CursorContext.Consumer>
                <p className="my-4 text-base font-medium self-start  dark:text-light w-[80%] xs:w-full">
                  FZ Clinic - особливий заклад, що створений для того, щоб
                  задовольнити потреби своїх клієнтів у якісній медичній
                  допомозі. Наша команда професіоналів пропонує послуги з
                  стоматології та косметології на високому рівні.
                </p>
                <div className="flex items-center self-start mt-2 sm:flex-col xs:w-full">
                  <Link
                    className="flex items-center justify-center bg-dark text-light p-2.5 px-6 xs:px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4 xs:w-full"
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
                    className="flex items-center sx:w-full xs:mt-4 ml-4 xs:ml-0 font-medium capitalize underline text-lg text-dark dark:text-light"
                    href="tel:380987775580"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Зателефонувати
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BooksyButton className="fixed left-4 bottom-2 lg:bottom-0 lg:left-0" />
      </main>
    </>
  );
}
