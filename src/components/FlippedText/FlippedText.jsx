import { useEffect, useState } from "react";
import { textScramble } from "../../lib/textScramble";

const textVariants = ["DENTAL", "BEAUTY", "HEALTH", "SMILE", "SKIN", "CARE", "TOOTH", "LIPS", "FACE", "GLOW", "TEETH", "PURE", "HEAL", "SHINE"];

export function FlippedText() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) =>
                prevIndex === textVariants.length - 1 ? 0 : prevIndex + 1
            );
            const nextText = textVariants[currentTextIndex];
            const textElement = document.querySelector(".your-text-element");
            textScramble.animateText(textElement, nextText).then(() => {
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [currentTextIndex]);

    return (
        <div className="w-1/3 lg:w-full z-50 flex items-center justify-center text-light xl:!text-4xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl lg:my-6">
            <span className="your-text-element" />
        </div>
    );
}
