import { PropTypes } from "prop-types";
import { AccordionMobileItem } from "./AccordionMobileItem";

export function AccordionMobile({ data }) {

    return (
        <div className="hidden lg:block">
            {data.map((item, index) => (
                <AccordionMobileItem data={item} key={index} />
            ))}
        </div>
    );
}

AccordionMobile.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            subtitle: PropTypes.string.isRequired,
            num: PropTypes.string,
            text: PropTypes.string.isRequired,
            textSecond: PropTypes.string,
        }),
    ),
};
