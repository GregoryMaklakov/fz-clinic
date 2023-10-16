import Head from "next/head";
import PropTypes from "prop-types";
import { AnimatedText, Layout, TransitionPageEffect, ArticleCard } from "../../components";
import { articles } from "../../lib/constant";
// import { Tabs } from "../../components/Tabs";

// const items = [
//     {
//         title: 'Cтоматологія',
//         content: (
//             <div className='border-2 border-blue-400 rounded-lg p-4'>
//                 <h1 className='text-3xl text-blue-600'>Title 1</h1>
//                 <p>
//                     стоматологія
//                 </p>
//             </div>
//         ),
//     },
//     {
//         title: 'Косметологія',
//         content: (
//             <div className='border-2 border-blue-400 rounded-lg p-4'>
//                 <h1 className='text-3xl text-blue-600'>Title 2</h1>
//                 <p>
//                     косметологія
//                 </p>
//             </div>
//         ),
//     },

// ];


export default function Articles({ summary }) {
    return (
        <>
            <Head>
                <title>FZ Clinic | Послуги</title>
                <meta name="description" content="Краса та здоров'я разом в FZ Clinic" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content="Про нас | FZ Clinic" />
                <meta property="og:url" content="https://ginger-beauty-zone.com" />
                <meta property="og:image" content="https://d375139ucebi94.cloudfront.net/region2/pl/162702/logo/87abe39eef5d4f5cb4968854db35be-ginger-beauty-zone-logo-0b4580ef172240329bb5c6e7f314b3-booksy.jpeg" />
                <meta property="og:description" content="Краса та здоров'я разом в FZ Clinic" />
                <meta property="business:contact_data:street_address" content="Першотравнева вулиця, 51, Кременчук, Полтавська область, Украина, 39600" />
                <meta property="business:contact_data:locality" content="Kremenchug" />
                <meta property="business:contact_data:postal_code" content="39600" />
                <meta property="business:contact_data:country_name" content="Ukraine" />
            </Head>
            <TransitionPageEffect />
            <main className="flex w-full items-center justify-center" >
                <Layout className="w-full max-w-[1920px] mx-auto h-full bg-light dark:bg-dark inline-block z-0 p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6 py-10">
                    <AnimatedText text="Дізнайтесь більше про наші послуги!"
                        className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12" />
                    <ul className="grid grid-cols-2 gap-16 mb-16">
                        {articles.map((article) => (
                            <ArticleCard
                                key={article.slug}
                                title={article.title}
                                subtitle={article.subtitle}
                                image={article.imgURL}
                                summary={summary}
                                link={`/articles/${article.slug}`}
                            />
                        ))}
                    </ul>
                    {/* <Tabs items={items} /> */}
                </Layout>
            </main>
        </>
    )
}

Articles.propTypes = {
    summary: PropTypes.string,
};
