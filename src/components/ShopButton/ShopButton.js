import { Link } from 'react-router-dom';
import styles from './ShopButton.module.css';

const ShopButton = () => {
    return (
        <Link className={styles['shop-button']} to="/store">
            SHOP NOW
        </Link>
    );
};

export default ShopButton;
