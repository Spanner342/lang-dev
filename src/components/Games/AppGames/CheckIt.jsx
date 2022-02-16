import React, {useEffect, useMemo, useState, useContext } from "react";
import Store from "../../../Context";
import styles from "../../../App.module.css";
import stylesG from "./AppGames.module.css"
import { NavLink } from "react-router-dom";


const WriteIt = (props) => {

    const data = useContext(Store)

   const randomWords = useMemo(() => data.playWords.sort(() => Math.random() - 0.5), [])

   const [currentWords, setCurrentWords] = useState(['random', 'current', 'random2'])

   useEffect(() => {
    setCurrentWords([
        randomWords[props.wordIndex].word,
        randomWords[(props.wordIndex + 1)%randomWords.length].word,
        randomWords[(props.wordIndex + 2)%randomWords.length].word,
    ].sort(() => Math.random() - 0.5))
   }, [data.correctWords])

   const CheckWord = (word) =>{
       if(word === randomWords[props.wordIndex].word){
           props.speak(randomWords[props.wordIndex].translate)
           data.setCorrectWords(data.correctWords + 1)
           if(props.wordIndex !== data.playWords.length - 1){
            props.setWordIndex(props.wordIndex + 1)
           }else{
               alert('Game over')
               props.setWordIndex(0)
           }
       } else {
           data.setErrorWords(data.errorWords + 1)
       }
       
   }
    return (
        <><><div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={props.progressBarWidth}></div>
        </div><nav className={styles.gameNav}>
                <NavLink className={styles.btnBack} to="/games"></NavLink>
                <ul className={styles.results}>
                    <li>Errors: {data.errorWords} </li>
                    <li>Correct: {data.correctWords}</li>
                    <li>Points: {props.points}</li>
                </ul>
            </nav></>
                <span>write a translation for this word</span>
                <h3>{randomWords[props.wordIndex].word}</h3>
                <ul className={stylesG.btnContainer}>
                {currentWords.map((word, index) => (
                    <li key={index} className={stylesG.btnCheck} onClick={() => CheckWord(word)}>{word}</li>
                ))}
            </ul>
            </>
    )
}

export default WriteIt