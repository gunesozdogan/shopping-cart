import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <h1>Game Area</h1>
      <nav>
        <ul>
          <li>
            <svg
              baseProfile="tiny"
              height="32px"
              id="Layer_1"
              version="1.2"
              viewBox="0 0 24 24"
              width="32px"
              stroke="#fff"
            >
              <path d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z" />
            </svg>
          </li>
          <li>
            <svg
              height="32px"
              viewBox="0 0 48 48"
              width="32px"
              stroke="#fff"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path d="M30 15V4H18v11l6 6 6-6zm-15 3H4v12h11l6-6-6-6zm3 15v11h12V33l-6-6-6 6zm15-15l-6 6 6 6h11V18H33z" />
            </svg>
            Games
          </li>
          <li>
            <svg
              fill="none"
              height="32px"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="32px"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
