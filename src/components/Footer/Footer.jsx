import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";
import { socialLink } from "../../lib/constant";
import { CursorContext } from "../../lib/context";
import { Icon } from "../Icons";
import { CustomLink, navLinks, socialLinks } from "../Navigation";

const workingHours = [
    { day: 'Понеділок', time: '09:00–19:00' },
    { day: 'Вівторок', time: '09:00–19:00' },
    { day: 'Середа', time: '09:00–19:00' },
    { day: 'Четвер', time: '09:00–19:00' },
    { day: 'П\'ятниця', time: '09:00–19:00' },
    { day: 'Субота', time: '09:00–15:00' },
    { day: 'Неділя', time: 'Зачинено' },
];

export function Footer() {
    const { setHoveringLink } = useContext(CursorContext);
    const handleMouseEnter = () => {
        setHoveringLink(true);
    };

    const handleMouseLeave = () => {
        setHoveringLink(false);
    };
    return (
        <footer className="w-full max-w-[1920px] z-[100] block mx-auto bg-light dark:bg-dark py-8 px-32 xl:p-24 lg:px-16">
            <div className="min-w-full mx-auto inline-block dark:bg-light bg-dark p-8 text-light/75 dark:text-dark rounded-3xl">
                <div className="footer-top grid w-full grid-cols-2">
                    <div className="fill-black dark:fill-dark pb-8 col-span-1">
                        <Icon name="fz-clinic" className="w-[400px] h-auto" />
                    </div>

                    <div className="w-full col-span-1 grid grid-cols-2">
                        <div className="col-span-1 flex flex-col">
                            {navLinks.map(link => (
                                <CustomLink
                                    key={`link-${link.id}-${link.label}`}
                                    href={link.href}
                                    title={link.label}
                                    className="mb-4 hover:underline"
                                />
                            ))}
                        </div>

                        <div className="col-span-1 flex flex-col justify-between pb-8">
                            <div className="flex items-end">
                                <div>
                                    <h3 className="font-bold mb-2">Години роботи</h3>
                                    <ul className="">
                                        {workingHours.map((schedule) => (
                                            <li key={schedule.day}>{schedule.day}</li>
                                        ))}
                                    </ul>
                                </div>
                                <ul className="">
                                    {workingHours.map((schedule) => (
                                        <li key={schedule.day}>{schedule.time}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link href="tel:380987775580" className="">
                                <span className="hover:underline"> tel: +38 098 777 55 80</span>
                            </Link>
                            <div className="flex">
                                {socialLinks.map(link => (
                                    <motion.a
                                        key={link.name}
                                        className="mr-3 dark:fill-dark/75 fill-light/75"
                                        href={link.url}
                                        target="_blank"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        aria-label={link.ariaLabel}
                                    >
                                        <Icon name={link.name} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom flex items-center justify-between pt-8 border-t-[1px] dark:border-t-dark/25 border-t-light/25">
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                    <Link
                        href={socialLink.googleReview}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        target="_blank"
                        className="flex items-center xs:text-sm"
                    >
                        Залиш відгук{" "}
                        <span className="text-primary text-2xl px-1 dark:text-primaryDark">
                            {" "}
                            &#9825;{" "}
                        </span>{" "}
                        в <span className="underline underline-offset-2 px-1">Google</span>
                    </Link>
                    <Link
                        href={socialLink.google}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        target="_blank"
                    >
                        <span className="underline underline-offset-2 xs:text-sm">
                            Першотравнева 51
                        </span>{" "}
                        | Кременчук
                    </Link>
                </div>
            </div>
        </footer >
    );
}
