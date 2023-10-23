import Link from "next/link";
import PropTypes from "prop-types";
import { Icon } from "../Icons";

export function BooksyButton({ className }) {

	return (
		<div
			className={`flex items-center justify-center overflow-hidden md:right-0 md:-top-[54px] md:left-auto md:bottom-auto xs:-top-[60px] md:z-50 ${className}`}
		>
			<div className="w-48 h-auto flex items-center justify-center relative md:w-28">
				<Icon
					name="circleText"
					size={220}
					className="fill-dark dark:fill-light animate-spin-slow"
				/>
				<Link
					href="tel:380987775580"
					className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light md:w-[52px] md:h-[52px]"
				>
					<span className="flex items-center justify-center text-center text-xl">
						Call
					</span>
				</Link>
			</div>
		</div >
	);
}

BooksyButton.propTypes = {
	className: PropTypes.string,
};
