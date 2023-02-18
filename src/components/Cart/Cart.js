import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { Link } from 'react-router-dom';

import styles from './Cart.module.css';

const Cart = () => {
    const dispatch = useDispatch();
    const isDisplayed = useSelector(state => state.cart.isDisplayed);
    const cartGames = useSelector(state => state.cart.games);
    let total = 0;

    const cartCloseHandler = e => {
        dispatch(cartActions.switchDisplay());
    };

    [...cartGames].forEach(game => {
        total += (game.price * (100 - game.discount)) / 100;
    });

    const removeGameHandler = game => {
        dispatch(cartActions.remove(game));
    };

    return (
        <div className={isDisplayed ? styles['cart-overlay'] : styles.hidden}>
            <div className={styles['cart-container']}>
                <div className={styles.header}>
                    <h2>YOUR SHOPPING CART</h2>
                    <button
                        onClick={cartCloseHandler}
                        className={styles['close-btn']}
                    >
                        <svg id="Layer_1" version="1.1" viewBox="0 0 64 64">
                            <style
                                type="text/css"
                                height="30px"
                                width="30px"
                            ></style>
                            <g>
                                <g
                                    id="Icon-Close"
                                    transform="translate(381.000000, 231.000000)"
                                >
                                    <polyline
                                        id="Fill-16"
                                        points="-370.7,-174.7 -373,-177 -327,-223 -324.7,-220.7 -370.7,-174.7    "
                                    />
                                    <polyline
                                        id="Fill-17"
                                        points="-327,-174.7 -373,-220.7 -370.7,-223 -324.7,-177 -327,-174.7    "
                                    />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                {cartGames.map((game, index) => {
                    return (
                        <div key={index} className={styles.container}>
                            <Link
                                onClick={cartCloseHandler}
                                to={`/${game.id}/${game.urlName}`}
                                className={styles['cart-game-container']}
                            >
                                <img
                                    src={`../assets/games/${game.urlName}.jpg`}
                                    alt="game"
                                />
                                <span className={styles['game-name']}>
                                    {game.name}
                                </span>
                                <div className={styles['game-price']}>
                                    <span
                                        className={
                                            game.discount
                                                ? styles['default-price']
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
                            </Link>
                            <button
                                onClick={() => removeGameHandler(game)}
                                className={styles['remove-btn']}
                            >
                                <svg
                                    id="Layer_1"
                                    version="1.1"
                                    viewBox="0 0 64 64"
                                >
                                    <style
                                        type="text/css"
                                        height="30px"
                                        width="30px"
                                    ></style>
                                    <g>
                                        <g
                                            id="Icon-Close"
                                            transform="translate(381.000000, 231.000000)"
                                        >
                                            <polyline
                                                id="Fill-16"
                                                points="-370.7,-174.7 -373,-177 -327,-223 -324.7,-220.7 -370.7,-174.7    "
                                            />
                                            <polyline
                                                id="Fill-17"
                                                points="-327,-174.7 -373,-220.7 -370.7,-223 -324.7,-177 -327,-174.7    "
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    );
                })}
                <div className={styles.total}>
                    <span className={styles['total-text']}>Total Sum:</span>
                    <span className={styles['total-price']}>{`$${total.toFixed(
                        2
                    )}`}</span>
                </div>
                <button className={styles['buy-btn']}>Go to Payment</button>
            </div>
        </div>
    );
};

export default Cart;
