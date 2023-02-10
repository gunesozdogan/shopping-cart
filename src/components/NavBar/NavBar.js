import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
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
                            <Link className={styles['nav-link']} to="cart">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
