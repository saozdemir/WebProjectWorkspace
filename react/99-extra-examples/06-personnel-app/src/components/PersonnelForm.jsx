import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonnel } from '../redux/personnelSlice';

const PersonnelForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            dispatch(addPersonnel({ firstName, lastName }));
            setFirstName('');
            setLastName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <button type="submit">Add Personnel</button>
        </form>
    );
};

export default PersonnelForm;