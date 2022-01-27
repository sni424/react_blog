import React from "react";
import { Link } from "react-router-dom";

function UserList({ users }) {
    return (
        <>
            {users.map(user => {
                return (
                    <div className="card mb-2" key={user.id}>
                        <div className="card-body p-3">
                            <Link to={`/users/${user.id}`} >{user.name}</Link>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default UserList;