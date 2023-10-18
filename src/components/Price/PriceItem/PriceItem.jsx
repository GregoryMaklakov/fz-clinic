import PropTypes from 'prop-types';

export function PriceItem({ name, price, description }) {
    return (
        <li>
            <div className="flex items-center justify-between w-full mb-2">
                <div className='flex flex-col max-w-[82%]'>
                    <p className="font-medium w-full dark:text-light md:text-sm xs:text-xs xs:max-w-[220px] line-clamp-1">
                        {name}
                    </p>
                    {description && (
                        <p className="text-xs text-gray-500 xs:max-w-[220px] max-w-[80%]">
                            {description}
                        </p>
                    )}
                </div>
                {typeof price === 'object' ? (
                    <span className="capitalize text-primary font-bold xs:text-xs xs:text-right">
                        {price.min}-{price.max} UAH
                    </span>
                ) : (
                    <span className="capitalize text-primary font-bold xs:text-xs xs:text-right">
                        {price} UAH
                    </span>
                )}
            </div>
        </li>
    );
}

PriceItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }).isRequired,
    ]),
};