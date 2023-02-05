import milesMoralesImg from '../../assets/games/milesMorales.jpg';
import spidermanImg from '../../assets/games/spidermanRemastered.jpg';
import styles from './Slider.module.css';
import SliderButton from '../SliderButton/SliderButton';

const games = [
    {
        name: 'Marvel’s Spider-Man: Miles Morales',
        img: milesMoralesImg,
        price: 24,
    },
    {
        name: 'Marvel’s Spider-Man Remastered',
        img: spidermanImg,
        price: 24,
    },
];

const Slider = () => {
    return (
        <div className={styles['slider-container']}>
            <div className={styles.slider}>
                {games.map((game, index) => {
                    return <img src={game.img} alt="game" key={index} />;
                })}
                <SliderButton direction="next" />
                <SliderButton direction="prev" />
            </div>
        </div>
    );
};

export default Slider;
