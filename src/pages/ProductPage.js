import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Cart from '../components/Cart/Cart';
import ProductDetail from '../components/ProductDetail/ProductDetail';

const ProductPage = () => {
    const params = useParams();
    const games = useSelector(state => state.store.games);
    const currentProduct = games.filter(
        game => Number(game.id) === Number(params.productID)
    )[0];

    return (
        <>
            <div className="outer-container">
                <Navbar />
                {games.length ? <ProductDetail game={currentProduct} /> : ''}
                <Cart />
            </div>
        </>
    );
};

export default ProductPage;
