// pages/index.tsx
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, resetCount } from '../store/counterSlice';
import { RootState } from '../store/store';

type ActionType = 'increment' | 'decrement' | 'reset'

function Home() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter);

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
        <div>
            <h1>Simple Sum App</h1>
            <p>Count: {count}</p>
            <button onClick={handleButtonClick('increment')}>Increment</button>
            <button onClick={handleButtonClick('decrement')}>Decrement</button>
            <button onClick={handleButtonClick('reset')}>Reset to Initial State</button>
        </div>
    );
}

export default Home;
