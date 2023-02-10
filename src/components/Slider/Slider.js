import styles from './Slider.module.css';
import SliderButton from '../SliderButton/SliderButton';
import milesMoralesImg from '../../assets/games/milesMorales.jpg';
import spidermanImg from '../../assets/games/spidermanRemastered.jpg';
import lastOfUsImg from '../../assets/games/lastOfUs.jpg';
import destinyImg from '../../assets/games/destiny2.jpg';

import uuid from 'react-uuid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const gamesObj = [
    {
        name: 'Marvel’s Spider-Man: Miles Morales',
        img: milesMoralesImg,
        price: 24,
        discount: 30,
        onSlider: true,
        id: uuid(),
    },
    {
        name: 'Marvel’s Spider-Man Remastered',
        img: spidermanImg,
        price: 24,
        discount: 25,
        onSlider: true,
        id: uuid(),
    },
    {
        name: 'The Last of Us™ Part I',
        img: lastOfUsImg,
        price: 36,
        discount: 10,
        onSlider: true,
        id: uuid(),
    },
    {
        name: 'Destiny 2',
        img: destinyImg,
        price: 28,
        discount: 15,
        onSlider: true,
        id: uuid(),
    },
];

const Slider = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    const [games, setGames] = useState(gamesObj);

    const nextSlide = () => {
        const copyGames = [...games];
        copyGames.unshift(copyGames.pop());

        setGames(copyGames);
    };

    const prevSlide = () => {
        const copyGames = [...games];
        copyGames.push(copyGames.shift());

        setGames(copyGames);
    };

    const buyHandler = (e) => {
        dispatch(cartActions.remove(e.target['data-key']));
    };

    return (
        <div className={styles['slider-container']}>
            <div className={styles.slider}>
                {games.map((game, index) => {
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
                                            styles['discount-percentage']
                                        }
                                    >
                                        {`${-game.discount}%`}
                                    </div>
                                    <div className={styles['price-container']}>
                                        <p className={styles['price-text']}>
                                            {'$' + game.price.toFixed(2)}
                                        </p>
                                        <p className={styles['discount-text']}>
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
