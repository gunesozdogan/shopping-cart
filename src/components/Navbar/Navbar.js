import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cartSlice';

import styles from './Navbar.module.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.games);
    const [isMenuOn, setIsMenuOn] = useState(false);

    const cartClickHandler = () => {
        dispatch(cartActions.switchDisplay());
    };

    const displayMenu = () => {
        setIsMenuOn(!isMenuOn);
    };

    return (
        <div className={styles.container}>
            <div className={styles.Navbar}>
                <Link className={styles.header} to="/">
                    GAME FIELD
                </Link>
                <nav>
                    <ul>
                        <li className={styles['ul-link']}>
                            <Link className={styles['nav-link']} to="/">
                                Home
                            </Link>
                        </li>
                        <li className={styles['ul-link']}>
                            <Link className={styles['nav-link']} to="/store">
                                Store
                            </Link>
                        </li>
                        <li className={styles['ul-link']}>
                            <button
                                onClick={cartClickHandler}
                                className={
                                    cart.length
                                        ? styles['cart-container-visible']
                                        : styles['cart-container']
                                }
                            >
                                <span className={styles['nav-link']} to="cart">
                                    Cart
                                </span>
                                <span
                                    className={cart.length ? '' : styles.hidden}
                                >
                                    {cart.length}
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <nav onClick={displayMenu} className={styles['nav-mobile']}>
                    <svg version="1.1" viewBox="0 0 18 12">
                        <title />
                        <desc />
                        <defs />
                        <g id="Page-1" stroke="none" strokeWidth="1">
                            <g
                                id="Core"
                                transform="translate(-87.000000, -342.000000)"
                            >
                                <g
                                    id="menu"
                                    transform="translate(87.000000, 342.000000)"
                                >
                                    <path
                                        d="M0,12 L18,12 L18,10 L0,10 L0,12 L0,12 Z M0,7 L18,7 L18,5 L0,5 L0,7 L0,7 Z M0,0 L0,2 L18,2 L18,0 L0,0 L0,0 Z"
                                        id="Shape"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <ul
                        className={
                            isMenuOn ? styles['ul-mobile'] : styles.hidden
                        }
                    >
                        <li className={styles['ul-link-mobile']}>
                            <Link className={styles['nav-link-mobile']} to="/">
                                Home
                            </Link>
                        </li>
                        <li className={styles['ul-link-mobile']}>
                            <Link
                                className={styles['nav-link-mobile']}
                                to="/store"
                            >
                                Store
                            </Link>
                        </li>
                        <li className={styles['ul-link-mobile']}>
                            <button
                                onClick={cartClickHandler}
                                className={styles['cart-container-mobile']}
                            >
                                <span
                                    className={styles['nav-link-mobile']}
                                    to="cart"
                                >
                                    Cart
                                </span>
                                <span
                                    className={cart.length ? '' : styles.hidden}
                                >
                                    {cart.length}
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
