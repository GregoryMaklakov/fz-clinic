import { useRouter } from 'next/router';
import Image from 'next/image';
import { FrameWhiteBlack, Layout, TransitionPageEffect } from '../../components';
import { articles } from '../../lib/constant';

function ArticlePage() {
    const router = useRouter();
    const { slug } = router.query;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return (
            <h2
                className="inline-block w-full font-bold capitalize text-8xl text-dark dark:bg-dark dark:text-light text-center xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            >Статтю не знайдено!</h2>
        );
    }

    return (
        <>
            {/* head */}
            <TransitionPageEffect />
            <section className="flex w-full flex-col items-center justify-center dark:text-light">

                <Layout className="pt-8">
                    <h1
                        className="w-full mx-auto py-2 flex items-center justify-center text-center sm:py-0 font-bold capitalize text-8xl mb-16"
                    >{article.title}</h1>
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 items-center">
                        <div className="col-span-4 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8">
                            <p className="my-4 font-medium">
                                {article.text_01}
                            </p>
                            <p className="my-4 font-medium">
                                {article.text_02}
                            </p>
                            <p className="my-4 font-medium">
                                {article.text_03}
                            </p>
                            <p className="my-4 font-medium">
                                {article.text_04}
                            </p>
                            {article.text_05 &&
                                (<p className="my-4 font-medium">
                                    {article.text_05}
                                </p>
                                )}
                        </div>
                        <FrameWhiteBlack className="col-span-4 min-h-full xl:col-span-4 md:order-1 md:col-span-8 h-auto md:min-h-[450px]">
                            <Image
                                src={article.imgURL}
                                alt="BlackLady"
                                className="absolute -z-1 p-2 rounded-2xl w-full h-auto"
                                style={{ objectFit: 'cover' }}
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

export default ArticlePage;