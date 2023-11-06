// pages/index.js
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

function Home() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);

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
