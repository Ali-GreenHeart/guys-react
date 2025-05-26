const UserListItem = ({
    name, surname, email, onDelete, onEdit, onDuplicate
}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #cecece' }}>
            <p>
                {name} {surname} {email}
            </p>
            <button
                onClick={onEdit}
            >🖊</button>
            <button
                onClick={onDuplicate}
            >©</button>
            <button
                onClick={onDelete}
            >X</button>
        </div>
    )
}
export default UserListItem
