// pages/index.tsx
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, resetCount } from '../store/counter/counterSlice';
import { toggleDarkMode } from '../store/theme/themeSlice';
import { RootState } from '../store/store';

type ActionType = 'increment' | 'decrement' | 'reset'

function Home() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter);
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)

    const toggleTheme = () => {
        dispatch(toggleDarkMode());
    };

    const handleButtonClick = (action: ActionType) => () => {
        switch (action) {
            case 'increment':
                dispatch(increment());
                break;
            case 'decrement':
                dispatch(decrement());
                break;
            case 'reset':
                dispatch(resetCount());
                break;
            default:
                break;
        }
    };

    return (
        <div className={isDarkMode ? 'dark' : 'light'}>
            <h1>Simple Sum App</h1>
            <p>Count: {count}</p>
            <button onClick={handleButtonClick('increment')}>Increment</button>
            <button onClick={handleButtonClick('decrement')}>Decrement</button>
            <button onClick={handleButtonClick('reset')}>Reset</button>
            <button onClick={toggleTheme}>Toggle Dark Mode</button>
        </div>
    );
}

export default Home;
