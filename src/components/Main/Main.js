import { useSelector } from 'react-redux';
import Product from '../Product/Product';

import styles from './Main.module.css';

const Main = () => {
    const games = useSelector(state => state.games);

    return (
        <main className={styles.main}>
            {games.map(game => {
                return <Product key={game.id} game={game}></Product>;
            })}
        </main>
    );
};

export default Main;
