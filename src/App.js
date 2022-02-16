import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie'
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Library from './components/Library/Library';
import Learn from './components/Learn/Learn';
import Games from './components/Games/Games';
import WriteIt from './components/Games/AppGames/WriteIt';
import CheckIt from './components/Games/AppGames/CheckIt';
import Store from './Context';


function App() {
  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || [])
  const [wordIndex, setWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [errorWords, setErrorWords] = useState(0);
  const [playWords, setPlayWords] = useState(library.slice(-10));
  const [cookie, setCookie] = useCookies(['points'])
  const [points, setPoints] = useState(+cookie.points || 0);

  useEffect(() => {
    if(correctWords ) {
      setPoints(points + 1)
      setCookie('points', points + 1)
    }
  }, [correctWords])
  
  const progressBarWidth = { 
    width: `${(100/ library.slice(-10).length) * (wordIndex + 1)}vw` 
  };

  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word)
    speakInstance.voice = speechSynthesis.getVoices()[10]
    speechSynthesis.speak(speakInstance)
}

  return (
    <BrowserRouter >
    <Store.Provider value={{correctWords, setCorrectWords, errorWords, setErrorWords, playWords}}>
      <Header />
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard poits={points} />}/>
        <Route path="/library" element={<Library library={library} setLibrary={setLibrary} />}/>
        <Route path="/learn" element={<Learn speak={speak} library={library} wordIndex={wordIndex} setWordIndex={setWordIndex} progressBarWidth={progressBarWidth}/>}/>
        <Route path="/games" element={<Games />}/>
        <Route path="/games/write-it" element={<WriteIt speak={speak} setWordIndex={setWordIndex} wordIndex={wordIndex}  progressBarWidth={progressBarWidth} points={points} />} />
        <Route path="/games/check-it" element={<CheckIt speak={speak} setWordIndex={setWordIndex} wordIndex={wordIndex}  progressBarWidth={progressBarWidth} points={points} />} />
      </Routes>
      </Store.Provider>
    </BrowserRouter>
  );
}

export default App;
