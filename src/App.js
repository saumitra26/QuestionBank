
import './App.css';
import Nav from './components/Nav';
import {useState} from 'react'
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import{QuizContext} from "./Helpers/Context"
import English from './pages/English';
import {Router,Route,BrowserRouter} from 'react-router-dom'


function App() {
  const [gameState, setGameState]= useState("menu");
  return (
   
      <BrowserRouter>
        <div className="App">
          <Nav/>
          
          <Route path="/english" exact  component={English}/>
        </div>
     </BrowserRouter>
   
  );
}

export default App;
