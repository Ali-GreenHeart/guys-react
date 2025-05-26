import UserListItem from "../../components/pages/user/ListItem";

const UserPage = () => {
    const users = [1, 2, 3, 4];
    const handleAddUser = () => { }
    return (
        <>
            <button onClick={handleAddUser}>Add User</button>
            {
                users.map(() => {
                    return <UserListItem
                        email="xbkd"
                        name="xbkd"
                        surname="xbkd"
                        onDelete={() => { }}
                    />
                })
            }
        </>
    )
}
export default UserPage
