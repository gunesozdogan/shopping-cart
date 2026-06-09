import styles from './Slider.module.scss';
import SliderButton from '../SliderButton/SliderButton';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { storeActions } from '../../store/storeSlice';

const Slider = () => {
    const sliderGames = useSelector(state => state.store.sliderGames);
    const dispatch = useDispatch();

    const nextSlide = () => {
        dispatch(storeActions.nextSlide());
    };

    const prevSlide = () => {
        dispatch(storeActions.prevSlide());
    };

    return (
        <div className={styles['slider-container']}>
            <div className={styles.slider}>
                {sliderGames.map((game, index) => {
                    if (!game) return null;

                    const discountedPrice = (
                        (game.price * (100 - game.discount)) /
                        100
                    ).toFixed(2);

                    return (
                        <div
                            key={game.id}
                            className={
                                index !== 0 ? styles.hidden : styles.slide
                            }
                        >
                            <img
                                src={game.image}
                                alt={game.name}
                                className={styles['slide-image']}
                            />
                            <div className={styles.overlay}>
                                <div className={styles.info}>
                                    <h2 className={styles['game-title']}>
                                        {game.name}
                                    </h2>
                                    <div className={styles['tag-row']}>
                                        {game.tags.slice(0, 3).map(tag => (
                                            <span
                                                key={tag}
                                                className={styles.tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles['purchase-row']}>
                                    <div className={styles['price-block']}>
                                        {game.discount ? (
                                            <span
                                                className={
                                                    styles['discount-badge']
                                                }
                                            >
                                                {`-${game.discount}%`}
                                            </span>
                                        ) : null}
                                        <div className={styles.prices}>
                                            {game.discount ? (
                                                <span
                                                    className={
                                                        styles['old-price']
                                                    }
                                                >
                                                    {`$${game.price.toFixed(
                                                        2
                                                    )}`}
                                                </span>
                                            ) : null}
                                            <span
                                                className={styles['final-price']}
                                            >
                                                {`$${
                                                    game.discount
                                                        ? discountedPrice
                                                        : game.price.toFixed(2)
                                                }`}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/${game.id}/${game.urlName}`}
                                        className={styles['buy-button']}
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <SliderButton direction="prev" moveSlide={prevSlide} />
            <SliderButton direction="next" moveSlide={nextSlide} />
        </div>
    );
};

export default Slider;
