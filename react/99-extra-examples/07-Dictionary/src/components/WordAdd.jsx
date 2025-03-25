/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Mar 2025
 * <p>
 * @description: Kelime ekleme sayfası
 */
import React, {useEffect, useRef, useState} from 'react'
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import {addWordFromDictionary, findWordFromDictionary} from "../redux/wordSlice.jsx";
import {useDispatch, useSelector} from "react-redux";


function WordAdd() {
    const [enterWord, setEnterWord] = useState('');
    const dispatch = useDispatch();
    const index = useSelector(state => state.word.word.length);
    const foundWord = useSelector(state => state.word.searchedWord);
    const toast = useRef(null);

    const addNewWord = () => {
        if (enterWord.trim() !== "") {
            console.log(enterWord);
            setEnterWord("");
            const newWord = {id: index+1 , word: enterWord};
            dispatch(addWordFromDictionary(newWord));
            toast.current.show({severity:'success', summary: 'Başarılı', detail:'Kelime Kaydedildi.', life: 1000});
        } else {
            toast.current.show({severity:'warn', summary: 'Uyarı', detail:'Bir kelime giriniz.', life: 1000});
        }
    }

    const findWord = () => {
        if (enterWord.trim() !== "") {
            console.log(enterWord);
            dispatch(findWordFromDictionary({ word: enterWord }));
            setEnterWord("");
            console.log("Word Found :", foundWord);
        } else {
            toast.current.show({severity:'warn', summary: 'Uyarı', detail:'Bir kelime giriniz.', life: 1000});
        }
    }

    //!  Redux state güncellemeleri asenkron olduğu için, dispatch işlemi tamamlanmadan önce foundWord state'ini kontrol ediyorsunuz. Bu nedenle foundWord boş geliyor.
    useEffect(() => {
        if (foundWord.length > 0) {
            toast.current.show({severity:'info', summary: 'Bulundu', detail: 'Kelime bulundu: ' + foundWord[0].word, life: 1000});
        } else {
            toast.current.show({severity:'warn', summary: 'Uyarı', detail:'Kelime bulunamadı.', life: 1000});
        }
    }, [foundWord]);

    return (
        <div>
            <Toast ref={toast} />
            <InputText type="text" placeholder="Kelime" style={{margin: "5px"}} value={enterWord} onChange={(e) => {
                setEnterWord(e.target.value)
            }}/>
            <Button label="Kelime Ekle" severity="success" style={{margin: "5px"}} onClick={addNewWord}/>
            <Button label="Kelime Ara" severity="info" style={{margin: "5px"}} onClick={findWord}/>
        </div>
    )
}

export default WordAdd
