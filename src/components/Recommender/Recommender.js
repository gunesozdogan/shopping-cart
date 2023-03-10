import { Link } from 'react-router-dom';

import { images } from '../../App';
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
                            <img src={images[game.urlName]} alt="" />
                            <div className={styles['price-container']}>
                                <div
                                    className={
                                        game.discount
                                            ? styles['price-left']
                                            : styles.hidden
                                    }
                                >
                                    <span className={styles['discount']}>
                                        {`-${game.discount}%`}
                                    </span>
                                </div>
                                <div className={styles['price-right']}>
                                    <span
                                        className={
                                            game.discount
                                                ? styles.price
                                                : styles.hidden
                                        }
                                    >
                                        {`$${game.price.toFixed(2)}`}
                                    </span>
                                    <span
                                        className={styles['discounted-price']}
                                    >
                                        {`$${(
                                            (game.price *
                                                (100 - game.discount)) /
                                            100
                                        ).toFixed(2)}`}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Recommender;
