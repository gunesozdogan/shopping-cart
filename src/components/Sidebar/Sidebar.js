import styles from './Sidebar.module.css';
import { useNavigate } from 'react-router-dom';
import { storeActions } from '../../store/storeSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [currentCategory, setCurrentCategory] = useState('All');

    const categories = [
        'Action',
        'Open World',
        'Singleplayer',
        'Multiplayer',
        'Shooter',
        'Adventure',
        'FPS',
        'RPG',
        'Survival',
        'Zombies',
        'Story Rich',
        'Superhero',
        'Football',
        'Sports',
    ];

    const displayCategory = e => {
        let category;
        if (e) category = e.target.textContent;
        else category = 'All';

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
