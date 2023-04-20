import { priceListData } from "@/pages/constant";
import PropTypes from "prop-types";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "./LiIcon";
import { AnimatedText } from "../AnimatedText";

export const PriceList = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 40%", "center start"],
        // layoutEffect: false,
    });

    return (
        <div className="my-32 mt-0">
            <AnimatedText className="pt-8" text="Nasze ceny" />
            <div ref={ref} className="w-[75%] mx-auto relative pt-16">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute t-0 left-9 w-[4px] h-full bg-dark origin-top"
                />
                {priceListData.map((category) => (
                    <Category
                        key={category.id}
                        name={category.name}
                        items={category.items}
                    />
                ))}
            </div>
        </div>
    );
};

const Category = ({ name, items }) => {
    const ref = useRef(null);
    return (
        <div ref={ref}>
            <LiIcon referece={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.1 }}
                className="flex flex-col items-center justify-center mb-16"
            >
                <h3 className="font-bold capitalise text-2xl mb-6">{name}</h3>
                <ul className="w-[60%]">
                    {items.map((item) => (
                        <PriceItem key={item.id} name={item.name} price={item.price} />
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

Category.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const PriceItem = ({ name, price }) => {
    return (
        <li>
            <div className="flex items-center justify-between w-full mb-2">
                <p className="font-medium f-wull">{name}</p>
                {typeof price === "object" ? (
                    <span className="capitalize text-primary font-bold">
                        {price.min} - {price.max} zl
                    </span>
                ) : (
                    <span className="capitalize text-primary font-bold">{price} zl</span>
                )}
            </div>
        </li>
    );
};

PriceItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }).isRequired,
    ]),
};
