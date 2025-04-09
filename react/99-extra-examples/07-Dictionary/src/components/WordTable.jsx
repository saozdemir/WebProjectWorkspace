/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Mar 2025
 * <p>
 * @description:
 */
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {selectWordFromDictionary} from "../redux/wordSlice.jsx";

function WordTable() {
    const wordList = useSelector(state => state.word.word);
    const dispatch = useDispatch();
    const [selectedWordLocal, setSelectedWordLocal] = useState(null);


    useEffect(() => {
        console.log(wordList)
    }, [wordList]);

    useEffect(() => {
        if (selectedWordLocal !== null) {
            dispatch(selectWordFromDictionary(selectedWordLocal))
            console.log("Selected Word: ", selectedWordLocal.word);

        }

    }, [selectedWordLocal]);

    return (
        <div className="card">
            <DataTable value={wordList} selectionMode="single" dataKey="id" selection={selectedWordLocal} onSelectionChange={(e) => setSelectedWordLocal(e.value)}>
                <Column field="id" header="#" style={{width:"10px"}}></Column>
                <Column field="word" header="Word" ></Column>
            </DataTable>
        </div>
    )
}

export default WordTable
