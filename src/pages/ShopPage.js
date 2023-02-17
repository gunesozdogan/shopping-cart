import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Cart from '../components/Cart/Cart';

const ShopPage = () => {
    return (
        <>
            <div className="outer-container">
                <Navbar />
                <Main />
                <Cart />
            </div>
        </>
    );
};

export default ShopPage;
