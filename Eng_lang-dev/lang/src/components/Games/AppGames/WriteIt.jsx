import React, { useRef, useState, useContext } from "react"
import styles from './AppGames.module.css'
import Store from "../../../context"

const WriteIt = ({setWordIndex, wordIndex, speak}) => {
    const input = useRef()
    const data = useContext(Store)
    const [randomWords] = useState(data.playWords.sort(() => Math.random() - 1))

    const checkWord = (event) => {
        event.preventDefault()
        if(input.current.value === randomWords[wordIndex].translate) {
            speak(randomWords[wordIndex].translate)
            data.setCorrectWords(data.correctWords + 1)
            if(wordIndex !== data.playWords.length - 1) {
                setWordIndex(wordIndex + 1)
            } else {
                alert('Game is over!')
            }
            input.current.value = ''
        } else {
            data.setErrorWords(data.errorWords + 1)
        }
    }
    return (
        <section className={styles.gameContainer}>
            <span>Write a translation for this word.</span>
            <h3>{randomWords[wordIndex].word}</h3>
            <form onSubmit={checkWord} className={styles.writeWordBlock}>
                <input ref={input} type="text" />

                <button className={styles.btnOk}>OK</button>
            </form>
        </section>
    )
}

export default WriteIt;