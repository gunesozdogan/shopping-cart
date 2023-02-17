import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cartSlice';

import styles from './Navbar.module.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.games);

    const cartClickHandler = () => {
        dispatch(cartActions.switchDisplay());
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
            </div>
        </div>
    );
};

export default Navbar;
