import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <Link className={styles.header} to="/">
                    GAME FIELD
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link className={styles['nav-link']} to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={styles['nav-link']} to="/store">
                                Store
                            </Link>
                        </li>
                        <li>
                            <div
                                className={
                                    cart.length
                                        ? styles['cart-container-visible']
                                        : styles['cart-container']
                                }
                            >
                                <Link className={styles['nav-link']} to="cart">
                                    Cart
                                </Link>
                                <span
                                    className={cart.length ? '' : styles.hidden}
                                >
                                    {cart.length || ''}
                                    {cart.length || ''}
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
