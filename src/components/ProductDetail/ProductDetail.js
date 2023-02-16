import styles from './ProductDetail.module.css';

import Recommender from '../Recommender/Recommender';
import { useSelector } from 'react-redux';

const ProductDetail = ({ game }) => {
    const games = useSelector(state => state.store.games);
    const relatedTag = game.tags[0];
    const relatedGames = [];

    games.forEach(currentGame => {
        if (
            currentGame.tags.includes(relatedTag) &&
            currentGame.name !== game.name
        )
            relatedGames.push(currentGame);
    });

    return (
        <div className={styles.content}>
            <div className={styles['product-detail-container']}>
                <div className={styles['product-detail-upper']}>
                    <img
                        src={'../assets/games/' + game.urlName + '.jpg'}
                        alt="game"
                    ></img>
                    <div className={styles['product-detail']}>
                        <h2>{game.name}</h2>
                        <p>{game.description}</p>
                    </div>
                </div>

                <div className={styles['product-detail-lower']}>
                    <div className={styles['product-tag-container']}>
                        <span>Related Tags</span>
                        <ul className={styles['product-tags']}>
                            {game.tags.map((tag, index) => {
                                return <li key={index}>{tag}</li>;
                            })}
                        </ul>
                    </div>

                    <button className={styles['add-to-cart']}>
                        Add to Cart
                    </button>
                </div>
            </div>
            <Recommender relatedGames={relatedGames} />
        </div>
    );
};

export default ProductDetail;
