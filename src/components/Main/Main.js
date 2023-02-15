import { useSelector } from 'react-redux';

import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Main.module.css';

const Main = () => {
    const games = useSelector(state => state.store.displayedGames);

    return (
        <div className={styles['main-container']}>
            <Sidebar />
            <main className={styles.main}>
                {games.map((game, index) => {
                    return <Product key={index} game={game}></Product>;
                })}
            </main>
        </div>
    );
};

export default Main;
