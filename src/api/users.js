import axios from "axios";

const USERS_BE_API = process.env.REACT_BE_API_URL + "users";

export const getUsers = async () => {
    const { data } = await axios.get(USERS_BE_API)
    return data;
}
