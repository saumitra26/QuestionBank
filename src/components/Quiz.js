import React, {useState,useContext}from 'react'
import {Questions} from '../Helpers/QuestionBank'
import{QuizContext} from "../Helpers/Context"
const Quiz = () => {
    const {score,setScore,setGameState}= useContext(QuizContext);
    const [currQuestion, setCurrQuestion]=useState(0);
    const [optionChosen, setOptionChosen]=useState("")
    const [colorA, setColorA]=useState("")
    const [colorB, setColorB]=useState("")
    const [colorC, setColorC]=useState("")
    const [colorD, setColorD]=useState("")

    const colorChange=()=>{
        Questions[currQuestion].optionA===Questions[currQuestion].answer? setColorA('correct'):setColorA('wrong')
        Questions[currQuestion].optionB===Questions[currQuestion].answer? setColorB('correct'):setColorB('wrong')

    }
    function highlightBackgroundColor(colorA){
        const mapping ={
          'none': '',
          'correct': 'green',
          'wrong': 'red',
          'tie':'blue'
        };
        return mapping[colorA];
      } 
    const nextQuestion=()=>{
        if(Questions[currQuestion].mnser==optionChosen){
            setScore(score+1);
           
        }
        setColorA('none')
        setColorB('none')
        setCurrQuestion(currQuestion+1)
    }
    const finishQuiz=()=>{
        if(Questions[currQuestion].answer==optionChosen){
            setScore(score+1);
        }
        setGameState("endScreen")
    }
    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button style={{backgroundColor:highlightBackgroundColor(colorA)}}
                onClick={()=>{colorChange();setOptionChosen("A")}}>
                        A: {Questions[currQuestion].optionA}
                </button>
                <button  style={{backgroundColor:highlightBackgroundColor(colorB)}}
                 onClick={()=>{ colorChange();setOptionChosen("B")}}>B: {Questions[currQuestion].optionB}</button>
                <button onClick={()=>{setOptionChosen("C")}}>C: {Questions[currQuestion].optionC}</button>
                <button onClick={()=>{setOptionChosen("D")}}>D: {Questions[currQuestion].optionD}</button>

            </div>
            {currQuestion==Questions.length-1 ?
            ( <button onClick={finishQuiz}>Finish</button>):
            <button className='next' onClick={nextQuestion}>Next Questions</button>
            }
            

        </div>
    )
}

export default Quiz
