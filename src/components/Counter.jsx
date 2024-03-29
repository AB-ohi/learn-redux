import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../redux/features/counter/counterSlice";

const Counter = () => {
    const {count} = useSelector((state)=> state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment 5</button> <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button><br />
            <button onClick={() => dispatch(decrementByAmount(5))}>Decrement 5</button>
        </div>
    );
};

export default Counter;