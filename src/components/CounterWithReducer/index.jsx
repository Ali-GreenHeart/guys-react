import { useReducer } from "react";
import counterReducer from "../../store/counter";

// smart component -> icerisinde bizness logic olan component
const CounterWithReducer = () => {
    const [counter, dispatch] = useReducer(counterReducer, 0);

    const handleIncrement = () => dispatch("inc");
    const handleDecrement = () => dispatch("dec");
    const handleLogging = () => console.log(counter);
    const handleReset = () => dispatch("reset");
    const handleSpecial = () => dispatch("special");

    return (
        <div
            style={{
                backgroundColor: 'bisque',
                minHeight: '50vh'
            }}
        >
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleLogging}>log</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleSpecial}>special</button>
        </div>
    )
}
export default CounterWithReducer
