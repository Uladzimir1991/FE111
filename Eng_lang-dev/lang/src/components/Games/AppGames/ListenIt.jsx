import React, { useEffect, useContext, useState } from "react"
import SpeakStyles from './AppGames.module.css'
import Store from "../../../context.js"

const ListenIt = ({speak}) => {

    const data = useContext(Store)

    const [randomWords, setRandomWords] = useState(data.playWords.sort(() => Math.random() - 0.5))

    const [array, setArray] = useState([])

    useEffect(() => {
        let anotherWord = data.playWords.sort(() => Math.random() - 0.5)
        speak(randomWords[data.wordIndex].translate)

        setRandomWords(anotherWord)
        setArray(randomWords[data.wordIndex])
    }, [data.wordIndex])

    const checkWord = (event) => {
        event.preventDefault()
        
        if((randomWords[data.wordIndex].translate === array.translate && event.target.textContent == 'Yes') || (randomWords[data.wordIndex].translate !== array.translate && event.target.textContent == 'No')) {
            data.setCorrectWords(data.correctWords + 1);

            if(data.wordIndex === data.playWords.length-1) {
                data.setWordIndex(0)
            } else {
                data.setWordIndex(data.wordIndex + 1)
            } 
        }
        else if((randomWords[data.wordIndex].translate === array.translate && event.target.textContent == 'No') || (randomWords[data.wordIndex].translate !== array.translate && event.target.textContent == 'Yes')) {
            data.setErrorWords(data.errorWords + 1)
            setRandomWords(randomWords)
        }
    }


    
    
    return (
        <section className={SpeakStyles.gameContainer}>
            <h3>Speak this word!</h3>

            <h3 className={SpeakStyles.word}>{randomWords[data.wordIndex].word}</h3>

            <div className={SpeakStyles.btnSection}>
                <button className={SpeakStyles.btnYes} onClick={checkWord}>Yes</button>
                <button className={SpeakStyles.btnNo} onClick={checkWord}>No</button>
            </div>
        </section>
    );
}

export default ListenIt;