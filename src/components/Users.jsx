import { useEffect, useState } from "react"
import { getUsers } from "../api/users"

const UserCard = ({ user }) => {
    return (
        <p className="txt">{user.username}</p>
    )
}
const Users = ({ }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data)
        })
    }, [])

    return (
        <>
            {
                users.map((user) => {
                    return (
                        <UserCard user={user} key={user.id} />
                    )
                })
            }

        </>
    )
}
export default Users
