import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

function UsersInfo() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            });
    }, []);

    const userDetail = loading ? <Spinner></Spinner> :
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>

    return (
        <>
            <h1>Users 정보</h1>
            {userDetail}
            <button><Link to={`/users`}>뒤로가기</Link></button>
        </>
    );
};

export default UsersInfo;