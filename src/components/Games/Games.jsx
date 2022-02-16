import React from "react";

import styles from './Games.module.css'
import { NavLink } from "react-router-dom";
import imgCheckCorrect from "./../../assets/img/check-the-correct-one.svg"
import imgListenAndGuess from "./../../assets/img/listen-and-guess.svg"
import imgListenSprint from "./../../assets/img/listen-sprint.svg"
import imgRememberTranslation from "./../../assets/img/remember-translation.svg"
import imgSelectTranslation from "./../../assets/img/select-translation.svg"
import imgSpeakAndCheck from "./../../assets/img/speak-and-check.svg"
import imgSprintGuess from "./../../assets/img/sprint-guess.svg"
import imgWriteTranslation from "./../../assets/img/write-translation.svg"
import imgPutTranlation from "./../../assets/img/put-translation.svg"


const Games = () => {

    const GAMES = [
        {img: imgWriteTranslation, path: "write-it", name: 'Write the translation ', discription: "Say the word on the screen and check your spelling"},
        {img: imgCheckCorrect, path: "check-it", name: "Check the correct one", discription: "Say the word on the screen and check your spelling"},
        {img: imgSelectTranslation, path: "select-rt", name: "Select the right translation ", discription: "Say the word on the screen and check your spelling"},
        {img: imgListenAndGuess, path: "check-it", name: "Guess and listen", discription: "Say the word on the screen and check your spelling"},
        {img: imgListenSprint, path: "check-it", name: "Sprint by listen ", discription: "Say the word on the screen and check your spelling"},
        {img: imgRememberTranslation, path: "check-it", name: "Remember translation", discription: "Say the word on the screen and check your spelling"},
        {img: imgSpeakAndCheck, path: "check-it", name: "Speak and check ", discription: "Say the word on the screen and check your spelling"},
        {img: imgSprintGuess, path: "check-it", name: "Sprint by guessing", discription: "Say the word on the screen and check your spelling"},
        {img: imgPutTranlation, path: "check-it", name: "Put together a translation", discription: "Say the word on the screen and check your spelling"},
    ]   

    return (
           <section className={styles.gameContainer}>
                {GAMES.map((game, index) => (
                    <NavLink key={index} to={`/games/` + game.path}>
                        <div className={styles.gameBlock}>
                            <div>
                                <h2>{game.name}</h2>
                                <p>{game.discription}</p>
                            </div>
                            
                            <img src={game.img} alt="" />
                        </div> 
                    </NavLink>
                ))}
           </section> 
    )
}

export default Games