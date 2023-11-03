import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import {
  FrameWhiteBlack,
  Layout,
  TransitionPageEffect,
} from "../../components";
import { employeeData } from "../../lib";


function EmployeePage() {
  const router = useRouter();
  const { slug } = router.query;
  const employee = employeeData.find(a => a.slug === slug);

  if (!employee) {
    return (
      <h2 className="inline-block w-full font-bold capitalize text-8xl text-dark dark:bg-dark dark:text-light text-center xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl">
        Сторінку не знайдено!
      </h2>
    );
  }

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
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://i.ibb.co/7jSCrpk/Xnip2023-10-28-14-42-45-1.jpg" />

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
      <section className="flex w-full flex-col items-center justify-center dark:text-light text-dark h-[100vh]">
        <Layout className="pt-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="w-full mx-auto py-2 flex items-center justify-center text-center sm:py-0 font-bold capitalize text-8xl xl:text-6xl lg:text-5xl xs:text-3xl mb-4">
              {employee.name}
            </h1>
            <h2 className="text-lg font-bold text-primary/75 dark:text-primaryDark/75 mb-16">
              {employee.position}
            </h2>
          </div>
          <div className="grid w-full grid-cols-8 gap-16 lg:gap-6 sm:gap-8 items-center">
            <div className="col-span-4 xl:col-span-4 flex flex-col items-start justify-start md:order-2 lg:col-span-8">
              <h1 className="col-span-4 text-bold text-2xl">Розділ про нашу команду знаходиться в стадії розробки. Незабаром тут буде доступна інформація про кваліфікацію, освіту та навички наших спеціалістів!</h1>
            </div>

            <FrameWhiteBlack className="col-span-4 min-h-[450px] xl:col-span-4 md:order-1 lg:col-span-8 h-auto lg:min-h-[450px]">
              <Image
                src={employee.imageSrc}
                alt="BlackLady"
                className="absolute h-auto -z-1 p-2 rounded-2xl w-full"
                style={{ objectFit: "cover" }}
                fill
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </FrameWhiteBlack>
          </div>
        </Layout>
      </section>
    </>
  );
}

export default EmployeePage;
