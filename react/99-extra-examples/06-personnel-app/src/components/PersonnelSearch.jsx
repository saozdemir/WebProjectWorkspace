import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPersonnel } from '../redux/personnelSlice';

const PersonnelSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = query ? `firstName=${query}` : '';
        dispatch(fetchPersonnel(searchQuery));
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search by Name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default PersonnelSearch;