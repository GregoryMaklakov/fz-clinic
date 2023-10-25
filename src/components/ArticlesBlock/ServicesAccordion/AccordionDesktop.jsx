import { PropTypes } from "prop-types";
import { useState } from "react";
import { AccordionDesktopItem } from "./AccordionDesktopItem";

export function AccordionDesktop({ data }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div
            className="relative flex pt-6 "
        >
            <div className="flex flex-col min-w-[24%]">
                {data.map((item, index) => (
                    <button
                        type="button"
                        className={`flex lg:w-full text-left lg:border-light/75 ${selectedIndex === index ? "text-primary" : "text-light"
                            } `}
                        onClick={() => setSelectedIndex(index)}
                        key={index}
                    >
                        <AccordionDesktopItem
                            subtitle={item.subtitle}
                            data={{ ...item, bool: selectedIndex === index }}
                        />
                    </button>
                ))}
            </div>
            <div className="border-light/75 border-l-[1px] lg:pr-[30px] xl:absolute xl:top-0 xl:left-[25.3%] xl:max-w-[75%] xl:pl-[100px] xl:pr-0 xl:pt-[48px] xl:pb-[100px] 2xl:pl-[155px] 2xl:pt-[73px]">
                <div className="flex">
                    <div className="xl:max-w-[400px] 2xl:max-w-[540px]">
                        <div className="mb-[20px] flex gap-[18px] lg:mb-[41px] xl:mb-[18px] 2xl:mb-[34px]">
                            <span className="text-[16px] font-bold leading-[1.4] text-middleGrey xl:text-[16px] 2xl:text-[24px]">
                                {data[selectedIndex].num}
                            </span>
                            <h4 className="text-[24px] font-bold uppercase leading-[1.3] xl:text-[22px] 2xl:text-[32px]">
                                {data[selectedIndex].subtitle}
                            </h4>
                        </div>
                        <p className="pt-5 pb-10 text-base font-medium leading-[1.4] lg:pt-[32px] xl:pt-[0px] xl:leading-[1.5] 2xl:text-[24px] 2xl:leading-[1.4]">
                            {data[selectedIndex].text}
                        </p>
                    </div>
                    {/* <div className="mx-[35px] mb-[30px] transition ease-in lg:mb-[50px] xl:ml-[103px] 2xl:mt-[29px] 2xl:ml-[81px]">
              <ImageSeoAccordion src={items[selectedIndex].img} alt={items[selectedIndex].subtitle}/>
            </div> */}
                </div>
            </div>
        </div>
    );
}

AccordionDesktop.propTypes = {
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
