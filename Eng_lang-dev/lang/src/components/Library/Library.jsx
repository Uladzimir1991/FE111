import React, { useRef } from "react";
import * as LibraryStyles from "./Library.module.css";
import addBtn from './../../assets/img/add.svg'
import deleteBtn from './../../assets/img/delete.svg'

const Library = (props) => {
    const inputValue = useRef()
    const deleteWord = (id) => {
        const updateLibrary = props.library.filter((word, index) => index !== id)
        props.setLibrary(updateLibrary)
        localStorage.setItem('library', JSON.stringify(updateLibrary))
    }

    const addNewWord = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`)
        const translation = await response.json();
        const updateLibrary = [...props.library, {word: translation.word, translate: translation.translate, learn: 0}]
        props.setLibrary(updateLibrary)
        localStorage.setItem('library', JSON.stringify(updateLibrary))
        inputValue.current.value = ''
    }

    return (
        <section className={LibraryStyles.libraryBlock}>
            <span>Add new <b>Word</b></span>

            <form onSubmit={addNewWord} className={LibraryStyles.addWordBlock}>
                <input ref={inputValue} type="text" />
                <button>
                    <img src={addBtn} alt="button_add" />
                </button>
            </form>

            <div className={LibraryStyles.wordsTable}>
                <ul>
                    <li> <h3>Word</h3> </li>
                    <li> <h3>Tranlation</h3> </li>
                    <li> <h3>Learn</h3> </li>
                </ul>

                {props.library.map((word, index) => (
                    <ul key={index}>
                        <li>{word.word}</li>
                        <li>{word.translate}</li>
                        <li>{word.learn}</li>

                        <div className={LibraryStyles.settings}>
                            <button onClick={() => deleteWord(index)}>
                                <img src={deleteBtn} alt="delete" />
                            </button>
                        </div>
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default Library;