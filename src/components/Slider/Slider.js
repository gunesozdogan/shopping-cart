import milesMoralesImg from '../../assets/games/milesMorales.jpg';
import spidermanImg from '../../assets/games/spidermanRemastered.jpg';
import lastOfUsImg from '../../assets/games/lastOfUs.jpg';
import destinyImg from '../../assets/games/destiny2.jpg';
import styles from './Slider.module.css';
import SliderButton from '../SliderButton/SliderButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const gamesObj = [
    {
        name: 'Marvel’s Spider-Man: Miles Morales',
        img: milesMoralesImg,
        price: 24,
        discount: 30,
    },
    {
        name: 'Marvel’s Spider-Man Remastered',
        img: spidermanImg,
        price: 24,
        discount: 25,
    },
    {
        name: 'The Last of Us™ Part I',
        img: lastOfUsImg,
        price: 36,
        discount: 10,
    },
    {
        name: 'Destiny 2',
        img: destinyImg,
        price: 28,
        discount: 15,
    },
];

const Slider = () => {
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
