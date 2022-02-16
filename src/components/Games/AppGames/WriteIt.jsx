import React, { useRef, useState, useContext } from "react";
import styles from "../../../App.module.css";
import stylesG from "./AppGames.module.css"
import { NavLink } from "react-router-dom";
import Store from "../../../Context";





const WriteIt = (props) => {

   const input = useRef();

   const data = useContext(Store)

   const [randomWords, setRandomWords] = useState(data.playWords.sort(() => Math.random() - 0.5));

   const CheckWord = (event) =>{
       event.preventDefault()
       if(input.current.value === randomWords[props.wordIndex].translate){
           props.speak(randomWords[props.wordIndex].translate)
           data.setCorrectWords(data.correctWords + 1)
           if(props.wordIndex !== data.playWords.length - 1){
               props.setWordIndex(props.wordIndex + 1)
           }else{
               alert('Game over')
               props.setWordIndex(0)
           }
           input.current.value=""
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
                    <li>Errors: {props.errorWords} </li>
                    <li>Correct: {props.correctWords}</li>
                    <li>Points: {props.points}</li>
                </ul>
            </nav></>
                <span>write a translation for this word</span>
                <h3>{randomWords[props.wordIndex].word}</h3>
                <form onSubmit={CheckWord}  className={stylesG.writeWordBlock}>
                    <input ref={input} type="text" placeholder="Type your word here" />
                    <button className={stylesG.btnOk}>OK</button>
                </form>
            </>
    )
}

export default WriteIt