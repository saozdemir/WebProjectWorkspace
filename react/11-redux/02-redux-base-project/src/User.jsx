import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUser} from "./redux/features/userSlice.jsx";

function User() {
    const {users} = useSelector((store) => store.user);//! destrcuting
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser());
    }, []);
    return (
        <div>
            {users && users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))
            }
        </div>
    );
}

export default User;