// pages/index.tsx
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';
import { RootState } from '../store/store';

function Home() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter); // RootState 타입 사용

    return (
        <div>
            <h1>Simple Sum App</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Home;
