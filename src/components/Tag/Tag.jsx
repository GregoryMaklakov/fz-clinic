import { PropTypes } from "prop-types";

export function Tag({ category, count, onClick, active }) {
    return (
        <li>
            <button
                type="button"
                onClick={onClick}
                className={`text-md font-bold dark:bg-light px-[20px] py-3 transition-all uppercase rounded-[50px] text-light dark:text-dark flex items-center justify-center gap-2 ${active ? "bg-dark/75 dark:bg-light/75" : "bg-dark"}`}
            >
                <span>{category}</span>
                <span>[{count}]</span>
            </button>
        </li>
    )
}

Tag.propTypes = {
    category: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
