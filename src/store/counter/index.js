const counterReducer = (prevState, actionType) => {
    switch (actionType) {
        case "inc":
            return prevState + 1;
        case "dec":
            return prevState - 1;
        case "reset":
            return 0;
        case "special": {
            const num = +prompt('Enter new value of counter: ')
            return num;
        }
        default:
            throw new Error(`Non-implemented action type: ${actionType}`)
    }
}
export default counterReducer;
