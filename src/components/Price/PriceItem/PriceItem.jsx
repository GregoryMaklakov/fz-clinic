import PropTypes from 'prop-types';

export function PriceItem({ name, price }) {
    return (
        <li>
            <div className="flex items-center justify-between w-full mb-2">
                <p className="font-medium f-wull dark:text-light md:text-sm xs:text-xs xs:max-w-[220px] line-clamp-1">
                    {name}
                </p>
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
    price: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }).isRequired,
    ]),
};