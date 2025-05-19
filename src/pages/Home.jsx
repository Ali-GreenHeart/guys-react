import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

// let count = 0; // RAM 

// IDC -> i don't care
// menim sene verdiyim funksionalliqdan istifade et!
// state , props
// let cache = {};
// function expensiveOperation(key) {
//     if (cache[key]) {
//         return cache[key]
//     }
//     console.log('agir emeliyyat')
//     let result = key ** 2
//     cache[key] = result
//     return result;
// }
// console.log('1', expensiveOperation(2))
// console.log('2', expensiveOperation(3))
// console.log('3', expensiveOperation(2))
const HomePage = () => {
    const [count, setCount] = useState(0); // state, setState
    const { email } = useContext(AuthContext)
    // hal veziyyet ( modal aciq bagli ), data 
    // deyisimi render edir!
    return (
        <div>
            <h1>{email || "---"}'s Counter {count} </h1>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <button onClick={() => { setCount(2) }}>2</button>
            <button onClick={() => console.log(count)}>console</button>
        </div>
    )
}
export default HomePage;
