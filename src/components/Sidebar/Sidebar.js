import styles from './Sidebar.module.scss';
import { useNavigate } from 'react-router-dom';
import { storeActions } from '../../store/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const games = useSelector(state => state.store.games);
    const [currentCategory, setCurrentCategory] = useState('All');

    const categories = [...new Set(games.flatMap(game => game.tags))].sort();

    const displayCategory = e => {
        let category = e ? e.target.textContent : 'All';

        navigate(`/store?category=${category}`);
        dispatch(storeActions.changeDisplayedGames(category));
        setCurrentCategory(category);
    };

    useEffect(() => displayCategory(), []);

    return (
        <div className={styles.sidebar}>
            <span>CATEGORIES</span>
            <ul>
                <button
                    onClick={displayCategory}
                    className={'All' === currentCategory ? styles.active : ''}
                >
                    All
                </button>
                {categories.map((category, index) => {
                    return (
                        <li key={index}>
                            <button
                                onClick={displayCategory}
                                className={
                                    category === currentCategory
                                        ? styles.active
                                        : ''
                                }
                            >
                                {category}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
