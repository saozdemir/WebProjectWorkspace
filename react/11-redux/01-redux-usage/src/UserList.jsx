import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "./redux/userSlice.jsx";
import User from "./User.jsx";

function UserList() {
    const dispatch = useDispatch();

    //* Store dan users ları çekme işlemi
    const {users} = useSelector(store => store.user);
    console.log(users)


    useEffect(() => {
        dispatch(getAllUsers())
    }, []);
    return (
        <div>
            {
                users && users.map((user) => (
                    <User key={user.key} user={user}></User>
                ))
            }
        </div>
    )
}

export default UserList
