
import './App.css';
import Nav from './components/Nav';
import {useState} from 'react'
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import{QuizContext} from "./Helpers/Context"
import English from './pages/English';


function App() {
  const [gameState, setGameState]= useState("menu");
  return (
    <div className="App">
       <Nav/>
      <English/>
    </div>
  );
}

export default App;
