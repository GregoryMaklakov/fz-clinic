import Head from "next/head";
import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatedText, Layout, TransitionPageEffect, ArticleCard, Tag } from "../../components";
import { articles } from "../../lib";

const tagData = [
    { category: 'COSMETOLOGY', count: 5 },
    { category: 'DENTAL', count: 6 },
    { category: 'ALL', count: 11 }
];

export default function Articles({ summary }) {
    const [filter, setFilter] = useState('ALL');

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
                    <ul className="flex flex-wrap items-center py-12 gap-4">
                        {tagData.map((tag) => (
                            <Tag
                                key={tag.category}
                                onClick={() => setFilter(tag.category)}
                                category={tag.category}
                                count={tag.count}
                                active={filter === tag.category}
                            />
                        ))}
                    </ul>
                    <ul className="grid grid-cols-3 gap-16 mb-16 md:grid-cols-1 2xl:grid-cols-2">
                        {articles
                            .filter((article) => (filter === 'ALL' ? true : article.tags.includes(filter)))
                            .map((article) => (
                                <ArticleCard
                                    key={article.slug}
                                    title={article.title}
                                    subtitle={article.subtitle}
                                    image={article.imgURL}
                                    summary={summary}
                                    time={article.time}
                                    link={`/articles/${article.slug}`}
                                />
                            ))}
                    </ul>
                </Layout>
            </main>
        </>
    )
}

Articles.propTypes = {
    summary: PropTypes.string,
};
