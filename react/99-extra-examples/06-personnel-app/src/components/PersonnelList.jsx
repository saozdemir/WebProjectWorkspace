import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePersonnel, deletePersonnel } from '../redux/personnelSlice';

const PersonnelList = () => {
    const personnel = useSelector((state) => state.personnel.personnel);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletePersonnel(id));
    };

    const handleUpdate = (person) => {
        const updatedFirstName = prompt('Enter new first name', person.firstName);
        const updatedLastName = prompt('Enter new last name', person.lastName);
        if (updatedFirstName && updatedLastName) {
            dispatch(updatePersonnel({ ...person, firstName: updatedFirstName, lastName: updatedLastName }));
        }
    };

    return (
        <ul>
            {personnel.map((person) => (
                <li key={person.id}>
                    {person.firstName} {person.lastName}
                    <button onClick={() => handleUpdate(person)}>Update</button>
                    <button onClick={() => handleDelete(person.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default PersonnelList;