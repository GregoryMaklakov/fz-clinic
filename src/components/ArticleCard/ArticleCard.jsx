import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const FramerArticleImage = motion(Image);

export function ArticleCard({ image, title, time, link, subtitle }) {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <Link
        className="w-ful inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
      >
        <FramerArticleImage
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full"
          loading="lazy"
          // placeholder="blur"
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
      >
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{subtitle}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
}

ArticleCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
};
