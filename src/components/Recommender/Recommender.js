import { Link } from 'react-router-dom';

import SliderButton from '../SliderButton/SliderButton';
import styles from './Recommender.module.css';

const Recommender = ({ relatedGames }) => {
    return (
        <div className={styles['recommender-outer-container']}>
            <h2>Related Games</h2>
            <div className={styles.recommender}>
                {relatedGames.map(game => {
                    return (
                        <Link
                            to={`/${game.id}/${game.urlName}`}
                            key={game.id}
                            className={styles['recommender-product-container']}
                        >
                            <img
                                src={`../assets/games/${game.urlName}.jpg`}
                                alt=""
                            />
                            <div className={styles['price-container']}>
                                <div className={styles['price-left']}>
                                    <span className={styles['discount']}>
                                        {`-${game.discount}%`}
                                    </span>
                                </div>
                                <div className={styles['price-right']}>
                                    <span className={styles.price}>
                                        {game.price.toFixed(2)}
                                    </span>
                                    <span
                                        className={styles['discounted-price']}
                                    >
                                        {(
                                            (game.price *
                                                (100 - game.discount)) /
                                            100
                                        ).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
                <SliderButton direction="next" />
                <SliderButton direction="prev" />
            </div>
        </div>
    );
};

export default Recommender;
