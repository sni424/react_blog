import React from "react";

function UserList({ users }) {
    return (
        <>
            {users.map(user => {
                return (
                    <div className="card mb-2" key={user.id}>
                        <div className="card-body p-3">
                            {user.name}
                        </div>
                    </div>)
            })}
        </>
    )
}

export default UserList;