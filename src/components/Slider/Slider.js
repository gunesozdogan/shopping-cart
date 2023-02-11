import styles from './Slider.module.css';
import SliderButton from '../SliderButton/SliderButton';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const Slider = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games);

    const [sliderGames, setSliderGames] = useState(
        games.filter(game => game.onSlider === true)
    );

    const nextSlide = () => {
        const copyGames = [...sliderGames];
        copyGames.unshift(copyGames.pop());

        setSliderGames(copyGames);
    };

    const prevSlide = () => {
        const copyGames = [...sliderGames];
        copyGames.push(copyGames.shift());

        setSliderGames(copyGames);
    };

    const buyHandler = e => {
        dispatch(cartActions.remove(e.target['data-key']));
    };

    return (
        <div className={styles['slider-container']}>
            <div className={styles.slider}>
                {sliderGames.map((game, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                index !== 0
                                    ? styles.hidden
                                    : styles['slider-inner-container']
                            }
                        >
                            <img src={game.img} alt="game" />
                            <div
                                className={styles['game-information-container']}
                            >
                                <div
                                    className={styles['price-outer-container']}
                                >
                                    <div
                                        className={
                                            game.discount
                                                ? styles['discount-percentage']
                                                : styles.hidden
                                        }
                                    >
                                        {`${-game.discount}%`}
                                    </div>
                                    <div className={styles['price-container']}>
                                        <p className={styles['price-text']}>
                                            {'$' + game.price.toFixed(2)}
                                        </p>
                                        <p
                                            className={
                                                game.discount
                                                    ? styles['discount-text']
                                                    : styles.hidden
                                            }
                                        >
                                            {'$' +
                                                (
                                                    (game.price *
                                                        (100 - game.discount)) /
                                                    100
                                                ).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    to="/gameId"
                                    className={styles['buy-button']}
                                    onClick={buyHandler}
                                >
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    );
                })}
                <SliderButton direction="next" moveSlide={nextSlide} />
                <SliderButton direction="prev" moveSlide={prevSlide} />
            </div>
        </div>
    );
};

export default Slider;
