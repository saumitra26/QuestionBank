import React from 'react'
import {useState} from 'react'
import MainMenu from '../components/MainMenu';
import Quiz from '../components/Quiz';
import EndScreen from '../components/EndScreen';
import{QuizContext} from "../Helpers/Context"
import '../App.css';
const English = () => {
    const [gameState, setGameState]= useState("menu");
    const [score, setScore]= useState(0);
    return (
        <div className="home">
            <h1>Quiz app</h1>
        <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
            {gameState==='menu' &&<MainMenu/>}
            {gameState==='quiz' &&<Quiz/>}
            {gameState==='endScreen' &&<EndScreen/>}
        </QuizContext.Provider>
        
        </div>
    )
}

export default English
