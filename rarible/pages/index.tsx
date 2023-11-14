// pages/index.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from "react";

type ActionType = 'increment' | 'decrement' | 'reset'

function Home() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter);
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
    const items = useSelector((state: RootState) => state.item.items);

    useEffect(() => {
        dispatch({type: 'ITEM/FETCH_ITEMS_ASYNC'});
    }, []);

    useEffect(() => {
        console.log('(index.tsx)Items have been updated:', items);
    }, [items]); // 아이템 리스트에 변경이 있을 때 실행

    const toggleTheme = () => {
        dispatch({ type: 'THEME/TOGGLE_DARK_MODE_ASYNC' });
    };

    const handleButtonClick = (action: ActionType) => () => {
        switch (action) {
            case 'increment':
                dispatch({ type: 'COUNTER/INCREMENT' });
                break;
            case 'decrement':
                dispatch({ type: 'COUNTER/DECREMENT' });
                break;
            case 'reset':
                dispatch({ type: 'COUNTER/RESET' });
                break;
            default:
                break;
        }
    };

    return (
        <div className={isDarkMode ? 'dark' : 'light'}>
            <div>
                <h1>Counting</h1>
                <p>Count: {count}</p>
                <button onClick={handleButtonClick('increment')}>Increment</button>
                <button onClick={handleButtonClick('decrement')}>Decrement</button>
                <button onClick={handleButtonClick('reset')}>Reset</button>
                <button onClick={toggleTheme}>Toggle Dark Mode</button>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Home;
