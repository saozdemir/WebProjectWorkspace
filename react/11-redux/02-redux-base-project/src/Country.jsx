import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCountries} from "./redux/features/countrySlice.jsx";

function Country() {
    //! destrcuting
    const {countries} = useSelector(store => store.country);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [])
    return (
        <div>
            {countries && countries.map((country, index) => (
                <div key={index}>{country.name.common}</div>
            ))}
        </div>
    );
}

export default Country;