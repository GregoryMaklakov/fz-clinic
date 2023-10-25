import { PropTypes } from "prop-types";
import { AccordionDesktop } from "./AccordionDesktop";


export function Accordion({ data, heading }) {
    return (
        <section className="overflow-x-hidden text-dark pt-[26px] pb-[96px] dark:text-light lg:pt-[54px]">
            <div className="mx-auto max-w-full px-[30px]">
                <h2 className="pb-[30px] border-b-[1px] border-light/75 font-bold capitalize leading-[1.2] text-8xl xl:text-6xl lg:text-5xl xs:text-3xl mb-1">
                    {heading}
                </h2>
                {/* <ServiceSectionAccordionMobile items={items} /> */}
                <AccordionDesktop data={data} />
            </div>
        </section>
    )
}

Accordion.propTypes = {
    heading: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            subtitle: PropTypes.string.isRequired,
            num: PropTypes.string,
            text: PropTypes.string.isRequired,
            img: PropTypes.string,
            bool: PropTypes.bool,
        }),
    ),
};
