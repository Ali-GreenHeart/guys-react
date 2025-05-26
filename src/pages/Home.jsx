import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const reducer = (_setCount) => {
    return {
        handleInc: () => _setCount((previousValue) => previousValue + 1),
        handleDec: () => _setCount((count) => count - 1),
        handleStatic: () => _setCount(2)
    }
}

const HomePage = () => {
    const [count, setCount] = useState(0);
    const { email } = useContext(AuthContext)
    const { handleInc, handleDec, handleStatic } = reducer(setCount)

    return (
        <div>
            <h1>{email || "---"}'s Counter {count} </h1>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={handleStatic}>2</button>
            <button onClick={() => console.log(count)}>console</button>
        </div>
    )
}
export default HomePage;
