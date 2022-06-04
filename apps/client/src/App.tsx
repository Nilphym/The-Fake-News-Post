import styles from './App.module.scss';

export const App = () => {
    console.log(styles);
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={styles['App-link']}
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};
