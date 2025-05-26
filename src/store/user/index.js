const userReducer = (prevState = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...prevState, action.payload];
        case "DELETE_USER":
            return prevState.filter((user) => user.email !== action.payload)
        default:
            throw new Error(`Non-implemented action type: ${action.type}`)
    }
}

export default userReducer;
