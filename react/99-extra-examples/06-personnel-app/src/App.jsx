import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPersonnel } from './redux/personnelSlice';
import PersonnelList from './components/PersonnelList';
import PersonnelForm from './components/PersonnelForm';
import PersonnelSearch from './components/PersonnelSearch';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPersonnel());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>Personnel Management</h1>
            <PersonnelForm />
            <PersonnelSearch />
            <PersonnelList />
        </div>
    );
}

export default App;
