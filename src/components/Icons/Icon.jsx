import PropTypes from 'prop-types';

export const ICON_TYPES = {
    lodoFull: "lodoFull",
    gmail: 'gmail',
    facebook: 'facebook',
    insta: 'insta',
    booksy: 'booksy',
    linkArrow: "linkArrow",
};

export const Icon = ({ className, name, size, color }) => {
    const props = {
        className,
    };
    if (size) {
        props.width = size;
        props.height = size;
    }
    if (color) {
        props.fill = color;
    }
    switch (name) {
        case ICON_TYPES.gmail:
            return (
                <svg
                    {...props}
                    viewBox="0 0 27 27"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.33366 2.65124C6.83077 2.65124 5.38943 3.24367 4.32672 4.2982C3.26401 5.35273 2.66699 6.78299 2.66699 8.27432V18.8589C2.66699 20.3503 3.26401 21.7805 4.32672 22.835C5.38943 23.8896 6.83077 24.482 8.33366 24.482H19.0003C20.5032 24.482 21.9446 23.8896 23.0073 22.835C24.07 21.7805 24.667 20.3503 24.667 18.8589V8.27432C24.667 6.78299 24.07 5.35273 23.0073 4.2982C21.9446 3.24367 20.5032 2.65124 19.0003 2.65124H8.33366ZM2.91251 2.89487C4.35029 1.46815 6.30033 0.666626 8.33366 0.666626H19.0003C21.0337 0.666626 22.9837 1.46815 24.4215 2.89487C25.8593 4.32159 26.667 6.25663 26.667 8.27432V18.8589C26.667 20.8766 25.8593 22.8117 24.4215 24.2384C22.9837 25.6651 21.0337 26.4666 19.0003 26.4666H8.33366C6.30033 26.4666 4.35029 25.6651 2.91251 24.2384C1.47473 22.8117 0.666992 20.8766 0.666992 18.8589V8.27432C0.666992 6.25663 1.47473 4.32159 2.91251 2.89487ZM13.8123 5.95893C15.7472 5.95409 17.6161 6.6573 19.0613 7.93407L17.7314 9.41635C16.6535 8.46409 15.2595 7.9397 13.8163 7.94355L13.8137 7.94355C10.5815 7.94355 8.00033 10.4817 8.00033 13.5666C8.00033 16.6516 10.5816 19.1897 13.8123 19.1897C15.8491 19.1897 17.1513 18.4547 17.9809 17.5007C18.5837 16.8075 18.9687 15.9601 19.1725 15.1107H14.7883V13.126H21.4056L21.3312 14.1872C21.2266 15.6798 20.6962 17.4159 19.4951 18.7972C18.2674 20.2091 16.4022 21.1743 13.8123 21.1743C9.51771 21.1743 6.00033 17.7876 6.00033 13.5666C6.00033 9.34594 9.51708 5.95967 13.8123 5.95893Z"
                    />
                </svg>
            );
        case ICON_TYPES.facebook:
            return (
                <svg
                    {...props}
                    viewBox="0 0 27 27"
                    xmlns="http://www.w3.org/2000/svg"

                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.33366 2.66663C6.83077 2.66663 5.38943 3.26365 4.32672 4.32635C3.26401 5.38906 2.66699 6.8304 2.66699 8.33329V19C2.66699 20.5029 3.26401 21.9442 4.32672 23.0069C5.38943 24.0696 6.83077 24.6666 8.33366 24.6666H11.3337V16H9.66699C9.11471 16 8.66699 15.5522 8.66699 15C8.66699 14.4477 9.11471 14 9.66699 14H11.3337V13.6666C11.3337 12.1844 11.4889 10.5475 12.4596 9.29375C13.4762 7.98074 15.1772 7.33329 17.667 7.33329C18.2193 7.33329 18.667 7.78101 18.667 8.33329C18.667 8.88558 18.2193 9.33329 17.667 9.33329C15.4901 9.33329 14.5244 9.89385 14.041 10.5182C13.5118 11.2017 13.3337 12.2315 13.3337 13.6666V14H17.667C18.2193 14 18.667 14.4477 18.667 15C18.667 15.5522 18.2193 16 17.667 16H13.3337V24.6666H19.0003C20.5032 24.6666 21.9446 24.0696 23.0073 23.0069C24.07 21.9442 24.667 20.5029 24.667 19V8.33329C24.667 6.8304 24.07 5.38906 23.0073 4.32635C21.9446 3.26365 20.5032 2.66663 19.0003 2.66663H8.33366ZM19.0003 26.6666C21.0337 26.6666 22.9837 25.8589 24.4215 24.4211C25.8593 22.9833 26.667 21.0333 26.667 19V8.33329C26.667 6.29997 25.8593 4.34992 24.4215 2.91214C22.9837 1.47436 21.0337 0.666626 19.0003 0.666626H8.33366C6.30033 0.666626 4.35029 1.47436 2.91251 2.91214C1.47473 4.34992 0.666992 6.29997 0.666992 8.33329V19C0.666992 21.0333 1.47473 22.9833 2.91251 24.4211C4.35029 25.8589 6.30033 26.6666 8.33366 26.6666H19.0003Z"
                    />
                </svg>
            );
        case ICON_TYPES.insta:
            return (
                <svg
                    {...props}
                    viewBox="0 0 27 27"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.33366 2.66663C6.83077 2.66663 5.38943 3.26365 4.32672 4.32635C3.26401 5.38906 2.66699 6.8304 2.66699 8.33329V19C2.66699 20.5029 3.26401 21.9442 4.32672 23.0069C5.38943 24.0696 6.83077 24.6666 8.33366 24.6666H19.0003C20.5032 24.6666 21.9446 24.0696 23.0073 23.0069C24.07 21.9442 24.667 20.5029 24.667 19V8.33329C24.667 6.8304 24.07 5.38906 23.0073 4.32635C21.9446 3.26365 20.5032 2.66663 19.0003 2.66663H8.33366ZM2.91251 2.91214C4.35029 1.47436 6.30033 0.666626 8.33366 0.666626H19.0003C21.0337 0.666626 22.9837 1.47436 24.4215 2.91214C25.8593 4.34992 26.667 6.29997 26.667 8.33329V19C26.667 21.0333 25.8593 22.9833 24.4215 24.4211C22.9837 25.8589 21.0337 26.6666 19.0003 26.6666H8.33366C6.30033 26.6666 4.35029 25.8589 2.91251 24.4211C1.47473 22.9833 0.666992 21.0333 0.666992 19V8.33329C0.666992 6.29997 1.47473 4.34992 2.91251 2.91214ZM21.6863 5.59202C22.095 5.96353 22.1251 6.59598 21.7536 7.00464L21.7403 7.0193C21.3688 7.42796 20.7363 7.45807 20.3277 7.08656C19.919 6.71506 19.8889 6.08261 20.2604 5.67395L20.2737 5.65928C20.6452 5.25063 21.2777 5.22051 21.6863 5.59202ZM9.18865 9.18828C10.3764 8.00055 11.9873 7.33329 13.667 7.33329C15.3467 7.33329 16.9576 8.00055 18.1453 9.18828C19.3331 10.376 20.0003 11.9869 20.0003 13.6666C20.0003 15.3463 19.3331 16.9572 18.1453 18.145C16.9576 19.3327 15.3467 20 13.667 20C11.9873 20 10.3764 19.3327 9.18865 18.145C8.00092 16.9572 7.33366 15.3463 7.33366 13.6666C7.33366 11.9869 8.00092 10.376 9.18865 9.18828ZM13.667 9.33329C12.5177 9.33329 11.4155 9.78984 10.6029 10.6025C9.79021 11.4152 9.33366 12.5174 9.33366 13.6666C9.33366 14.8159 9.79021 15.9181 10.6029 16.7308C11.4155 17.5434 12.5177 18 13.667 18C14.8163 18 15.9185 17.5434 16.7311 16.7308C17.5438 15.9181 18.0003 14.8159 18.0003 13.6666C18.0003 12.5174 17.5438 11.4152 16.7311 10.6025C15.9185 9.78984 14.8163 9.33329 13.667 9.33329Z"
                    />
                </svg>
            );
        case ICON_TYPES.booksy:
            return (
                <svg viewBox="0 0 76 17" {...props} className={`h-[44px] ${className}`}
                >
                    <path d="M68.72 3.921c.228 0 .457-.002.685 0 .616.006.667.078.443.628-.369.906-.736 1.811-1.107 2.715l-2.506 6.103c-.193.47-.413.925-.704 1.343-.592.848-1.38 1.301-2.446 1.29a4.826 4.826 0 0 1-1.747-.325c-.357-.141-.518-.234-.297-.656.089-.17.145-.355.226-.53.213-.464.235-.467.708-.297.214.076.434.152.657.184.696.1 1.228-.143 1.602-.755.245-.402.318-.745.096-1.213-1.195-2.525-2.35-5.069-3.517-7.607-.072-.158-.147-.317-.207-.48-.089-.242-.018-.368.238-.391.227-.02.457-.004.686-.004 1.04.003.818-.105 1.216.792.799 1.797 1.582 3.6 2.377 5.398l.165.336s.052.108.117.108.161.01.235-.121c.029-.051.06-.127.09-.2a.66.66 0 0 1 .024-.084c.755-1.915 1.494-3.836 2.242-5.754.187-.48.194-.478.723-.48ZM55.884 7.478c.63.219 1.282.364 1.898.622.491.205.948.455 1.323.838.907.927.741 2.66-.227 3.548-.604.552-1.327.831-2.143.884-1.322.086-2.543-.226-3.67-.907-.795-.48-.81-.526-.276-1.245.362-.486.315-.705 1.061-.2.85.575 1.8.853 2.843.764.382-.033.723-.147.99-.427.44-.462.38-1.072-.141-1.444-.363-.259-.792-.371-1.208-.506-.383-.125-.775-.222-1.16-.34a6.021 6.021 0 0 1-1.157-.502c-1.567-.868-1.482-2.765-.54-3.769.578-.616 1.302-.93 2.143-.984.175-.011.352-.002.527-.002 1.087-.039 2.074.3 3.007.818.384.215.407.325.185.71-.122.213-.255.418-.382.627-.122.202-.292.236-.496.14a5.164 5.164 0 0 1-.326-.172 4.726 4.726 0 0 0-1.95-.589 1.9 1.9 0 0 0-1.161.265c-.603.372-.62 1.044-.044 1.453.276.196.588.309.904.418Zm-8.277.24c-.242.254-.245.274-.02.57 1.082 1.42 2.168 2.835 3.25 4.255.121.159.35.299.238.535-.108.23-.357.177-.565.178-.281.003-.564-.014-.844.005-.312.021-.526-.09-.716-.34-.75-.99-1.516-1.97-2.279-2.95-.616-.79-.523-.745-1.005-.303-.322.318-.727.73-.877.943-.061.11-.112.225-.15.344-.085.329-.056.672-.056.672v.44c.017.185.009.374 0 .563l-.008.174c-.014.333-.114.437-.444.45-.316.012-.634.012-.95 0-.354-.015-.412-.077-.415-.453-.006-.89-.002-1.78-.002-2.67V1.02c0-.14.004-.279.002-.418-.005-.218.115-.33.318-.336.369-.012.739-.018 1.108-.002.26.011.36.13.382.401.01.122.003.245.003.367 0 2.251-.002 4.503.006 6.754v.429c.02.034.054.062.107.08.162.055.28-.176.397-.297a629.465 629.465 0 0 0 3.64-3.787c.196-.207.397-.312.688-.295.385.021.773.007 1.16.005.165 0 .327.013.402.185.074.171-.08.252-.172.346-.674.688-1.354 1.37-2.029 2.058-.393.4-.782.802-1.169 1.208Zm-16.342.858c.005-2.586 1.936-4.84 4.888-4.841C39.233 3.733 41.108 6.22 41 8.594c.066 2.29-1.656 4.832-4.878 4.842-2.954.009-4.861-2.23-4.856-4.86Zm7.923.054c.083-1.534-1.203-3.4-3.282-3.237-1.054.083-1.835.566-2.355 1.448a3.29 3.29 0 0 0-.359 2.573c.53 2.06 2.684 2.93 4.379 2.018 1.108-.596 1.57-1.59 1.617-2.802Zm-19.24-.046c.002-2.422 1.835-4.853 4.882-4.85 3.029.001 4.904 2.371 4.865 4.852.013 2.547-1.883 4.87-4.933 4.85-3.023-.02-4.816-2.394-4.814-4.852Zm7.118 2.215a3.363 3.363 0 0 0 .299-3.996c-.59-.92-1.424-1.421-2.7-1.411-.623-.035-1.283.23-1.861.744-1.268 1.127-1.4 3.27-.246 4.6a2.986 2.986 0 0 0 4.508.063ZM11.554 4.137c.715-.42 1.51-.645 2.313-.611 1.708.07 3.056.842 3.948 2.32.53.877.713 1.833.7 2.853-.015 1.146-.343 2.166-1.083 3.04-.93 1.098-2.131 1.629-3.576 1.75-2.131.179-3.862-.689-5.488-1.897a40.113 40.113 0 0 0-2.456-1.719 4.262 4.262 0 0 0-1.198-.529c-.962-.253-1.886.113-2.405.953-.046.075-.095.149-.13.228-.104.239-.282.334-.543.325-.386-.012-.774.005-1.16-.005-.46-.013-.574-.176-.395-.594.606-1.416 1.675-2.308 3.179-2.652 1.395-.32 2.685-.039 3.84.805.68.496 1.34 1.02 2.027 1.504.933.658 1.892 1.294 3.005 1.6 1.175.325 2.33.283 3.372-.462.612-.439 1.015-1.017 1.131-1.76.155-.995.05-1.945-.58-2.787-1.186-1.586-3.502-1.51-4.582.169-.308.478-.5.996-.47 1.58.014.243.017.49-.007.732-.028.284-.193.392-.43.269a8.185 8.185 0 0 1-1.23-.807c-.194-.149-.159-.373-.159-.581 0-1.205 0-2.409.002-3.613 0-1.204-.003-2.409 0-3.613.002-.551.036-.58.61-.587h.527c.6.007.688.096.69.711.002.803 0 1.606 0 2.409v.628c.002.651.007.66.548.341Z" />
                </svg>
            );
        case ICON_TYPES.linkArrow:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    viewBox="0 0 24 24"
                    className={`${className}`}
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
                    />
                </svg>
            );
        default:
            return null;
    }
};

Icon.propTypes = {
    name: PropTypes.oneOf(Object.values(ICON_TYPES)).isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
};
Icon.defaultProps = {
    size: 28,
};

export const SunIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
);