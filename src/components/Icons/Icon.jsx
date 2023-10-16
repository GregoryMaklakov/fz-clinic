import PropTypes from 'prop-types';

export const ICON_TYPES = {
  lodoFull: 'lodoFull',
  gmail: 'gmail',
  facebook: 'facebook',
  insta: 'insta',
  booksy: 'booksy',
  linkArrow: 'linkArrow',
  circleText: 'circleText',
};

export function Icon({ className, name, size, color }) {
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
        <svg {...props} viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.33366 2.65124C6.83077 2.65124 5.38943 3.24367 4.32672 4.2982C3.26401 5.35273 2.66699 6.78299 2.66699 8.27432V18.8589C2.66699 20.3503 3.26401 21.7805 4.32672 22.835C5.38943 23.8896 6.83077 24.482 8.33366 24.482H19.0003C20.5032 24.482 21.9446 23.8896 23.0073 22.835C24.07 21.7805 24.667 20.3503 24.667 18.8589V8.27432C24.667 6.78299 24.07 5.35273 23.0073 4.2982C21.9446 3.24367 20.5032 2.65124 19.0003 2.65124H8.33366ZM2.91251 2.89487C4.35029 1.46815 6.30033 0.666626 8.33366 0.666626H19.0003C21.0337 0.666626 22.9837 1.46815 24.4215 2.89487C25.8593 4.32159 26.667 6.25663 26.667 8.27432V18.8589C26.667 20.8766 25.8593 22.8117 24.4215 24.2384C22.9837 25.6651 21.0337 26.4666 19.0003 26.4666H8.33366C6.30033 26.4666 4.35029 25.6651 2.91251 24.2384C1.47473 22.8117 0.666992 20.8766 0.666992 18.8589V8.27432C0.666992 6.25663 1.47473 4.32159 2.91251 2.89487ZM13.8123 5.95893C15.7472 5.95409 17.6161 6.6573 19.0613 7.93407L17.7314 9.41635C16.6535 8.46409 15.2595 7.9397 13.8163 7.94355L13.8137 7.94355C10.5815 7.94355 8.00033 10.4817 8.00033 13.5666C8.00033 16.6516 10.5816 19.1897 13.8123 19.1897C15.8491 19.1897 17.1513 18.4547 17.9809 17.5007C18.5837 16.8075 18.9687 15.9601 19.1725 15.1107H14.7883V13.126H21.4056L21.3312 14.1872C21.2266 15.6798 20.6962 17.4159 19.4951 18.7972C18.2674 20.2091 16.4022 21.1743 13.8123 21.1743C9.51771 21.1743 6.00033 17.7876 6.00033 13.5666C6.00033 9.34594 9.51708 5.95967 13.8123 5.95893Z"
          />
        </svg>
      );
    case ICON_TYPES.facebook:
      return (
        <svg {...props} viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.33366 2.66663C6.83077 2.66663 5.38943 3.26365 4.32672 4.32635C3.26401 5.38906 2.66699 6.8304 2.66699 8.33329V19C2.66699 20.5029 3.26401 21.9442 4.32672 23.0069C5.38943 24.0696 6.83077 24.6666 8.33366 24.6666H11.3337V16H9.66699C9.11471 16 8.66699 15.5522 8.66699 15C8.66699 14.4477 9.11471 14 9.66699 14H11.3337V13.6666C11.3337 12.1844 11.4889 10.5475 12.4596 9.29375C13.4762 7.98074 15.1772 7.33329 17.667 7.33329C18.2193 7.33329 18.667 7.78101 18.667 8.33329C18.667 8.88558 18.2193 9.33329 17.667 9.33329C15.4901 9.33329 14.5244 9.89385 14.041 10.5182C13.5118 11.2017 13.3337 12.2315 13.3337 13.6666V14H17.667C18.2193 14 18.667 14.4477 18.667 15C18.667 15.5522 18.2193 16 17.667 16H13.3337V24.6666H19.0003C20.5032 24.6666 21.9446 24.0696 23.0073 23.0069C24.07 21.9442 24.667 20.5029 24.667 19V8.33329C24.667 6.8304 24.07 5.38906 23.0073 4.32635C21.9446 3.26365 20.5032 2.66663 19.0003 2.66663H8.33366ZM19.0003 26.6666C21.0337 26.6666 22.9837 25.8589 24.4215 24.4211C25.8593 22.9833 26.667 21.0333 26.667 19V8.33329C26.667 6.29997 25.8593 4.34992 24.4215 2.91214C22.9837 1.47436 21.0337 0.666626 19.0003 0.666626H8.33366C6.30033 0.666626 4.35029 1.47436 2.91251 2.91214C1.47473 4.34992 0.666992 6.29997 0.666992 8.33329V19C0.666992 21.0333 1.47473 22.9833 2.91251 24.4211C4.35029 25.8589 6.30033 26.6666 8.33366 26.6666H19.0003Z"
          />
        </svg>
      );
    case ICON_TYPES.insta:
      return (
        <svg {...props} viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.33366 2.66663C6.83077 2.66663 5.38943 3.26365 4.32672 4.32635C3.26401 5.38906 2.66699 6.8304 2.66699 8.33329V19C2.66699 20.5029 3.26401 21.9442 4.32672 23.0069C5.38943 24.0696 6.83077 24.6666 8.33366 24.6666H19.0003C20.5032 24.6666 21.9446 24.0696 23.0073 23.0069C24.07 21.9442 24.667 20.5029 24.667 19V8.33329C24.667 6.8304 24.07 5.38906 23.0073 4.32635C21.9446 3.26365 20.5032 2.66663 19.0003 2.66663H8.33366ZM2.91251 2.91214C4.35029 1.47436 6.30033 0.666626 8.33366 0.666626H19.0003C21.0337 0.666626 22.9837 1.47436 24.4215 2.91214C25.8593 4.34992 26.667 6.29997 26.667 8.33329V19C26.667 21.0333 25.8593 22.9833 24.4215 24.4211C22.9837 25.8589 21.0337 26.6666 19.0003 26.6666H8.33366C6.30033 26.6666 4.35029 25.8589 2.91251 24.4211C1.47473 22.9833 0.666992 21.0333 0.666992 19V8.33329C0.666992 6.29997 1.47473 4.34992 2.91251 2.91214ZM21.6863 5.59202C22.095 5.96353 22.1251 6.59598 21.7536 7.00464L21.7403 7.0193C21.3688 7.42796 20.7363 7.45807 20.3277 7.08656C19.919 6.71506 19.8889 6.08261 20.2604 5.67395L20.2737 5.65928C20.6452 5.25063 21.2777 5.22051 21.6863 5.59202ZM9.18865 9.18828C10.3764 8.00055 11.9873 7.33329 13.667 7.33329C15.3467 7.33329 16.9576 8.00055 18.1453 9.18828C19.3331 10.376 20.0003 11.9869 20.0003 13.6666C20.0003 15.3463 19.3331 16.9572 18.1453 18.145C16.9576 19.3327 15.3467 20 13.667 20C11.9873 20 10.3764 19.3327 9.18865 18.145C8.00092 16.9572 7.33366 15.3463 7.33366 13.6666C7.33366 11.9869 8.00092 10.376 9.18865 9.18828ZM13.667 9.33329C12.5177 9.33329 11.4155 9.78984 10.6029 10.6025C9.79021 11.4152 9.33366 12.5174 9.33366 13.6666C9.33366 14.8159 9.79021 15.9181 10.6029 16.7308C11.4155 17.5434 12.5177 18 13.667 18C14.8163 18 15.9185 17.5434 16.7311 16.7308C17.5438 15.9181 18.0003 14.8159 18.0003 13.6666C18.0003 12.5174 17.5438 11.4152 16.7311 10.6025C15.9185 9.78984 14.8163 9.33329 13.667 9.33329Z"
          />
        </svg>
      );
    case ICON_TYPES.booksy:
      return (
        <svg viewBox="0 0 76 17" {...props} className={`h-[44px] ${className}`}>
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
    case ICON_TYPES.circleText:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"

          viewBox="0 0 1080 1080"
          className={`${className}`}
          {...props}
        >
          <path d="M541 182.1c0 .8-1.4 16.2-3.2 34.2-2.5 26.1-2.9 33-1.9 33.6 1.3.8 15.2 2.3 15.8 1.7.2-.2 1.2-9.2 2.3-20.1 1.4-13.5 2.6-21 3.8-23.4 4.9-10.2 22.4-10.8 27.6-1 2 3.6 2 3.8-.1 25.5-1.2 12.1-2 22-1.9 22.1.6.7 16.2 2 16.8 1.4 1.3-1.2 4.7-45.4 3.9-49.6-1.9-9.1-6.4-15-14.5-19.3-4.5-2.3-6.3-2.6-15.1-2.7-7.7 0-10.7.4-13.2 1.8l-3.3 1.8V185c0-2.8-.2-3-3.9-3-2.1 0-5.9-.3-8.5-.6-3.6-.5-4.6-.4-4.6.7zm10.5 8.6c-.2 1.6-.7 5-1 7.7l-.5 4.9 5.7-5.5c4.1-3.8 7.2-5.8 10.6-6.7 10.1-2.9 23.7.9 28.4 7.7 3.7 5.6 4.2 10.9 2.7 28.6-2 22.6-2 22.6-5.1 22.6-2.6 0-2.6-.1-2-5.8 3.5-33.9 3.3-38.6-2.7-44.5-7.9-8-23.9-7.5-31.8.9-4.4 4.7-5.7 9.4-7.5 27.3l-1.7 17.1h-2.8c-2.7 0-2.9-.2-2.4-3.3.3-1.7 1.5-13.6 2.6-26.2 2.6-28.3 2.4-27.5 5.5-27.5 2.1 0 2.4.4 2 2.7zM487.7 186c-9.1 2.3-19.1 9.9-23 17.6-6.2 12.3-3.8 30.3 5.4 40.8 5.2 5.9 14.6 10.6 22.8 11.3 13.9 1.3 28.2-4.4 34.7-13.9l2.7-3.8-5.3-4.7c-2.9-2.7-5.6-4.9-6-5.1-.5-.2-1.7 1-2.9 2.7-6.8 9.6-23.4 11.4-31.8 3.5-2.1-2-3.3-3.8-2.7-4.3.5-.4 11.5-2.3 24.4-4.1 12.9-1.7 23.8-3.5 24.2-3.9 1.2-1.1-.9-11.9-3.5-17.5-3.5-7.5-8-12.1-15.5-15.8-7.1-3.5-16.1-4.6-23.5-2.8zm18.7 7.1c6.7 2.5 13.7 9.7 16 16.6 2.8 8.2 4.4 7.5-23.1 11.2-13.7 1.8-25.2 3.7-25.7 4.1-1.4 1.3 1.4 8 5.2 12.2 5.2 5.8 10.4 8.1 18.2 8.2 8.1.1 13.6-1.5 18.5-5.4 3.1-2.5 4.1-2.8 5.3-1.8 1.2 1.1.9 1.7-2.1 4.3-8.2 7.1-25.3 9.4-34.8 4.8-9.3-4.6-15.2-13.4-16.5-24.4-2.5-21.4 18.6-37.5 39-29.8z" />
          <path d="M484.9 197.7c-7 3.6-11.5 10-12.4 17.9-.4 3-.5 5.8-.1 6.1.6.6 45.7-5.5 46.5-6.3 1.1-1-2.7-9.3-5.9-12.8-7.2-8-18.1-9.9-28.1-4.9zM504 203c3.6 1.8 7.9 6.5 6.9 7.4-.4.5-28.2 4.6-30.6 4.6-2.2 0-.8-4.8 2.5-8.4 5.4-5.8 14.1-7.2 21.2-3.6zM709.8 199.3c-7.6 11.4-48.9 77.9-48.6 78.2.2.1 3.4 2.2 7.1 4.5 5.8 3.6 7.1 4.1 8.1 2.9.7-.8 5.4-7.9 10.4-15.9 11.5-18.3 14.3-21.2 21.4-21.7 4.6-.4 5.9 0 10.1 2.6 5.7 3.7 8.2 8.4 7.3 13.4-.3 1.9-5.6 11.4-11.6 21.1-6.1 9.7-11 18.1-11 18.6 0 1 13.8 9.5 14.4 8.9.6-.6 13.8-21.8 18.7-29.9 7.9-13 9.4-20.3 6.2-29.5-3.2-9.5-15.5-18.8-26.8-20.3l-5.4-.7L718 219l8-12.5-2.5-2c-1.3-1.1-4.7-3.2-7.4-4.7l-4.9-2.8-1.4 2.3zm7.2 9c0 .4-4.5 8-10 16.8-5.5 8.9-10 16.3-10 16.5 0 .2 2.4-.6 5.3-1.7 12.3-4.9 29 2.1 34.1 14.3 3.4 8.1 1.6 13.5-11.5 34.7-5.2 8.3-9.6 15.1-9.9 15.1-.3-.1-1.3-.7-2.4-1.5-1.7-1.3-1.4-2.2 7.6-16.7 12.7-20.6 13.8-24.1 9.7-32.4-4.7-9.8-18.6-15.1-28.7-10.8-5.7 2.3-8.6 5.7-18.4 21.1-8.1 12.9-9.2 14.2-11 13.2-1-.6-1.8-1.6-1.6-2.3.2-.7 9.9-16.6 21.6-35.4 19.7-31.4 21.5-34 23.3-32.9 1 .6 1.9 1.5 1.9 2zM634 200.9c-9.6 3.1-18.4 11.4-22.1 20.9-1.7 4.2-2.3 7.9-2.3 13.7-.1 7.1.3 8.8 3.2 14.7 3.8 7.9 9.2 13 17.8 17 12 5.6 26 4.6 34.8-2.6 2.8-2.3 2.9-2.6 1.4-4.8-.9-1.3-3.1-4-4.9-6.1l-3.4-3.8-5.8 2.6c-4.5 2.1-6.6 2.5-9.5 2-14-2.6-20.2-15.7-13.4-28.6 7.5-14.3 28.2-12.7 33.2 2.7.6 1.9 1.2 3.4 1.3 3.4 1.2-.1 15-4 15.3-4.3.2-.2-.2-2.5-1-5.1-4.1-13.6-16.3-21.7-33.1-22.3-4.9-.1-10.1.1-11.5.6zm20.7 6.6c8.2 2.4 17.3 10.4 17.3 15.2 0 2.8-3.8 1-6.7-3-7.6-10.9-25.6-12.9-35.4-4-5.5 5-8.1 10.5-8.7 18.4-.8 11.2 3.3 18.6 12.9 23.4 6.8 3.5 11.7 4.1 17.9 2 4.8-1.6 5.3-1.6 6.8-.1 1.4 1.4 1.2 1.7-3.3 3.7-13.6 6-34.5-4.3-38.9-19.2-2-6.7-2-10.2 0-16.9 2.9-9.7 8.8-16.4 17.1-19.5 5.1-1.8 14.8-1.8 21 0zM415.9 203.7c-6.2 2-13.7 7.8-17.6 13.6-1.7 2.5-3.3 5.1-3.5 5.7-.2.7-1.4.7-3.7-.1-4.6-1.6-14.1-.4-20.5 2.6-3 1.4-7.5 4.8-10.1 7.6-3.6 3.8-5 4.8-5.6 3.7-.5-.7-.9-1.6-.9-2 0-.9-14.4 5.9-14.8 7-.2.7 28.2 60.8 29.3 62 .4.5 15.5-6.6 15.5-7.3 0-.4-3.9-8.8-8.7-18.8-6.9-14.5-8.7-19.1-8.7-22.9-.1-7.7 5.7-13.7 14.1-14.5 7.8-.8 10 1.7 21 24.4l9.4 19.2 7.5-3.7c4-2 7.4-4.2 7.4-4.8 0-.7-3.7-8.7-8.2-17.8-9.1-18.7-10.5-24.4-7.3-30.2 2.5-4.7 10.8-8.9 15.8-8 5.3 1 8.5 5.4 18.2 25.5 4.7 9.6 8.6 17.6 8.8 17.8.4.4 15.7-6.7 15.7-7.2 0-.2-4.5-9.6-10-20.8-10.7-21.9-14.6-27.2-22.3-30.8-5.1-2.3-14.3-2.4-20.8-.2zm19 6.3c5.8 2.9 8.7 7 17.8 25.5 7.7 15.6 8.2 17.1 6.6 18.3-.9.7-2.1 1.1-2.6.9-.5-.1-4.8-8.1-9.5-17.7-6.8-13.7-9.5-18.1-12.4-20.4-9.2-7.2-24-2.8-30 8.8-3.7 7.1-2.4 13.7 6 31.3 4 8.3 7.2 15.6 7.2 16.2 0 .9-3.8 2.6-4.5 1.9-.2-.1-3.7-7.4-7.9-16-8.5-17.6-11.7-21.9-18.1-24.4-3.7-1.4-5.2-1.5-9-.5-9.5 2.4-15.4 7.9-17.6 16.4-1.6 6.4-.5 10.1 8.1 28.3 6.6 13.7 7 14.9 5.4 16.1-1 .7-2.1 1.3-2.4 1.3-1.2 0-25.2-50.8-24.6-51.9 1.8-2.8 4.2-.8 7.1 5.6 2.9 6.5 3 6.6 3.7 3.7 2.5-10.3 3.3-12.6 5.9-15.7 3.6-4.4 11.9-8.6 18.5-9.3 4.2-.5 5.7-.1 10.6 2.4l5.8 3.1.6-2.7c2.1-9.9 7.1-16.4 16-20.7 6.2-3.1 13.9-3.3 19.3-.5zM752.7 284.1c-10.5 10.5-18.1 19-19.3 21.4-1.2 2.7-1.9 6.3-1.9 11 0 5.9.5 7.8 2.9 12.3 3.7 6.7 10.2 12.7 17.2 15.9 5.1 2.3 5.4 2.6 4 4.2-1.4 1.6-1.1 2.2 4.4 7.6l5.9 5.8 19.3-18.5c10.6-10.2 21.9-20.9 25-23.9l5.8-5.4-6-6.4-6-6.3-14.5 13.7c-16.6 15.6-21.4 18.4-27.6 16.6-7.1-2.2-12.9-8.8-12.9-14.9 0-4.3 4.1-9.4 19-23.7 7.4-7.2 13.6-13.5 13.8-14 .1-.6-2.4-3.7-5.7-6.9l-5.9-5.9-17.5 17.4zm19.6-6.3c1.5 1.6.7 2.6-11.9 14.6-7.6 7.2-14.4 14.6-15.5 16.9-6.4 12.5 4.9 29 19.9 29 8.2 0 12.5-2.6 26.3-16.1 9.8-9.5 12.3-11.4 13.7-10.6.9.6 1.7 1.5 1.9 2.1.2.5-8.9 9.8-20.3 20.7-16.4 15.5-21 19.4-22 18.5-2.2-1.8-1.7-3 3.9-8l5.2-4.7-9 .1c-7 .2-9.7-.2-12.3-1.6-4.6-2.5-10.4-8.5-12.7-13.2-2.5-5-2.6-13.7-.1-18.5 1.5-3.1 29.2-31 30.7-31 .3 0 1.3.8 2.2 1.8zM315.5 268.9c-9.3 2.4-19.2 10.6-23.5 19.6-2.1 4.2-2.5 6.4-2.5 14.5 0 8.5.3 10.1 2.9 15.3 3.5 6.8 10.2 13.4 17.7 17.4 4.7 2.4 6.5 2.8 13.9 2.8 7.6 0 9.3-.4 15-3.2 12.9-6.3 22.1-18.8 22.8-30.9l.4-6.1-3.8-.6c-2.2-.4-5.6-.7-7.6-.7-3.5 0-3.7.2-4.3 3.7-1.7 9.7-6.1 16-13.9 19.7-4 1.9-12.8 1.9-14.6 0-.5-.5 6.9-8.2 17.1-17.7 9.8-9.3 17.9-17.4 17.9-18 0-2.1-9.8-10.5-15.4-13.1-6.1-2.9-16.5-4.2-22.1-2.7zm20.4 8.6c2.7 1.5 5.9 3.8 7.1 5l2.1 2.2-18.6 17.8c-17.5 16.8-18.5 17.9-16.9 19.6 2.9 3.2 10.1 5.9 15.6 5.9 11.5-.1 24.3-10.4 26.3-21.3.5-2.7 1.2-3.7 2.6-3.7 4.5 0-.2 12.1-7.4 19.4-7 7-13.8 10-22.2 10-8.6 0-14.5-2.4-20.5-8.4-12.6-12.6-12.1-30.5 1.2-42.5 8.9-8 20.5-9.5 30.7-4z" />
          <path d="M317.5 278.9c-11.7 3-19.7 14.3-18.2 25.6.8 5.2 4.1 12.3 6.2 13.1 1.6.7 34.7-30.4 34.2-32-.2-.5-2.6-2.2-5.3-3.8-5.4-3-12.1-4.2-16.9-2.9zm9.9 6.2 3.9 1.1-4.4 4.5c-7.4 7.6-19.9 18.6-20.5 18-1.3-1.2-1.6-8.7-.5-11.9 2-6.1 10-12.7 15.6-12.8 1.1 0 3.7.5 5.9 1.1zM266 314.2c-1.6 2.9-3.5 7.6-4.1 10.5-1.1 4.7-1.4 5.1-3.2 4.2-2.2-1.2-1.9-1.4-7.7 6.5-4.1 5.7-4.2 6-2.4 7.3 1 .8 11.9 8.7 24.2 17.5 12.2 8.8 22.1 16.2 22 16.3-.9.8-51.1 14.4-51.7 14-.5-.2-5.5-11.7-11.2-25.5-5.7-13.7-10.6-25-10.9-25-.7 0-8.3 17.8-8.3 19.3 0 .7 4.8 13.1 10.6 27.6 5.9 14.5 10.6 26.6 10.4 26.7-.1.2-8.8-3.5-19.2-8.1-10.3-4.7-18.9-8.4-19.1-8.2-.1.1-1.7 3.9-3.7 8.3l-3.5 8.2 40.6 17.8c22.3 9.9 40.8 18 41.2 18.2.4.1 1.6-1.9 2.7-4.5 1.2-2.6 2.8-6.4 3.6-8.3l1.5-3.6-10.7-4.7-10.8-4.8-3.1-7.7c-1.6-4.2-2.7-8-2.4-8.3.4-.4 10.6-3.6 22.6-7.3 12.1-3.6 22-6.7 22.1-6.9.1-.1 1.3-2.9 2.7-6.2 1.6-3.8 3.1-6 4.1-6 1.4 0 10.7-11.8 10.7-13.6 0-.3-6.8-5.5-15-11.4-15.5-11-19.5-14.8-20.6-19.1-1.1-4.3.3-10.5 3.4-14.8l3-4.1-6.6-4.7c-3.7-2.7-7-4.8-7.4-4.8-.4 0-2.1 2.4-3.8 5.2zm8.8 5.4c.2.1-.6 2.1-1.8 4.5-1.8 3.4-2.1 5.5-1.8 10.5.6 9 3.5 12.6 20 24.6 12.5 9.1 13.6 10.1 12.5 11.9-.6 1-1.5 1.9-2 1.9-1.6 0-45.7-32.4-45.7-33.6 0-2.6 2.5-3.3 5-1.4 3.1 2.4 3.9 2.4 6.1.4 1.4-1.2 1.5-2.2.7-5-1-3.7-.4-7.8 1.8-13.3 1.2-3 1.6-3.2 3.2-2 .9.7 1.8 1.4 2 1.5zm-44.7 57c4.6 11.3 8.9 20.8 9.6 21.1.6.2 12.9-2.9 27.2-7 24.2-6.9 26.1-7.3 25.5-5.3-.3 1.2-.9 2.4-1.3 2.9-.4.4-11 3.9-23.7 7.8-12.6 3.9-23.4 7.4-24 7.8-.8.4.3 4.4 3.5 12.6l4.7 12 9.1 3.9c9 4 9.1 4 8.1 6.8-.6 1.5-1.1 2.8-1.2 2.8-.5 0-69.9-30.9-70.3-31.4-.8-.8.8-4.6 2-4.6.7 0 11 4.3 23 9.6 12 5.2 22.1 9.4 22.3 9.1.2-.2-5.5-14.9-12.6-32.6-12.1-29.8-14-36.1-11.1-36.1.4 0 4.5 9.3 9.2 20.6zM803.7 340.9c-9.3 3.1-16.3 9.2-20.6 18.1-2.1 4.5-2.6 6.9-2.6 13.6 0 7.3.4 8.7 3.8 15.6 2.7 5.5 5.3 9.1 9.3 12.7l5.6 5-4.1 1.1c-7.9 2.1-14.6-2.3-19.9-13-2.3-4.8-2.7-6.7-2.7-14.6v-9.1l-7.9-.7c-4.4-.3-8.2-.4-8.4-.1-.2.2-.6 3.2-.9 6.7-1.5 18.5 12.8 43.2 27.5 47.4 6.9 2 15 1.4 21.8-1.5 2.7-1.2 16.7-8.7 31.1-16.7l26.2-14.6-3.1-5.7c-4.9-8.7-5.2-9.1-6.8-8-2.5 1.5-2.7 1.1-3.4-5.1-.9-8-6.4-18.8-12.2-23.9-9.4-8.3-21.4-10.9-32.7-7.2zm22 7c8.4 4.2 15.3 14.2 16.8 24.2.5 3.6.1 6.2-1.8 11.7-1.4 4-2.3 7.2-2 7.2.2 0 3.1-1.5 6.4-3.3 5.1-2.7 6.1-3 6.9-1.7.5.8 1 1.8 1 2.2 0 1-48.2 27.5-53.3 29.2-10 3.4-18.1 1.2-25.4-6.7-7-7.6-13.3-22.4-13.3-31.4 0-2.8.4-3.3 2.4-3.3 2.2 0 2.4.4 2.8 7 1 13.6 10.3 27.4 20.2 30.1 5.2 1.4 10.4.2 20.3-4.9 7.9-4 9.2-5.5 5.3-6-9.7-1.2-17.9-7.2-22.5-16.5-7.9-16.2-1-32.9 16.2-39.3 5.1-1.9 14.8-1.2 20 1.5z" />
          <path d="M808.8 351.4c-10.2 2.8-17.8 12.2-17.8 22.1 0 9.4 7.2 20.9 15.5 24.6 9.1 4.2 20.2 1.4 27.5-6.8 14.9-16.9-3.4-46-25.2-39.9zM823 359c6.8 3.5 11.9 15.1 9.9 22.5-2.8 10.2-15.3 15.4-25 10.5-4.5-2.3-9.5-9.3-10.5-14.7-1.4-7.2 2.1-14.2 9.1-18.4 4-2.5 11.5-2.5 16.5.1zM810.1 425.3c-4.5 1.6-7.6 7.3-6.7 12.2.9 4.9 5.6 8.5 11 8.5 7.5 0 12.5-6.2 10.6-13.2-1.9-6.8-8.2-10-14.9-7.5zm7.1 5.9c2.4 2 2.8 4.4 1.2 6.7-1.8 2.5-5.6 2.7-7.8.5-2.1-2.1-2-4 .4-6.4 2.3-2.3 4-2.5 6.2-.8zM856.8 477.4c-21.4 1.8-39 3.4-39.2 3.7-.5.5.9 16.8 1.5 17.3.2.2 7.2-.2 15.4-1 8.3-.7 15.7-1.3 16.6-1.4 1.3 0 1.8 2.5 2.8 16.2.6 9 1.5 18.5 1.8 21.1l.6 4.8 7.6-.6c4.2-.4 7.8-.9 8-1.1.2-.2-.4-9.4-1.3-20.5s-1.4-20.4-1.1-20.7c.7-.7 21.5-2.5 22.1-1.9.3.2 1.3 10.7 2.4 23.2 1 12.4 2 22.8 2.2 23.1.3.2 3.9.1 8.1-.2 7.1-.6 7.7-.9 7.7-3 0-2.7-3.8-49.8-4.6-57.2l-.5-5.2-5.7.1c-3.1.1-23.1 1.6-44.4 3.3zm46.5 25.8c1 12.8 2.1 24.8 2.4 26.5.5 3 .3 3.3-1.9 3.3h-2.5l-1.7-22.8c-1-12.5-2.1-23-2.5-23.3-.6-.6-31.4 1.7-33.6 2.5-1 .3-.4 11.6 1.9 36.3.4 5 .3 5.3-1.8 5.3-2.2 0-2.3-.4-3.5-17.3-.7-9.4-1.5-18.7-1.8-20.6l-.6-3.4-9.6.7c-5.3.3-12.9.9-16.8 1.2l-7.3.7v-3.2c0-2.8.3-3.1 3.3-3.2 1.7 0 17.8-1.3 35.7-2.8 17.9-1.6 33.9-2.9 35.5-3l3.1-.1 1.7 23.2zM249.4 480.7c-3 .6-7.2 5.3-7.4 8.3-.4 5.2.1 6.9 3.1 9.9 6.1 6.1 16.9 2.8 18.5-5.6.9-5-1.7-10-6.1-11.9-3.5-1.4-4.2-1.5-8.1-.7zm6.6 7.1c4.6 3.7-.9 10.6-5.9 7.5-2.3-1.5-2.7-6.4-.5-8 2.4-1.8 3.8-1.6 6.4.5zM237.9 536.2l-3.6 7.2 4.1 3.1c7.7 5.8 9.7 14.8 5.4 23.5-3.2 6.3-9.1 9.5-17.9 9.5-5.7 0-7.1-.4-10.2-2.8-5-3.8-7.7-9.4-7.7-15.7 0-5.8 1-8.2 5.1-12.5l2.9-3.1-5.1-6.2-5-6.3-3.8 3c-7.9 6.3-12 18.7-10.1 30.7 3 18.8 16.2 30.4 34.9 30.6 14 .1 24.6-6.2 31.1-18.4 2.9-5.4 3.5-7.5 3.8-15 .7-14.7-4.7-26-15.3-31.9l-5.1-2.9-3.5 7.2zm10.8 5c4.8 5.2 6.6 9.6 7.1 17.9.6 9.8-1.6 16.6-7.1 22.7-6 6.4-10.7 8.5-20.5 9-7.7.4-8.7.2-14.6-2.7-3.8-1.8-7.5-4.6-9.1-6.7-6.9-9-9-23.7-4.7-32.6 3.1-6.3 5-7.8 6.8-5.4 1.1 1.6 1 2.3-1.4 5.4-2.2 2.9-2.7 4.8-3 10.8-.4 6.1 0 8.1 2.1 12.7 4.3 9.3 13.3 14.3 24.4 13.3 14.1-1.2 23.3-10.8 23.3-24.4 0-6.5-3.5-14.8-7.5-18-1.7-1.4-2.1-2.2-1.3-3.5 1.3-2.4 2-2.2 5.5 1.5zM822.6 540.2c-.5 1.4-11.6 72-11.6 73.6 0 .8 15.1 3.5 15.8 2.7.2-.1 1.8-9.9 3.7-21.6 1.9-11.8 3.7-22.9 4-24.6.6-3.2.9-2.9 26.7 25.5l26.1 28.7 6 1.3c3.3.7 6.2 1.1 6.4.9.7-.8 11.6-71.8 11-72.3-.8-.8-14.6-2.9-15.2-2.3-.3.3-2.2 11.1-4.3 23.9l-3.7 23.4-26.3-29.1c-20.5-22.7-27-29.3-29.3-29.7-1.6-.3-4.3-.9-5.9-1.2-2-.4-3.1-.1-3.4.8zm36.5 37c33.9 37.6 31.7 35.3 32.3 34.7.2-.2 1.8-9.4 3.5-20.4 5.4-34.4 5-32.5 7.7-32.5 1.4 0 2.2.5 1.9 1.2-.4 1.1-9.5 58.1-9.5 59.3 0 .3-.8.5-1.8.5-1.2 0-13.1-12.4-31.8-33.1-24-26.6-30-32.7-30.6-31.2-.3 1-2.3 12.6-4.3 25.8-2 13.2-3.9 25-4.2 26.2-.5 2.4-4.3 3.3-4.3 1 0-1.5 9-59.8 9.6-61.5.2-.6 1-1.2 1.8-1.2s14.2 14.1 29.7 31.2zM234.1 605c-17.8 4.9-32.6 9.1-32.8 9.4-.6.6 2.6 13.9 3.7 15.7.5.7 11.9-2 33.1-7.7 17.8-4.8 32.8-9.1 33.2-9.5.9-.7-3.1-17-4.2-16.8-.3 0-15.2 4.1-33 8.9zm30.2 1.2c.4 1.2.5 2.3.4 2.5-.5.5-52.7 14.3-54 14.3-1.2 0-3.2-4-2.4-4.6.6-.4 52.4-14.2 53.8-14.3.9-.1 1.9.9 2.2 2.1zM183 616.7c-11.6 4.2-6.6 23.1 5.6 20.9 6.9-1.3 10.8-10.7 6.8-16.4-2.8-4-8.3-6-12.4-4.5zm6.2 7c2.6 2.4 2.3 6.1-.7 7.5-4.4 2-8.2-3.6-4.9-7.3 2.1-2.3 3.2-2.4 5.6-.2zM269 622.8c-46.2 21.9-47.8 23-50 36.8-1.6 9.8 2.9 21.4 11.5 29.3 4.1 3.8 4.2 4 2.3 5.3-1.9 1.3-1.9 1.5 1.7 8.9l3.6 7.7 30.7-14.5c16.9-8 31-14.8 31.4-15.1.4-.4-1-4.1-3-8.3l-3.7-7.7-15.5 7.4c-23.8 11.3-28.5 12.2-35.1 6.7-6.5-5.5-8.6-14-4.9-20 1.9-3.1 12-8.6 35.8-19.4 3.4-1.5 6.2-3 6.2-3.2 0-.6-7-15.7-7.3-15.6-.1 0-1.8.8-3.7 1.7zm3 10.4c0 .5-7.8 4.6-17.2 9.2-17.3 8.3-21.7 11.4-23.7 16.9-4.4 11.5 5.2 27.4 17.5 29.3 5.6.8 13.1-1.6 30.2-9.7 11-5.2 11.4-5.3 12.8-3.4.8 1 1.1 2.2.7 2.6-1.4 1.3-49.6 23.9-51 23.9-.7 0-1.3-.2-1.3-.4s-.3-1.1-.6-2c-.4-1.1 1.2-2.3 6.7-4.8l7.2-3.2-7.4-1.8c-9.2-2.3-13.4-5.5-17.6-13.7-6.1-11.7-3.8-23.2 5.8-29.5 2.2-1.5 11.2-6.1 19.8-10.1 13.9-6.5 15.7-7.1 16.9-5.7.6.9 1.2 2 1.2 2.4zM814.5 650.2c-21.2 2.7-40.4 25.3-40.5 47.6 0 5.3 1.7 14 3 15.5.3.4 4-.3 8.1-1.6 6.2-2 7.3-2.7 7-4.3-.2-1-.4-5.5-.5-9.9-.1-9 1.6-13.4 8-20.5 10.8-11.9 30.2-12.2 41.7-.6 6.1 6.1 8.2 11 8.2 19.6 0 6.6-.4 8.4-3.3 14.3-3.8 7.7-9.7 12.9-16.9 14.9-4.9 1.4-5 1.8-2.4 10.8 1.7 6.1 2 6.5 4.7 6.3 4.9-.4 15.3-6.3 20.9-11.8 6.1-6.1 11.8-16.7 13.6-25.2.6-3.3.9-9.4.6-14.1-.4-7-1.1-9.6-4.1-15.7-8.5-17.3-28.5-27.8-48.1-25.3zm23.5 9.5c8.3 4.1 15.2 11 19.3 19.3 3 6 3.2 7.2 3.2 16.6 0 9.8-.1 10.2-4.3 18.6-4.6 9.3-10.7 15.8-18.4 19.7-4 1.9-4.3 2-5 .3-1.1-2.9-1-3.1 4.1-5.6 6-3.1 12.5-10.3 16-17.6 3.5-7.4 3.7-21.1.5-28.1-6.2-13.3-22.6-23.1-36.3-21.5-11.7 1.3-23.2 9.9-28.7 21.3-2.3 4.7-2.9 7.4-3.1 14.3-.2 7.4-.5 8.5-2.2 9.2-1.7.6-2.1.2-2.7-2.8-2.4-13.1 6.5-32.5 18.8-40.6 8.2-5.5 13-6.8 23.3-6.5 7.9.2 9.9.6 15.5 3.4zM278.3 707.2l-28.1 20.1 5 6.8c2.7 3.8 5.2 6.9 5.4 6.9.4 0 54.9-38.3 56.2-39.5.3-.3-9.7-14.6-10.1-14.4-.1 0-12.9 9.1-28.4 20.1zm29.1-8.9c.6.9.8 1.8.6 2-.3.2-10.8 7.7-23.3 16.6-21.4 15.3-22.9 16.2-24.2 14.4-.8-1-1.3-2.1-1.2-2.5.4-1.2 45.2-32.7 46.1-32.4.5.1 1.4 1 2 1.9zM755.1 711.6c-5.2 6.4-5.3 6.6-3.5 8.3 4 3.8 70.3 59.1 70.8 59.1.8 0 10.6-12 10.6-13 0-.8-70.2-60.1-71.8-60.7-.4-.2-3.1 2.7-6.1 6.3zm36.8 27c37.1 30.9 33.9 27.9 31.7 30.3-1.8 1.9-2.4 1.4-33.7-24.6-30.4-25.4-31.8-26.7-30.2-28.5.9-1 1.8-1.8 2.1-1.8.2 0 13.8 11.1 30.1 24.6zM288.9 741c-19.5 17.1-35.5 31.4-35.6 31.8-.1.4 2.3 3.5 5.5 6.9l5.7 6.3 33-29c18.2-16 34.1-30.1 35.4-31.4 2.7-2.7 2.7-2.8-4.5-10.9l-4.2-4.7-35.3 31zm36.5-20.1c1.7 1.8.7 2.8-27.1 27.2-15.8 13.9-29.8 26.1-31.1 27.3-2.2 2-2.3 2-4.2 0-2-2-1.9-2.1 29.2-29.2 17.2-15 31.3-27.2 31.4-27.2 0 0 .9.9 1.8 1.9zM735.6 732.9l-5.9 6 21 21.8c11.6 12 22.5 23.1 24.2 24.8l3.2 2.9 6.1-6.1 6.1-6.1-23.9-24.6C753.3 738.1 742.3 727 742 727c-.3 0-3.2 2.7-6.4 5.9zm44.6 45.4c-1.6 1.8-2.5 1-22.1-18.7L737.7 739l1.9-2.1 1.9-2.2 20.2 20.9c19.3 19.9 20.1 20.9 18.5 22.7zM237.4 734.4c-8.2 3.6-8.5 14.9-.4 19.1 3.8 1.9 6.5 1.9 10-.2 7.2-4.2 6.3-15.6-1.5-18.9-4.1-1.7-4.2-1.7-8.1 0zm7.6 7c1.5 1.9.9 5.6-1.1 6.9-2.1 1.3-6.9-1.5-6.9-4.1 0-3.9 5.5-5.7 8-2.8zM324.8 737.6c-.3.5-.1 4.4.5 8.6l1 7.8 7.1.1c3.9 0 8.5.6 10.3 1.2 5.4 2 12.2 7.5 15.3 12.3 6.6 10.4 6.3 22.1-.7 32.4-4.7 6.7-10.9 10.7-19.1 12.2-5.3 1-7 .9-11.6-.6-11.5-3.6-19.3-11.4-22.1-22-.8-3.2-1.7-6.1-1.9-6.4-.3-.2-4-.1-8.2.3l-7.7.7.6 6c1 11.3 9.4 23.8 21.3 31.7 19.6 12.9 45 9.9 59.9-7.1 21.6-24.5 12.9-60.2-18-74.5-5-2.3-7.7-2.8-16.1-3.1-5.6-.2-10.4 0-10.6.4zm25.8 9.4c23.3 11.4 32 38.8 18.5 58.4-10.8 15.7-28.1 22.1-44.8 16.7-12.9-4.2-24-14.2-28.2-25.6-2.3-6-2.1-7.5.9-7.5 1.3 0 2.2 1.1 2.9 3.5 2.5 9.2 11.1 18.7 20.9 23.3 7 3.3 17.7 3.6 26 .8 7.3-2.5 15.3-10 19.4-18.4 2.9-6 3.3-7.6 3.3-15.2 0-7.4-.4-9.2-3-14.3-5.8-11.5-19.1-20.7-29.9-20.7-3.1 0-4.6-.5-5-1.6-1.3-3.3-.6-3.6 5.7-3.2 4.7.3 8.3 1.3 13.3 3.8zM717 750.6c-3.6 2.4-6.5 4.6-6.5 4.9 0 .2 5.1 8.1 11.4 17.4 12.6 19 13.9 22.5 10.5 29.6-2.4 5.1-9.4 9.5-15 9.5-6.1 0-8.4-2.4-21.4-21.7-6.2-9.3-11.4-16.9-11.6-17.1-.1-.2-3.4 1.8-7.3 4.4-4.4 2.9-7 5.3-6.7 6 1.2 3.1 22.4 33.3 26.4 37.5 10.8 11.7 25.8 11.7 39.9.2 2.4-1.9 5.5-5.5 7-8 2.6-4.5 2.7-4.6 4.2-2.6 1.6 2 1.7 2 8.3-2.6 3.7-2.5 6.7-5.1 6.5-5.6-.4-1.8-37.8-56.5-38.5-56.4-.4 0-3.6 2-7.2 4.5zm22.9 28.4c13.7 20.3 15 22.6 13.5 23.7-2.2 1.6-3.3.7-7.6-6l-3.3-5.2-.7 7.3c-.9 8.7-2.3 11.5-8.1 16.9-8.8 8.1-16.7 10.1-25.4 6.3-6.5-2.7-7-3.3-19.7-22-9.4-13.8-10.3-15.6-8.9-16.8.9-.6 2-1.2 2.4-1.2.5 0 5.4 6.8 11 15.1 12.6 18.5 16 21.4 25.2 21.1 11.3-.5 21.7-11.1 21.7-22.2 0-6-2.4-10.9-12.5-25.6-4.7-6.8-8.5-12.8-8.5-13.3 0-1.8 3.4-3.1 4.7-1.8.6.7 7.9 11.3 16.2 23.7zM789.8 786.3c-5.6 4.8-6.1 10.7-1.1 15.9 5.2 5.4 15.1 2.7 17.2-4.7 2.6-9.9-8.5-17.7-16.1-11.2zm9 4.9c.7.7 1.2 2.1 1.2 3.3 0 4.5-6 6.3-8 2.4-2.3-4.1 3.5-9 6.8-5.7zM653.5 788.2c-3.8 1.7-7.1 3.1-7.2 3.2-.3.3 27.1 62.4 27.9 63.1.8.8 16-6.3 15.6-7.4-3.4-9.1-27.6-62-28.3-62-.5 0-4.1 1.4-8 3.1zm17.3 30.8c10.4 23.5 11.2 25.6 9.6 26.7-1 .7-2.1 1.3-2.5 1.3-.4 0-5.9-11.8-12.3-26.2-11.6-26.2-12.2-28.3-7.6-27.5.8.1 6.1 10.7 12.8 25.7zM414.6 794.5l-2.5 7.6 2.2.8c1.2.5 12 3.9 23.9 7.7 12 3.8 21.8 7.1 21.8 7.4 0 .3-14.4 9.9-32 21.3-17.5 11.5-32.3 21.4-32.8 22-1.1 1.3-4.2 11.7-3.6 11.7.3 0 15.7 5 34.3 11 18.6 6.1 34.3 11 34.8 11 1 0 6-14.7 5.2-15.3-.2-.2-10.5-3.6-22.8-7.6-12.2-4-22-7.5-21.7-7.8.3-.4 15.1-10.1 32.8-21.7l32.2-21.1 1.7-5.7 1.7-5.7-15.2-5C443.1 794.7 419 787 418.1 787c-.5 0-2.1 3.4-3.5 7.5zm40.4 10.6c14 4.4 25.9 8.4 26.3 8.8.4.4.5 1.5.1 2.4-.3.9-17.2 12.5-37.6 25.9-23.6 15.4-36.4 24.4-35.6 24.9.7.4 12.3 4.2 25.8 8.5 13.5 4.2 24.6 7.8 24.8 7.9.8.6-1.3 3.5-2.5 3.5-2.1 0-57.3-17.9-57.3-18.6 0-2.4 6.5-7.1 38.4-28 20.1-13.1 36.2-24.2 35.8-24.5-.4-.4-12.4-4.4-26.7-8.9-14.3-4.6-26.2-8.4-26.3-8.6-.2-.1-.1-1.1.3-2.2.5-1.9.8-2 4.8-.7 2.3.8 15.7 5.1 29.7 9.6zM604.5 804.2c-7.8 2.8-17.4 12.1-19.4 18.7-.7 2.4-.9 4.7-.4 5.1.4.4 3.9 1.6 7.6 2.8l6.8 2 1.6-3.9c4-10 17.7-14 26.9-7.7 4.5 3 8.4 10.8 8.4 16.8 0 14.4-16.2 23.4-28.1 15.6l-4.2-2.8-5.5 5.6-5.6 5.5 2.9 3.1c11.2 11.7 36.1 9.8 48.6-3.8 6.6-7.1 9.4-14.2 9.3-23.7-.1-14.5-7.2-26.4-19.2-32.1-7.9-3.8-20.9-4.3-29.7-1.2zm25.3 5.8c7.3 3.3 11 6.9 14.4 13.8 7.8 15.8 1.8 32.5-14.2 40.1-6.9 3.2-19.4 3.6-24.7.8-3.5-1.9-3.8-2.4-2.4-4.6.8-1.2 1.8-1.1 6.2.8 8.4 3.7 17.9 1.7 25.7-5.4 5.5-4.9 7.6-10.7 7-19.2-.6-8.1-3.2-13.7-8.4-18.3-4.9-4.3-9.3-6-15.2-6-8.9 0-16.5 3.9-21.4 10.9-1.4 2-2.1 2.3-3.8 1.5-2.1-.9-2.1-1 .8-5 5.4-7.4 14-11.2 25.2-11.3 4.4 0 7.9.6 10.8 1.9zM529.1 828.6c-.6 9.2-1.3 16.9-1.4 17-.1.1-9.3-.5-20.5-1.3s-20.5-1.3-20.8-1.1c-.9.9-1.7 15.8-.8 15.8 2.1 0 40.9 3.1 41 3.3.3.4-1.6 22-2 22.5-.3.2-10.7-.4-23.1-1.3-12.5-.9-22.9-1.5-23.1-1.2-.3.3-.8 3.9-1.1 8l-.6 7.6 3.4.5c4.4.7 61.1 4.7 61.5 4.3.5-.5 6.8-88.7 6.3-89.1-.2-.2-4.3-.7-9-1.1l-8.6-.7-1.2 16.8zm12.9-8.9c-1.1 17.9-5.9 75.5-6.4 76-.3.4-11.8-.1-25.4-1-13.6-1-25.3-1.7-25.9-1.7-1.4 0-1.8-3.6-.5-4.3.4-.3 10.8.3 23.2 1.3 12.4 1 22.8 1.5 23.1 1.1.7-.6 3.3-34 2.7-34.5-.1-.2-9.5-.9-20.8-1.7-18.8-1.3-20.5-1.6-20.8-3.3-.4-1.8.2-1.9 12.9-1.3 7.4.4 17 1 21.5 1.3l8.1.7.7-11.4c.4-6.3 1-13.8 1.3-16.7.5-4.9.7-5.2 3.4-5.2 1.6 0 2.9.3 2.9.7zM684.4 857.6c-5.3 2.6-7.4 9.8-4.4 15.4 4 7.4 17.4 4.4 19.6-4.5.9-3.5-2.2-9.1-6.1-10.9-4.1-2-5.2-2-9.1 0zm6.5 5.4c4.4 2.3 3.1 8-1.9 8-5.9 0-6.1-7.4-.2-8.9.2-.1 1.1.3 2.1.9z" />
        </svg>
      );
    default:
      return null;
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(ICON_TYPES)).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: 32,
};
