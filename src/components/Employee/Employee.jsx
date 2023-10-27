import PropTypes from "prop-types";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "../Icons";
import { FrameWhiteBlack } from "../FrameWhiteBlack";

const AnimationEmployeeLink = motion(Image)

export function Employee({ name, position, imageSrc, instaLink, employeeLink }) {
    const [isHovered, setIsHovered] = useState(false);


    const motionFrameWhiteBlack = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1, type: "spring", delay: 0.1 },
        viewport: { once: true },
    };

    return (
        <motion.div {...motionFrameWhiteBlack}>
            <FrameWhiteBlack className="flex flex-col gap-4 min-h-full p-16 items-center justify-between lg:max-h-full sm:flex-col sm:max-h-full sm:min-w-[88vw]">
                <div className="sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Link
                        href={employeeLink}
                    >
                        <AnimationEmployeeLink
                            src={imageSrc}
                            alt={name}
                            width={400}
                            height={400}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            initial={isHovered ? "hover" : "rest"}
                            animate={isHovered ? "hover" : "rest"}
                            custom={isHovered}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="h-auto w-full max-w-md rounded-2xl object-cover lg:max-w-full z-10 relative"
                        />
                    </Link>
                </div>
                <div className="w-full flex items-center justify-center min-h-[84px]">
                    <div className="flex flex-col w-full lg:max-h-60 overflow-y-auto sm:w-full">
                        <Link
                            href={employeeLink}>
                            <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75 hover:underline">
                                {name}
                            </h4>
                        </Link>
                        <h5 className="text-lg font-bold text-primary/75 dark:text-primaryDark/75">
                            {position}
                        </h5>
                    </div>
                    <motion.a
                        className="dark:fill-light"
                        href={instaLink}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Icon name="insta" />
                    </motion.a>
                </div>
            </FrameWhiteBlack>
        </motion.div >
    );
};

Employee.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    imageSrc: PropTypes.string,
    instaLink: PropTypes.string,
    employeeLink: PropTypes.string,
};

