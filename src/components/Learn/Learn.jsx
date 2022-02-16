import React, {useEffect} from "react";

import styles from '../../App.module.css';


const Learn = (props) => {


    
    useEffect(() => {
        props.speak(props.library[props.wordIndex].translate)
    }, [props.wordIndex]) 

    return (
            <><div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={props.progressBarWidth}></div>
            
        </div>
        <h3 className={styles.cLearn}>{props.library[props.wordIndex].translate}</h3>
            <div className={styles.cLearn}>{props.library[props.wordIndex].word}</div>
        <div onClick={() => {
            if(props.wordIndex === props.library.length - 1) {
                props.setWordIndex(0);
            }else{
                props.setWordIndex(props.wordIndex + 1)
            }
        
        }} className={styles.btnNext}></div></>
            
       
        
        
    )
}

export default Learn