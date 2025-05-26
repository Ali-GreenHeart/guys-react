import { useReducer } from "react";
import UserListItem from "../../components/pages/user/ListItem";
import userReducer from "../../store/user";

const UserPage = () => {
    const [users, dispatch] = useReducer(userReducer, []);

    const handleAddUser = () => {
        const email = prompt("add email")
        const name = prompt("add name")
        const surname = prompt("add surname")
        dispatch({ type: "ADD_USER", payload: { email, name, surname } })
    }

    const handleDeleteUser = (email) => {
        dispatch({ type: "DELETE_USER", payload: email })
    }
    const handleEditUser = (email) => {
        // name, surname-i deyisdire bilsin!
    }
    const handleDuplicateUser = (email) => {
        // hemin melumatin kopyasini cixarir, ancaq, email-i deyisdirmelidir! 
        // Eger deyisdirmese, cixara bilmesin!
    }

    return (
        <>
            <button onClick={handleAddUser}>Add User</button>
            {
                users.map((user) => {
                    return <UserListItem
                        key={user.email}
                        email={user.email}
                        name={user.name}
                        surname={user.surname}
                        onDelete={() => handleDeleteUser(user.email)}
                        onEdit={() => handleEditUser(user.email)}
                        onDuplicate={() => handleDuplicateUser(user.email)}
                    />
                })
            }
        </>
    )
}
export default UserPage
