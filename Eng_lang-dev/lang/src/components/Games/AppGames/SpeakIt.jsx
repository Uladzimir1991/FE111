import React, { useContext, useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SpeakStyles from './AppGames.module.css'
import Store from "../../../context"


const SpeakIt = ({setWordIndex, wordIndex, speak}) => {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const data = useContext(Store)
    const [randomWords] = useState(data.playWords.sort(() => Math.random() - 1))

    function startListening() {
        SpeechRecognition.startListening({ language: 'GB' })
    }

    function checkWord() {
        SpeechRecognition.stopListening()

        if(transcript.toLowerCase() === randomWords[wordIndex].translate) {
            speak(randomWords[wordIndex].translate)
            data.setCorrectWords(data.correctWords + 1)
            if(wordIndex !== data.playWords.length - 1) {
                setWordIndex(wordIndex + 1)
            } else {
                alert('Game is over!')
            }
        } else {
            data.setErrorWords(data.errorWords + 1)
        }
    }
    
    
    return (
        <section className={SpeakStyles.gameContainer}>
            <h3>Speak this word!</h3>

            <h3 className={SpeakStyles.word}>{randomWords[wordIndex].translate}</h3>
        
            <div className={SpeakStyles.speakItBtnContainer}>
                <button className={SpeakStyles.btnStartListening} onClick={startListening}>Start listening</button>
                &nbsp;
                <button className={SpeakStyles.btnStopListening} onClick={checkWord}>Stop listening</button>
                <button className={SpeakStyles.btnReset} onClick={resetTranscript}>Reset</button>
            </div>
            <p className={SpeakStyles.transcript}>{transcript ? `\u00AB ${transcript} \u00BB` : `\u00AB Start listening for transcript \u00BB`}</p>
        </section>
    );
}

export default SpeakIt;