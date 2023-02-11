import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import ShopButton from '../components/ShopButton/ShopButton';

const HomePage = () => {
    return (
        <>
            <div className="outer-container">
                <Navbar />
                <Slider />
                <ShopButton />
            </div>
        </>
    );
};

export default HomePage;
