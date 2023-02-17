import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import ShopButton from '../components/ShopButton/ShopButton';
import Cart from '../components/Cart/Cart';

const HomePage = () => {
    return (
        <>
            <div className="outer-container">
                <Navbar />
                <Slider />
                <ShopButton />
                <Cart />
            </div>
        </>
    );
};

export default HomePage;
