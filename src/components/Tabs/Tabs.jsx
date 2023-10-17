import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

export function Tabs({ items }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex items-center self-start mt-2 lg:self-center sm:flex-col gap-4 w-full">
          {items.map((item) => (
            <button
              type="button"
              ref={item.title === items[0].title ? firstBtnRef : null}
              key={item.title}
              onClick={() => setSelectedTab(item.title)}
              className="flex w-[50%] items-center bg-dark text-light p-4 px-6 rounded-lg text-xl font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4"
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-2 rounded-xl">
          {items.map((item, index) => (
            <div className={`${selectedTab === index ? "" : "hidden"}`}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  items: PropTypes.string,
};
