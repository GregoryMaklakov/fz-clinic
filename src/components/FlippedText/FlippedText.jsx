import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from "react";
import { textScramble } from "../../lib/textScramble";

export function FlippedText({ textVariants }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const textElementRef = useRef(null);

    useEffect(() => {
        const [firstText] = textVariants;
        textElementRef.current.innerText = firstText;
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) =>
                prevIndex === textVariants.length - 1 ? 0 : prevIndex + 1
            );
            const nextText = textVariants[currentTextIndex];

            if (textElementRef.current) {
                textScramble.animateText(textElementRef.current, nextText).then(() => {
                });
            }
        }, 3500);

        return () => clearInterval(interval);
    }, [currentTextIndex, textVariants]);

    return (
        <div className="inline-block text-light border-solid border-2 rounded-[2rem] py-2 px-4 border-light capitalize">
            <span ref={textElementRef} />
        </div>
    );
}

FlippedText.propTypes = {
    textVariants: PropTypes.arrayOf(PropTypes.string).isRequired,
}
