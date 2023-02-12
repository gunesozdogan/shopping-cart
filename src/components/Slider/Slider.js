import styles from './Slider.module.css';
import SliderButton from '../SliderButton/SliderButton';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { storeActions } from '../../store/storeSlice';

const getData = async () => {
    const response = await fetch(
        'https://game-field-b452c-default-rtdb.firebaseio.com/games.json'
    );
    const data = await response.json();

    return data;
};

const Slider = () => {
    const sliderGames = useSelector(state => state.store.sliderGames);
    const dispatch = useDispatch();

    useEffect(() => {
        const setGames = async () => {
            const games = await getData();

            dispatch(storeActions.setGames(games));
        };

        setGames();
    }, [dispatch]);

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
                    return (
                        <div
                            key={index}
                            className={
                                index !== 0
                                    ? styles.hidden
                                    : styles['slider-inner-container']
                            }
                        >
                            <img
                                src={'../assets/games/' + game.img}
                                alt="game"
                            />
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
