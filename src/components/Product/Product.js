import styles from './Product.module.css';
import { Link } from 'react-router-dom';

const Product = props => {
    const { name, id, urlName, price, discount } = props.game;

    return (
        <Link to={`/${id}/${urlName}`} className={styles.container}>
            <img src={'../assets/games/' + urlName + '.jpg'} alt={name} />
            <h2 className={styles['product-name']}>{name}</h2>
            <div className={styles['price-container']}>
                <span className={discount ? styles.discount : styles.hidden}>
                    {-discount}%
                </span>
                <span className={styles.price}>${price.toFixed(2)}</span>
                <span
                    className={
                        discount ? styles['discount-price'] : styles.hidden
                    }
                >
                    ${((price * (100 - discount)) / 100).toFixed(2)}
                </span>
            </div>
        </Link>
    );
};

export default Product;
