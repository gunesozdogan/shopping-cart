import { useSelector } from 'react-redux';
import Product from '../Product/Product';

import styles from './Main.module.css';

const Main = () => {
    const games = useSelector(state => state.games);

    return (
        <main className={styles.main}>
            {games.map(game => {
                return <Product game={game}></Product>;
            })}
        </main>
    );
};

export default Main;
