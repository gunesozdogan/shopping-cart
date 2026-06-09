import styles from './ProductDetail.module.scss';
import { useEffect, useState } from 'react';

import Recommender from '../Recommender/Recommender';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const ProductDetail = ({ game }) => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.store.games);
    const cartGames = useSelector(state => state.cart.games);
    const [description, setDescription] = useState('');
    const relatedTag = game.tags[0];
    const relatedGames = [];
    let isInCart = false;

    [...cartGames].forEach(curGame => {
        if (game.name === curGame.name) {
            isInCart = true;
        }
    });

    games.forEach(currentGame => {
        if (
            currentGame.tags.includes(relatedTag) &&
            currentGame.name !== game.name
        )
            relatedGames.push(currentGame);
    });

    useEffect(() => {
        document.querySelector('.outer-container')?.scrollTo({ top: 0 });
        window.scrollTo({ top: 0 });

        const getDescription = async () => {
            try {
                const response = await fetch(
                    `https://api.rawg.io/api/games/${game.id}?key=${
                        import.meta.env.VITE_RAWG_KEY
                    }`
                );
                const data = await response.json();
                setDescription(data.description_raw || '');
            } catch {
                setDescription('');
            }
        };

        getDescription();
    }, [game.id]);

    const clickHandler = e => {
        const text = e.target.textContent;

        if (text.includes('Add')) {
            e.target.textContent = 'In Cart';
            dispatch(cartActions.add(game));
        } else {
            e.target.textContent = 'Add to Cart';
            dispatch(cartActions.remove(game));
        }
    };

    return (
        <div className={styles.content}>
            <div className={styles['product-detail-container']}>
                <div className={styles['product-detail-upper']}>
                    <img src={game.image} alt={game.name}></img>
                    <div className={styles['product-detail']}>
                        <h2>{game.name}</h2>
                        <p>
                            {description ||
                                'No description available for this game.'}
                        </p>
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
                    <div className={styles['product-detail-end']}>
                        <div className={styles['price-container']}>
                            <div
                                className={
                                    game.discount
                                        ? styles['price-container-left']
                                        : styles.hidden
                                }
                            >
                                <span>{`-${game.discount}%`}</span>
                            </div>
                            <div className={styles['price-container-right']}>
                                <span
                                    className={
                                        game.discount
                                            ? styles.price
                                            : styles.hidden
                                    }
                                >{`$${game.price.toFixed(2)}`}</span>
                                <span
                                    className={styles['discounted-price']}
                                >{`$${(
                                    (game.price * (100 - game.discount)) /
                                    100
                                ).toFixed(2)}`}</span>
                            </div>
                        </div>
                        <button
                            onClick={clickHandler}
                            className={styles['add-to-cart']}
                        >
                            {isInCart ? 'In Cart' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
            <Recommender relatedGames={relatedGames} />
        </div>
    );
};

export default ProductDetail;
