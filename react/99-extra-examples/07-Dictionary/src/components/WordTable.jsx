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
import {useSelector} from "react-redux";

function WordTable() {
    const wordList = useSelector(state => state.word.word);
    const [selectedWord, setSelectedWord] = useState(null);


    useEffect(() => {
        console.log(wordList)
    }, [wordList]);

    useEffect(() => {
        console.log(selectedWord)

    }, [selectedWord]);

    return (
        <div className="card">
            <DataTable value={wordList} selectionMode="single" dataKey="id" selection={selectedWord} onSelectionChange={(e) => setSelectedWord(e.value)}>
                <Column field="id" header="#" style={{width:"10px"}}></Column>
                <Column field="word" header="Word" ></Column>
            </DataTable>
        </div>
    )
}

export default WordTable
