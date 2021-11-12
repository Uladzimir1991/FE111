import React, { useEffect, useMemo, useState, useContext } from "react"
import styles from './AppGames.module.css'
import Store from "../../../context.js"


const PickIt = ({setWordIndex, wordIndex, speak}) => {
    
    const data = useContext(Store)

    const randomWords = useMemo(() => data.playWords.sort(() => Math.random() - 0.5), [])

    const [currentWords, setCurrentWords] = useState([])


    useEffect(() => {
        let array = [...randomWords[wordIndex].translate]
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        setCurrentWords([...array])  
        
    }, [data.correctWords])

    const putWord = (word) => {
        let i = document.querySelector('input')
        i.value += [...word]
    }

    const aplyWord = () => {
        let i = document.querySelector('input')
        if(i.value === randomWords[wordIndex].translate) {
                speak(randomWords[wordIndex].translate)
                data.setCorrectWords(data.correctWords + 1)
                i.value = ''
                if(wordIndex !== data.playWords.length - 1) {
                    setWordIndex(wordIndex + 1)
                } else {
                    alert('Game is over!')
                }
            } else {
                data.setErrorWords(data.errorWords + 1)
            }
    }

    const resetWord = () => {
        let i = document.querySelector('input')
        i.value = ''
    }

    return (
        <section className={styles.gameContainer}>
            <span>Pick wright letter and make this word.</span>
            <h3>{randomWords[wordIndex].word}</h3>
            <ul className={styles.letters}>
                {currentWords.map((word, index) => (
                    <li key={index} className={styles.btnLetter} onClick={() => putWord(word)}>{word}</li>
                ))}
            </ul>
            <div className={styles.inputWord}>
                <button className={styles.aplyWord} onClick={aplyWord}>Yes</button>
                <input className={styles.putWord} type="text" readOnly defaultValue='' placeholder='Your word will be here'></input>
                <button className={styles.resetWord} onClick={resetWord}>Reset</button>
            </div>
        </section>
    )
}

export default PickIt;