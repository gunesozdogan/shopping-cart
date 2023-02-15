import styles from './ProductDetail.module.css';

const ProductDetail = ({ game }) => {
    console.log(game.tags);
    return (
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

                <button className={styles['add-to-cart']}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;
