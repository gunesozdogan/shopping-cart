import styles from './SliderButton.module.css';

const SliderButton = ({ direction, moveSlide }) => {
    return (
        <button
            className={
                direction === 'next'
                    ? styles['slider-button-next']
                    : styles['slider-button-prev']
            }
            onClick={moveSlide}
        >
            <svg
                height="32px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="32px"
            >
                <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
            </svg>
        </button>
    );
};

export default SliderButton;
