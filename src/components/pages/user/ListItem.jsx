const UserListItem = ({
    name, surname, email, onDelete
}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #cecece' }}>
            <p>
                {name} {surname} {email}
            </p>
            <button
                onClick={onDelete}
            >X</button>
        </div>
    )
}
export default UserListItem
